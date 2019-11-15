const _ = require('lodash');
const axios = require('axios');
const DataLoader = require('dataloader');
const querystring = require('querystring');
const Dataloader = require('dataloader');
const models = require('./models');
const {Op} = require('sequelize');

const reorderResults = (rows, ids) => {
  const values = _.reduce(rows, (acc, row) => {
    acc[row.id] = row;
    return acc;
  }, {});
    
  return Promise.resolve(_.reduce(ids, (acc, id) => {
    acc.push(values[id]);
    return acc;
  }, []));
};

const getMultiSnowReports = async (ids) => {
  const rows = await models.AreaSnowReport.findAll({
    where: {
      id: {
        [Op.in]: ids
      }
    }
  });

  return reorderResults(rows, ids);
};

const getMultiSubAreaSnowReports = async (ids) => {
  const rows = await models.SubAreaSnowReport.findAll({
    where: {
      id: {
        [Op.in]: ids
      }
    }
  });

  return reorderResults(rows, ids);
};

const getMultiSubAreas = async (parentIds) => {
  const rows =  await models.SubAreaSnowReport.findAll({
    where: {
      areaSnowReportId: {
        [Op.in]: parentIds
      }
    }
  });

  const grouped = _.groupBy(rows, (row) => {
    return row.areaSnowReportId;
  });

  return _.reduce(parentIds, (acc, id) => {
    acc.push(grouped[id]);
    return acc;
  }, []);
};

const getMultiSeasonTotals = async (ids) => {
  const rows =  await models.SeasonTotal.findAll({
    where: {
      subAreaSnowReportId: {
        [Op.in]: ids
      }
    }
  });

  const grouped = _.groupBy(rows, (row) => {
    return row.subAreaSnowReportId;
  });

  return _.reduce(ids, (acc, id) => {
    acc.push(grouped[id]);
    return acc;
  }, []);
};

const getMultiReadings = async (ids) => {
  const rows = await models.SnowReading.findAll({
    where: {
      subAreaSnowReportId: {
        [Op.in]: ids
      }
    }
  });

  const grouped = _.groupBy(rows, (row) => {
    return row.subAreaSnowReportId;
  });

  return _.reduce(ids, (acc, id) => {
    acc.push(grouped[id]);
    return acc;
  }, []);
};

exports.createSnowReportLoader = () => {
  const snowReportLoader = new DataLoader(ids => getMultiSnowReports(ids));
  return snowReportLoader;
};

exports.createSubAreaSnowReportLoader = () => {
  const subAreaSnowReportLoader = new DataLoader(ids => getMultiSubAreaSnowReports(ids));
  return subAreaSnowReportLoader;
};

exports.createSubAreasLoader = () => {
  const subAreaLoader = new DataLoader(ids => getMultiSubAreas(ids));
  return subAreaLoader;
};

exports.createSeasonTotalsLoader = () => {
  const seasonTotalsLoader = new DataLoader(ids => getMultiSeasonTotals(ids));
  return seasonTotalsLoader;
};

exports.createReadingsLoader = () => {
  const readingsLoader = new DataLoader(ids => getMultiReadings(ids));
  return readingsLoader;
};
