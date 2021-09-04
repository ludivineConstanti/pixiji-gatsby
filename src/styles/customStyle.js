import { css } from "styled-components"

export const customStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap");
  body {
    font-family: "Montserrat", sans-serif;
    color: white;
  }
  input {
    color: white;
    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  button {
    border: none;
  }
`
