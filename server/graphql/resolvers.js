import { getMovies, getMovie, getSuggestions } from '../db/index'

export default {
  Query: {
    movies: (_, {limit, rating}) => {
      return getMovies(limit, rating)
    },
    movie: (_, { id }) => {
      return getMovie(id)
    },
    suggestions: (_, { id }) => {
      return getSuggestions(id)
    }
  }
}