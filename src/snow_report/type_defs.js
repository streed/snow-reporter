const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type AreaSnowReport @key(fields: "id") {
    id: ID!
    subAreas: [SubAreaSnowReport]
    comments: [AreaSnowReportComment]
  }

  type AreaSnowReportComment {
    id: ID!
    body: String
    postDate: Int
    posterName: String
  }

  type SubAreaSnowReport @key(fields: "id") @key(fields: "latitude longitude") {
    id: ID!
    lastReadingTime: Int
    latitude: Float!
    longitude: Float!
    name: String
    baseDepth: Int
    currentSeasonTotal: SeasonTotal
    seasonTotals: [SeasonTotal]
    readings: [SnowReading]
  }

  type SnowReading {
    id: ID!
    readingTime: Int
    currentReading: Float
    unit: Units
  }

  type SeasonTotal {
    season: String
    total: Int
    unit: Units
  }

  extend type Query {
    areaSnowReport(id: ID!): AreaSnowReport
  }

  enum Units {
    SI
    IMPERIAL
  }
`;
