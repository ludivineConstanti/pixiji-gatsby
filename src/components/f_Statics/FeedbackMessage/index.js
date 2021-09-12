import React from "react"
import PropTypes from "prop-types"

import SFeedbackMessage from "./SFeedbackMessage"

const FeedbackMessage = ({ content }) => {
  return <SFeedbackMessage>{content}</SFeedbackMessage>
}

FeedbackMessage.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

FeedbackMessage.defaultProps = {
  content: "",
}

export default FeedbackMessage
