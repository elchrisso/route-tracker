import { gql } from 'react-apollo'

export const fetchAllRoutes = gql`
  {
    allRoutes {
      id
      name
      sent
      style
      grade
    }
  }
`

export const fetchRouteById = gql`
  query ($id: ID!) {
    Route(id: $id) {
      id
      name
      grade
    }
  }
`

export const addRoute = gql`
  mutation ($name: String!, $style: String!, $grade: String!) {
    createRoute(
        name: $name,
        style: $style,
        grade: $grade
    )
    {
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

export const sendRoute = gql`
  mutation ($id: ID!, $sent: Boolean) {
    updateRoute(id: $id, sent: true) {
      id
    }
  }
`