import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj4bftimcf1w60142urmo7pbn'
})

const client = new ApolloClient({
  networkInterface
})

export default client