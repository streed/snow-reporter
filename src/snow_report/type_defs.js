const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type AreaSnowReport @key(fields: "id") {
    id: ID!
    name: String
    subAreas: [SubAreaSnowReport]
    comments: [AreaSnowReportComment]
  }

  type AreaSnowReportComment {
    id: ID!
    body: String
    postDate: Int
    posterName: String
  }

  type SubAreaSnowReport @key(fields: "id") @key(fields: "latitude longitude") @key(fields: "polygonId") {
    id: ID!
    lastReadingTime: Int
    latitude: Float!
    longitude: Float!
    name: String
    baseDepth: Int
    currentSeasonTotal: SeasonTotal
    seasonTotals: [SeasonTotal]
    readings: [SnowReading]
    polygonId: String!
  }

  type SnowReading {
    id: ID!
    readingTime: Int
    currentReading: Float
    units: Units
  }

  type SeasonTotal {
    id: ID!
    season: String
    total: Int
    units: Units
  }

  extend type Query {
    areaSnowReports: [AreaSnowReport]
    areaSnowReport(id: ID!): AreaSnowReport
  }

  enum Units {
    SI
    IMPERIAL
  }
`;
