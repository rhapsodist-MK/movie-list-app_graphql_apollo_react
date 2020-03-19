const rhapsodist = {
  name: "rhapsodist",
  age: 31,
  gender: "male"
}

const resolvers = {
  Query: {
    person: () => {
      return rhapsodist
    }
  }
}

export default resolvers