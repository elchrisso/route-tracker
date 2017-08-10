import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql'
  //uri: 'https://api.graph.cool/simple/v1/cj4bftimcf1w60142urmo7pbn'
})

// networkInterface.use([
//   {
//     applyMiddleware (req, next) {
//       if (!req.options.headers) {
//         req.options.headers = {}
//       }
//
//       const token = localStorage.getItem('token')
//
//       req.options.headers.authorization = (token) ? `Bearer ${token}` : null
//
//       next()
//     }
//   }
// ])


export default new ApolloClient({
  networkInterface
})