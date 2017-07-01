import { gql } from 'react-apollo'

export const fetchAllRoutes = gql`
  {
    allRoutes {
      id
      name
      sent
    }
  }
`

export const addRoute = gql`
  mutation ($name: String!) {
    createRoute(name: $name) {
      id
      name
    }
  }
`

export const removeRoute = gql`
  mutation ($id: ID!) {
  deleteRoute(id: $id) {
    id
    name
  }
}
`
