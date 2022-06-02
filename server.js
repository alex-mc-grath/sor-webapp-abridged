import { ApolloServer } from 'apollo-server'

import { typeDefs } from './server/schema.js'
import { Mutation } from './server/resolvers/Mutation.js'

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Mutation,
  },
})
server.listen().then(({ url }) => console.log(`server ready on ${url}`))

// refactor whole project
// jwtSign(email, accountType)
// .env
