const _ = require('lodash');

exports.resolvers = {
  Query: {
    forecast: (parent, {latitude, longitude}) => ({latitude, longitude})
  },
  Forecast: {
    timezone: async ({latitude, longitude}, args, ctx) => {
      const {timezone} = await ctx.darkSkyLoaderWrapper(latitude, longitude);
      return timezone;
    },
    currently: async ({latitude, longitude}, args, ctx) => {
      const {currently} = await ctx.darkSkyLoaderWrapper(latitude, longitude);
      return currently;
    },
    minutely: async ({latitude, longitude}, args, ctx) => {
      const {minutely} = await ctx.darkSkyLoaderWrapper(latitude, longitude);
      return minutely;
    },
    hourly: async ({latitude, longitude}, args, ctx) => {
      const {hourly} = await ctx.darkSkyLoaderWrapper(latitude, longitude);
      return hourly;
    },
    daily: async ({latitude, longitude}, args, ctx) => {
      const {daily} = await ctx.darkSkyLoaderWrapper(latitude, longitude);
      return daily;
    },
    alerts: async ({latitude, longitude}, args, ctx) => {
      const {alerts} = await ctx.darkSkyLoaderWrapper(latitude, longitude);
      return alerts;
    },
    flags: async ({latitude, longitude}, args, ctx) => {
      const {flags} = await ctx.darkSkyLoaderWrapper(latitude, longitude);
      return flags;
    },
  },
  ForecastFlags: {
    nearestStation: (parent) => {
      return parent['nearest-station'];
    }
  },
  SubAreaSnowReport: {
    forecast: async ({latitude, longitude}) => ({latitude, longitude}),
  }
}
