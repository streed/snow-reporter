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
  }
}
