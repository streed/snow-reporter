const { gql } = require('apollo-server');

exports.typeDefs = gql`
  enum GeoJsonType {
    Feature
    Polygon
  }

  type GeoJson {
    type: GeoJsonType!
    properties: GeoJsonProperties
    geometry: GeoJsonGeometry!
  }

  input GeoJsonRequest {
    name: String!
    geo_json: GeoJsonInput!
  }

  input GeoJsonInput {
    type: GeoJsonType!
    properties: GeoJsonPropertiesInput
    geometry: GeoJsonGeometryInput!
  }

  input GeoJsonGeometryInput {
    type: GeoJsonType!
    coordinates: [GeoJsonPointInput!]!
  }

  input GeoJsonPointInput {
    longitude: Float!
    latitude: Float!
  }

  input GeoJsonPropertiesInput {
    a: String
  }

  type GeoJsonResponse {
    id: ID!
    geo_json: GeoJson!
    center: [Float!]!
    area: Float!
    user_id: String!
  }

  type GeoJsonProperties {
    a: String
  }

  type GeoJsonGeometry {
    type: GeoJsonType!
    coordinates: [GeoJsonPoint!]!
  }

  type GeoJsonPoint {
    longitude: Float!
    latitude: Float!
  }

  type SataliteImage {
    dt: Int!
    type: String!
    dc: Float!
    cl: Float!
    sun: Sun!
    image: Image
    tile: Tile
    stats: Stats
    data: Image
  }

  type Sun {
    azimuth: Float
    elevation: Float
  }

  type Image {
    truecolor: String!
    falsecolor: String!
    ndvi: String!
    evi: String!
  }

  type Tile {
    truecolor: String!
    falsecolor: String!
    ndvi: String!
    evi: String!
  }

  type Stats {
    ndvi: String!
    evi: String!
  }

  extend type SubAreaSnowReport @key(fields: "polygonId") {
    polygonId: String! @external
    sataliteImages(start: Int!, end: Int!): [SataliteImage]
  }

  extend type Query {
    sataliteImages(polygonId: ID!, start: Int!, end: Int!, coverageMin: Float = 50.0, coverageMax: Float = 100.0, cloudsMin: Float = 0.0, cloudsMax: Float = 100.0, resolutionMin: Int= 1, resolutionMax: Int = 100): [SataliteImage]
  }

  extend type Mutation {
    addPolygon(geoJson: GeoJsonRequest!): GeoJsonResponse!
  }
`;
