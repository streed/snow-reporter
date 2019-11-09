const _ = require('lodash');
const axios = require('axios');
const Dataloader = require('dataloader');

const DARK_SKY_KEY = '3069e13e8ab60c606b3f969ccab69eb1';

const darkSkyClient = axios.create({
  baseURL: `https://api.darksky.net/forecast/${DARK_SKY_KEY}/`,
  timeout: 10000,
});

const getDarkSkyDataHttp = async (latLongKey) => {
  const response = await darkSkyClient.get(latLongKey);
  return Promise.resolve(response.data);
};

const getDarkSkyData = async (latLongKey) => {
  return await getDarkSkyDataHttp(latLongKey);
};

const getMultiDarkSkyData = async (latLongs) => {
  return Promise.all(_.map(latLongs, (latLong) => {
    return getDarkSkyData(latLong);
  }));
};

exports.createDarkSkyLoader = () => {
  const darkSkyLoader = new Dataloader(latLongs => getMultiDarkSkyData(latLongs));
  const darkSkyLoaderWrapper = async (latitude, longitude) => {
    const key = `${latitude},${longitude}`;
    return await darkSkyLoader.load(key);
  };
  return darkSkyLoaderWrapper;
};
