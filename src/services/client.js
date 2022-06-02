import { ApolloClient, InMemoryCache } from '@apollo/client'

export default new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
})
