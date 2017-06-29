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
  mutation addRoute($name: String!) {
    createRoute(name: $name) {
      id
      name
    }
  }
`