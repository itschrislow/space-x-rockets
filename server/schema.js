const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    // Basic Info
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
    country: { type: GraphQLString },
    description: { type: GraphQLString },
    wikipedia: { type: GraphQLString },

    // Size
    height: { type: MetersType },
    mass: { type: KilosType },
    diameter: { type: MetersType },
    stages: { type: GraphQLInt },

    // Launch History
    active: { type: GraphQLBoolean },
    first_flight: { type: GraphQLString },
    cost_per_launch: { type: GraphQLInt },
    success_rate_pct: { type: GraphQLInt },
  })
});

// Meters Type
const MetersType = new GraphQLObjectType({
    name: 'Meters',
    fields: () => ({
        meters: { type: GraphQLString }
    })
});

// Kilos Type
const KilosType = new GraphQLObjectType({
    name: 'Kilos',
    fields: () => ({
        kg: { type: GraphQLString }
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args) {
          return axios
            .get('https://api.spacexdata.com/v3/rockets')
            .then(res => res.data)
      }    
    },
    rocket: {
        type: RocketType,
        args: {
            rocket_id: { type: GraphQLString }
        },
        resolve(parent, args) {
            return axios.get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`)
                .then(res => res.data)
        }
    }
  }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});