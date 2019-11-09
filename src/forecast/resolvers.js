const _ = require('lodash');

exports.resolvers = {
  Query: {
    forecast: (parent, {latitude, longitude}) => ({latitude, longitude})
  },
  Forecast: {
    timezone: async ({latitude, longitude}, args, context) => {
      const {timezone} = await context.darkSkyLoaderWrapper(latitude, longitude);
      return timezone;
    },
    currently: async ({latitude, longitude}, args, context) => {
      const {currently} = await context.darkSkyLoaderWrapper(latitude, longitude);
      return currently;
    },
    minutely: async ({latitude, longitude}, args, context) => {
      const {minutely} = await context.darkSkyLoaderWrapper(latitude, longitude);
      return minutely;
    },
    hourly: async ({latitude, longitude}, args, context) => {
      const {hourly} = await context.darkSkyLoaderWrapper(latitude, longitude);
      return hourly;
    },
    daily: async ({latitude, longitude}, args, context) => {
      const {daily} = await context.darkSkyLoaderWrapper(latitude, longitude);
      return daily;
    },
    alerts: async ({latitude, longitude}, args, context) => {
      const {alerts} = await context.darkSkyLoaderWrapper(latitude, longitude);
      return alerts;
    }
  },
  SubAreaSnowReport: {
    forecast: async ({latitude, longitude}) => ({latitude, longitude}),
  }
}
