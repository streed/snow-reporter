exports.resolvers = {
  Query: {
    sataliteImages: async (parent, args, ctx) => {
      return ctx.loaders.sataliteImagery.getPolygonImages(args);
    }
  },
  Mutation: {
    addPolygon: async (parent, args, ctx) => {
      return ctx.loaders.sataliteImagery.addPolygon(args.geoJson);
    }
  },

  SubAreaSnowReport: {
    sataliteImages: async ({latitude, longitude, polygonId}, {start, end}, ctx) => {
      const args = {latitude, longitude, polygonId, start, end};
      return ctx.loaders.sataliteImagery.getPolygonImages(args);
    }
  }
}
