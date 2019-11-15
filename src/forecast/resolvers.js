const _ = require('lodash');

exports.resolvers = {
  Query: {
    forecast: (parent, {latitude, longitude}) => ({latitude, longitude}),
    timemachine: (parent, {latitude, longitude, time}) => ({latitude, longitude, time})
  },
  Forecast: {
    timezone: async ({latitude, longitude, time}, args, ctx) => {
      const {timezone} = await ctx.darkSkyLoaderWrapper(parent);
      return timezone;
    },
    currently: async (parent, args, ctx) => {
      const {currently} = await ctx.darkSkyLoaderWrapper(parent);
      return currently;
    },
    minutely: async (parent, args, ctx) => {
      const {minutely} = await ctx.darkSkyLoaderWrapper(parent);
      return minutely;
    },
    hourly: async (parent, args, ctx) => {
      const {hourly} = await ctx.darkSkyLoaderWrapper(parent);
      return hourly;
    },
    daily: async (parent, args, ctx) => {
      const {daily} = await ctx.darkSkyLoaderWrapper(parent);
      return daily;
    },
    alerts: async (parent, args, ctx) => {
      const {alerts} = await ctx.darkSkyLoaderWrapper(parent);
      return alerts;
    },
    flags: async (parent, args, ctx) => {
      const {flags} = await ctx.darkSkyLoaderWrapper(parent);
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
