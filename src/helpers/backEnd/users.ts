import axios from "axios"

interface CreateUserProps {
  email: string
  password: string
}

export const createUser = ({ email, password }: CreateUserProps) =>
  axios({
    url: process.env.GATSBY_API,
    method: "post",
    data: {
      query: `mutation createUser($email: String!, $password: String!) {
      createUser(input: {email: $email, password: $password}) {
        success
        message
      }
    }
      `,
      variables: {
        email,
        password,
      },
    },
  })

interface GetUserProps {
  email: string
  password: string
}

export const getUser = ({ email, password }: GetUserProps) =>
  axios({
    url: process.env.GATSBY_API,
    method: "post",
    data: {
      query: `query getUser($email: String!, $password: String!) {
                  getUser(input: {email: $email, password: $password}) {
                  success
                  message
                }
              }`,
      variables: {
        email,
        password,
      },
    },
  })
