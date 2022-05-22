import React from "react"

import SFeedbackMessage from "./style"

interface FeedbackMessageProps {
  content: string | JSX.Element | JSX.Element[]
}

const FeedbackMessage = ({ content = "" }: FeedbackMessageProps) => {
  return <SFeedbackMessage>{content}</SFeedbackMessage>
}

export default FeedbackMessage
