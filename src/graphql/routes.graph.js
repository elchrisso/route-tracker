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
      comments {
        id
        comment
      }
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

export const addComment = gql`
  mutation ($comment: String!, $routeId: ID!) {
    createComment (comment: $comment, routeId: $routeId) {
      id
    }
  }
`

export const addUser = gql`
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

export const fetchLoggedInUser = gql`
  query {
    user {
      id
      email
      
      profile {
        id
        name
      }
    }
  }
`
