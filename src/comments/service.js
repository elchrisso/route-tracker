import { gql } from 'react-apollo'

class CommentService {
  getRouteComments = gql`
    query ($routeId: ID!) {
      Route(id: $routeId) {
        comments {
          comment
          user {
            profile {
              name
            }
          }
        }
      }
    }
  `
}

export default new CommentService()