import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      // likeMovie: (_, { id }, { cache }) => {
      //   cache.writeData({
      //     id: `Movie:${id}`, 
      //     data: {
      //       isLiked: true
      //     }
      //   })
      // },
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.writeData({
          id: `Movie:${id}`, 
          data: {
            isLiked: !isLiked
          }
        })
      }
    }
  }
})

export default client