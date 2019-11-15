const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Forecast @key(fields: "latitude longitude") {
    latitude: Float!
    longitude: Float!
    timezone: String
    currently: CurrentForecast
    minutely: MinutelyForecast
    hourly: HourlyForecast
    daily: DailyForecast
    alerts: [ForecastAlert]
    flags: ForecastFlags
  }

  type ForecastFlags {
    sources: [String!]
    nearestStation: Float
    units: String
  }

  type CurrentForecast {
    time: Int
    summary: String
    icon: String
    nearestStormDistance: Float
    precipIntensity: Float
    precipIntensityError: Float
    precipProbability: Float
    precipType: String
    temperature: Float
    apparentTemperature: Float
    dewPoint: Float
    humidity: Float
    windSpeed: Float
    windGust: Float
    windBearing: Int
    cloudCover: Float
    uvIndex: Int
    visibility: Float
    ozone: Float
  }

  type MinutelyForecast {
    summary: String
    icon: String
    data: [MinutelyData]
  }

  type MinutelyData {
    time: Int
    precipIntensity: Float
    precipIntensityError: Float
    precipProbability: Float
    precipType: String
  }

  type HourlyForecast {
    summary: String
    icon: String
    data: [HourlyData]
  }

  type HourlyData {
    time: Int
    summary: String
    icon: String
    precipIntensity: Float
    precipProbability: Float
    precipType: String
    temperature: Float
    apparentTemperature: Float
    dewPoint: Float
    humidity: Float
    pressure: Float
    windSpeed: Float
    windGust: Float
    windBearing: Int
    cloudCover: Float
    uvIndex: Int
    visibility: Float
    ozone: Float
  }

  type DailyForecast {
    summary: String
    icon: String
    data: [DailyData]
  }

  type DailyData {
    time: Int
    summary: String
    icon: String
    sunriseTime: Int
    sunsetTime: Int
    moonPhase: Float
    precipIntensity: Float
    precipIntensityMax: Float
    precipIntensityMaxTime: Int
    precipProbability: Float
    precipType: String
    temperatureHigh: Float
    temperatureHighTime: Int
    temperatureLow: Float
    temperatureLowTIme: Int
    apparentTemparatureHigh: Float
    apparentTemparatureHighTime: Int
    apparentTemparatureLow: Float
    apparentTemparatureLowTime: Int
    dewPoint: Float
    humidity: Float
    pressure: Float
    windSpeed: Float
    windGust: Float
    windGustTime: Int
    windBearing: Int
    cloudCover: Float
    unIndex: Int
    uvIndexTime: Int
    visibility: Int
    ozone: Float
    temperatureMin: Float
    temperatureMinTime: Int
    temperatureMax: Float
    temperatureMaxTime: Int
    apparentTemparatureMin: Float
    apparentTemparatureMinTime: Int
    apparentTemparatureMax: Float
    apparentTemparatureMaxTime: Int
  }

  type ForecastAlert {
    title: String
    time: Int
    expires: Int
    description: String
  }

  enum Units {
    SI
    IMPERIAL
  }

  extend type SubAreaSnowReport @key(fields: "latitude longitude") {
    latitude: Float! @external
    longitude: Float! @external
    forecast: Forecast
  }

  extend type Query {
    forecast(latitude: Float!, longitude: Float!): Forecast
    timemachine(latitude: Float!, longitude: Float!, time: Int!): Forecast
  }
`;
