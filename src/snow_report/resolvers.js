const _ = require('lodash');

exports.resolvers = {
  Query: {
    areaSnowReport: (parent, {id}) => {
      return {
        id: id
      };
    }
  },
  AreaSnowReport: {
    subAreas: async ({id}, args, ctx) => {
      const {areas} = await ctx.snowReportLoader.load(id);
      return areas;
    },
    comments: async ({id}, args, ctx) => {
      const {comments} = await ctx.snowReportLoader.load(id);
      return comments;
    },
  },
  SubAreaSnowReport: {
    currentSeasonTotal: async ({seasonTotals}, args, ctx) => {
      // Season's are not years...they are a combination
      // of last start to next start.
      const currentYear = new Date().getFullYear().toString();
      return _.find(seasonTotals, (season) => {
        return season.season === currentYear;
      });
    }
  }
}
