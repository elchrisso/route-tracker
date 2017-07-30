import { gql } from 'react-apollo'

class climberService {
  getLoggedInClimber = gql`
    query {
      user {
        id
        email
        profile {
          name
        }
      }
    }
  `
}

export default new climberService()