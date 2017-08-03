import { gql } from 'react-apollo'

class AccountsService {
  addNewAccount = gql`
    mutation ($name: String!, $email: String!, $password: String!) {
      createUser(
        profile: {
          name: $name
        }
        authProvider: {
          email: {
            email: $email
            password: $password
          }
        }
      ) {
        id
        profile {
          name
        }
      }
    }
  `
}

export default new AccountsService()