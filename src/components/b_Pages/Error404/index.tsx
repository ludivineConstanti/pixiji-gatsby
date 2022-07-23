import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  kanjisArrFormatter,
  getKanjisNum,
} from "src/helpers/formatters/kanjisArrFormatter"
import { useAppSelector } from "src/store"
import PageWithText from "src/components/c_Partials/PageWithText"
import LinkIcon from "src/components/e_Interactives/LinkIcon/index"
import CloudDragon from "src/components/d_Illustrations/_compIllus/CloudDragon"
import SLinkIconContainer from "./SError404"
import {
  KanjisJsonFragmentForIllustrationsProps,
  AllQuizFragmentForQuizLinkProps,
  IlluQueryProps,
} from "src/models/models"
import { colors } from "src/models/constants"

interface QueryProps {
  allKanjisJson: KanjisJsonFragmentForIllustrationsProps
  allQuiz: AllQuizFragmentForQuizLinkProps
  allCloudDragonJson: IlluQueryProps
}

const Error404 = () => {
  const { allKanjisJson, allQuiz, allCloudDragonJson } =
    useStaticQuery<QueryProps>(graphql`
      query {
        allKanjisJson {
          ...kanjisJsonFragmentForIllustrations
        }
        allQuiz {
          ...quizFragmentForQuizLink
        }
        allCloudDragonJson {
          nodes {
            main
            color
            column
            indexIllu
            indexKanjiGroup
            row
            size
            position
          }
        }
      }
    `)

  const currentQuizId = useAppSelector(state => state.quiz.currentQuizId)
  const quizzesSlug = allQuiz.nodes.filter(
    data => data.quizId === currentQuizId
  )[0].slug

  const kanjisArr = useMemo(
    () =>
      kanjisArrFormatter(
        allKanjisJson.nodes,
        getKanjisNum(allCloudDragonJson.nodes)
      ),
    [allCloudDragonJson, allKanjisJson]
  )

  return (
    <>
      <PageWithText
        illu={{
          kanjisArr,
          renderIllu: data => <CloudDragon data={data} />,
          arrDataIllu: {
            arrIllu: allCloudDragonJson.nodes,
            colorIllu: colors.cloudDragon.background,
          },
        }}
        textWithTitle={{
          title: "404",
          text: [
            "Congratulation! You found the 404 page!",
            "If you want to visit other pages, here are a few links:",
          ],
        }}
        buttonBig={{ text: "Quizzes", path: `/quizzes/${quizzesSlug}` }}
      >
        <SLinkIconContainer>
          <LinkIcon path="https://github.com/ludivineConstanti" columnStart={1}>
            <svg
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48.6195 65.4531C47.3186 65.703 46.9085 64.9052 46.9085 64.2227V57.1895C46.9085 54.796 46.069 53.2388 45.1462 52.4441C50.856 51.8097 56.8542 49.6405 56.8542 39.7973C56.8542 36.9968 55.8577 34.709 54.214 32.9179C54.4799 32.2707 55.3579 29.6625 53.9608 26.1347C53.9608 26.1347 51.8108 25.4458 46.9181 28.7621C44.8706 28.1853 42.6789 27.9066 40.5001 27.8937C38.3213 27.9034 36.1296 28.1853 34.0821 28.7557C29.1862 25.4394 27.033 26.1282 27.033 26.1282C25.6423 29.6592 26.5203 32.2642 26.7862 32.9147C25.1457 34.709 24.146 36.9936 24.146 39.7941C24.146 49.6117 30.1282 51.8129 35.8252 52.4634C35.0915 53.1042 34.4282 54.2321 34.1975 55.8918C32.7332 56.5455 29.0259 57.6766 26.7382 53.7579C26.7382 53.7579 25.3828 51.297 22.8066 51.1144C22.8066 51.1144 20.3074 51.0824 22.6304 52.6748C22.6304 52.6748 24.3126 53.4631 25.4789 56.4237C25.4789 56.4237 26.9625 60.9993 34.0918 59.4485V64.2195C34.0918 64.8956 33.6784 65.6902 32.3999 65.4531C22.2107 62.0663 14.8667 52.457 14.8667 41.1334C14.8667 26.9742 26.3441 15.5 40.5001 15.5C54.6561 15.5 66.1335 26.9742 66.1335 41.1334C66.1335 52.4538 58.7991 62.0599 48.6195 65.4531Z"
                fill="white"
              />
            </svg>
          </LinkIcon>
          <LinkIcon
            path="https://www.linkedin.com/in/ludivine-constanti/"
            columnStart={3}
          >
            <svg
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.4383 58.4375H21.8533V30.6259H29.4383V58.4375ZM25.6458 27.4199C23.2034 27.4199 21.2212 25.4226 21.2212 22.96C21.2212 20.4974 23.2034 18.5 25.6458 18.5C28.0881 18.5 30.0703 20.4974 30.0703 22.96C30.0703 25.4226 28.0907 27.4199 25.6458 27.4199ZM59.7782 58.4375H52.1932V44.2687C52.1932 35.7533 42.0799 36.398 42.0799 44.2687V58.4375H34.4949V30.6259H42.0799V35.0884C45.612 28.5501 59.7782 28.0672 59.7782 41.3485V58.4375Z"
                fill="white"
              />
            </svg>
          </LinkIcon>
          <LinkIcon path="https://www.behance.net/Lu-di" columnStart={5}>
            <svg
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M59.6355 41.5614H50.0157C50.9369 35.2598 59.2658 36.0949 59.6355 41.5614ZM62.8135 27.75H46.876V24.5625H62.8135V27.75ZM29.775 24.6071C41.4094 24.7793 41.6325 36.1778 35.554 39.2824C42.9107 41.9599 43.1562 56.412 28.7423 56.412H15.001V24.6071H29.775ZM54.373 31.7981C60.9201 31.7981 64.9204 35.5817 65.7938 41.2013C65.9564 42.2786 66.0233 43.7289 65.9914 45.7498H49.8659C49.4642 51.7232 56.3365 52.7878 58.6857 50.0625H65.4177C64.4805 52.8197 61.1082 56.4375 54.5802 56.4375C48.049 56.4375 43.6885 52.7655 43.6885 44.3792C43.6885 36.0694 47.6952 31.7981 54.373 31.7981ZM21.3759 43.6783H28.5829C34.569 43.6783 34.9674 50.0852 28.4777 50.0852H21.3759V43.6783ZM21.3759 30.9283H28.3279C35.1682 30.9283 34.3235 37.3033 28.9909 37.3033H21.3759V30.9283Z"
                fill="white"
              />
            </svg>
          </LinkIcon>
          <LinkIcon
            path="https://www.instagram.com/ludivine_constanti/tagged/"
            columnStart={7}
          >
            <svg
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.5 20.224C47.1041 20.224 47.8873 20.2487 50.4968 20.3683C57.1998 20.6733 60.3308 23.8538 60.6358 30.5073C60.7554 33.1147 60.7781 33.898 60.7781 40.5021C60.7781 47.1082 60.7533 47.8894 60.6358 50.4968C60.3287 57.1442 57.206 60.3308 50.4968 60.6358C47.8873 60.7554 47.1082 60.7801 40.5 60.7801C33.8959 60.7801 33.1127 60.7554 30.5053 60.6358C23.7857 60.3287 20.6713 57.1339 20.3662 50.4947C20.2467 47.8873 20.2219 47.1061 20.2219 40.5C20.2219 33.8959 20.2487 33.1147 20.3662 30.5053C20.6733 23.8538 23.7961 20.6713 30.5053 20.3662C33.1147 20.2487 33.8959 20.224 40.5 20.224ZM40.5 15.7656C33.7826 15.7656 32.9416 15.7945 30.3033 15.914C21.3206 16.3263 16.3283 21.3102 15.9161 30.3012C15.7945 32.9416 15.7656 33.7826 15.7656 40.5C15.7656 47.2174 15.7945 48.0605 15.914 50.6988C16.3263 59.6815 21.3102 64.6737 30.3012 65.086C32.9416 65.2055 33.7826 65.2344 40.5 65.2344C47.2174 65.2344 48.0605 65.2055 50.6988 65.086C59.6733 64.6737 64.6779 59.6898 65.0839 50.6988C65.2055 48.0605 65.2344 47.2174 65.2344 40.5C65.2344 33.7826 65.2055 32.9416 65.086 30.3033C64.682 21.3288 59.6918 16.3283 50.7009 15.9161C48.0605 15.7945 47.2174 15.7656 40.5 15.7656ZM40.5 27.7989C33.4857 27.7989 27.7989 33.4857 27.7989 40.5C27.7989 47.5143 33.4857 53.2032 40.5 53.2032C47.5143 53.2032 53.2011 47.5163 53.2011 40.5C53.2011 33.4857 47.5143 27.7989 40.5 27.7989ZM40.5 48.7448C35.9468 48.7448 32.2552 45.0552 32.2552 40.5C32.2552 35.9468 35.9468 32.2552 40.5 32.2552C45.0532 32.2552 48.7448 35.9468 48.7448 40.5C48.7448 45.0552 45.0532 48.7448 40.5 48.7448ZM53.704 24.3299C52.0633 24.3299 50.7338 25.6594 50.7338 27.298C50.7338 28.9367 52.0633 30.2662 53.704 30.2662C55.3427 30.2662 56.6701 28.9367 56.6701 27.298C56.6701 25.6594 55.3427 24.3299 53.704 24.3299Z"
                fill="white"
              />
            </svg>
          </LinkIcon>
        </SLinkIconContainer>
      </PageWithText>
    </>
  )
}

export default Error404
