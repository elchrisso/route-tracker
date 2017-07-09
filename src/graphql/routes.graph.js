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
      style
      description
    }
  }
`

export const addRoute = gql`
  mutation ($name: String!, $style: String!, $grade: String!, $description: String) {
    createRoute(
        name: $name,
        style: $style,
        grade: $grade,
        description: $description
    )
    {
      id
      name
    }
  }
`

export const editRockRoute = gql`
  mutation ($id: ID!, $description: String, $style: String) {
    updateRoute(id: $id, description: $description, style: $style) {
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