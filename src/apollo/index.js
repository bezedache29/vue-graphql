import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

const getHeaders = () => {
  const headers = {}
  const token = process.env.VUE_APP_CLE
  if (token) {
    headers.authorization = `Bearer ${token}`
  }
  return headers
}

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://api.github.com/graphql',
  fetch,
  headers: getHeaders()
})

// Cache implementation
const cache = new InMemoryCache({appTypename: true})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

export default apolloClient