const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: '/tmp/snow_report.sqlite'
});

const AreaSnowReport = sequelize.define('area_snow_report', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING
});

const AreaSnowReportComment = sequelize.define('area_snow_report_comment', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  body: Sequelize.STRING,
  postDate: Sequelize.INTEGER,
  posterName: Sequelize.STRING
});

const SubAreaSnowReport = sequelize.define('sub_area_snow_report', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  lastReadingTime: Sequelize.INTEGER,
  latitude: Sequelize.FLOAT,
  longitude: Sequelize.FLOAT,
  name: Sequelize.STRING,
  baseDepth: Sequelize.INTEGER,
  polygonId: Sequelize.STRING
});

const SnowReading = sequelize.define('snow_reading', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  readingTime: Sequelize.INTEGER,
  currentReading: Sequelize.FLOAT,
  units: Sequelize.STRING
});

const SeasonTotal = sequelize.define('season_total', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  season: Sequelize.STRING,
  total: Sequelize.INTEGER,
  units: Sequelize.STRING
});

AreaSnowReport.hasMany(SubAreaSnowReport, {as: 'subAreas'});
SubAreaSnowReport.belongsTo(AreaSnowReport);

AreaSnowReport.hasMany(AreaSnowReportComment, {as: 'comments'});
AreaSnowReportComment.belongsTo(AreaSnowReport);

SubAreaSnowReport.hasMany(SeasonTotal, {as: 'seasonTotals'});
SeasonTotal.belongsTo(SubAreaSnowReport);

SubAreaSnowReport.hasMany(SnowReading, {as: 'readings'});
SnowReading.belongsTo(SubAreaSnowReport);

module.exports = {
  AreaSnowReport,
  AreaSnowReportComment,
  SubAreaSnowReport,
  SnowReading,
  SeasonTotal,
  sequelize
};
