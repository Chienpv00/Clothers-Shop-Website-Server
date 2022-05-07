const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Query {
        getTrack: [Track!]!
    }

    type Track {
        id: ID!
        "The track's title"
        title: String!
        "The track's main Author"
        author: Author!
        "The track's illustration to display in track card or track page detail"
        thumbnail: String
        "The track's approximate length to complete, in minutes"
        length: Int
        "The number of modules this track contains"
        modulesCount: Int
        "The track's complete description, can be in markdown format"
        description: String
        "The number of times a track has been viewed"
    }

    type Author {
        id: ID!
        "Author's first and last name"
        name: String!
        "Author's profile picture"
        photo: String
    }
`;

module.exports = typeDefs
