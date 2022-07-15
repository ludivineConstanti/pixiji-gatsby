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
      query: `
      mutation createUser($email: String!, $password: String!) {
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

interface DeleteUserProps {
  email: string
  password: string
}

export const deleteUser = ({ email, password }: DeleteUserProps) =>
  axios({
    url: process.env.GATSBY_API,
    method: "post",
    data: {
      query: `
      mutation deleteUser($email: String!, $password: String!) {
        deleteUser(input: {email: $email, password: $password}) {
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

interface SetUserEmailProps {
  email: string
  newEmail: string
  password: string
}

export const setUserEmail = ({
  email,
  newEmail,
  password,
}: SetUserEmailProps) =>
  axios({
    url: process.env.GATSBY_API,
    method: "post",
    data: {
      query: `
      mutation setUserEmail($email: String!, $newEmail: String!, $password: String!) {
        setUserEmail(input: {email: $email, newEmail: $newEmail, password: $password}) {
          success
          message
        }
      }
      `,
      variables: {
        email,
        newEmail,
        password,
      },
    },
  })

interface SetUserPasswordProps {
  email: string
  password: string
  newPassword: string
}

export const setUserPassword = ({
  email,
  password,
  newPassword,
}: SetUserPasswordProps) =>
  axios({
    url: process.env.GATSBY_API,
    method: "post",
    data: {
      query: `
        mutation setUserPassword($email: String!, $password: String!, $newPassword: String!) {
          setUserPassword(input: {email: $email, password: $password, newPassword: $newPassword}) {
            success
            message
          }
        }
        `,
      variables: {
        email,
        password,
        newPassword,
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
      query: `
      query getUser($email: String!, $password: String!) {
        getUser(input: {email: $email, password: $password}) {
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
