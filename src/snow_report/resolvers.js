const _ = require('lodash');

exports.resolvers = {
  Query: {
    areaSnowReport: (parent, {id}) => {
      return {
        id: id
      };
    },
    areaSnowReports: async (parent, args, ctx) => {
      const reports = await ctx.models.AreaSnowReport.findAll({
        attributes: ['id'],
      });

      const reportIds = _.map(reports, (report) => ({ id: report.id }));
      return reportIds;
    },
  },
  AreaSnowReport: {
    name: async ({id}, args, ctx) => {
      const {name} = await ctx.snowReportLoader.load(id);
      return name;
    },
    subAreas: async ({id}, args, ctx) => {
      const areas = await ctx.models.SubAreaSnowReport.findAll({
        where: {
          areaSnowReportId: id
        }
      });
      return areas;
    },
    comments: async ({id}, args, ctx) => {
      const comments = await ctx.models.AreaSnowReportComment.findAll({
        where: {
          areaSnowReportId: id
        }
      });
      return comments;
    },
  },
  SubAreaSnowReport: {
    readings: async ({id}, args, ctx) => {
      const readings = await ctx.models.SnowReading.findAll({
        where: {
          subAreaSnowReportId: id
        }
      });

      return readings;
    },
    seasonTotals: async ({id}, args, ctx) => {
      const totals = await ctx.models.SeasonTotal.findAll({
        where: {
          subAreaSnowReportId: id
        }
      });

      return totals;
    },
    currentSeasonTotal: async ({id}, args, ctx) => {
      const totals = await ctx.models.SeasonTotal.findAll({
        where: {
          subAreaSnowReportId: id
        }
      });
      // Season's are not years...they are a combination
      // of last start to next start.
      const currentYear = new Date().getFullYear().toString();
      return _.find(totals, (season) => {
        return season.season === currentYear;
      });
    }
  }
}
