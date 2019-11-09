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
  }
}
