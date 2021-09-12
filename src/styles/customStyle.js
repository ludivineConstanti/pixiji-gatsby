import { css } from "styled-components"

export const customStyle = css`
  body {
    font-family: "Montserrat", sans-serif;
    color: white;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  input {
    color: white;
    ::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
  button {
    border: none;
    color: white;
    background-color: transparent;
    padding: 0;
    margin: 0;
  }
`
