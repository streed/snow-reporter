const _ = require('lodash');
const axios = require('axios');
const DataLoader = require('dataloader');
const querystring = require('querystring');
const Dataloader = require('dataloader');
const {AreaSnowReport, SubAreaSnowReport} = require('./models');

const getSnowReport = async (id) => {
  const report = await AreaSnowReport.findByPk(id);
  return report;
};

const getSubAreaSnowReport = async (id) => {
  const report = await SubAreaSnowReport.findByPk(id);
  return report;
};

const getMultiSnowReports = async (ids) => {
  return Promise.all(_.map(ids, (id) => {
    return getSnowReport(id);
  }));
};

const getMultiSubAreaSnowReports = async (ids) => {
  return Promise.all(_.map(ids, (id) => {
    return getSubAreaSnowReport(id);
  }));
};

exports.createSnowReportLoader = () => {
  const snowReportLoader = new DataLoader(ids => getMultiSnowReports(ids));
  return snowReportLoader;
};

exports.createSubAreaSnowReportLoader = () => {
  const subAreaSnowReportLoader = new DataLoader(ids => getMultiSubAreaSnowReports(ids));
  return subAreaSnowReportLoader;
};
