const _ = require('lodash');
const axios = require('axios');
const querystring = require('querystring');

const AGROMONITORING_API_KEY = "018bde3413750a8a4cd379ea77826077";

/* Example request:
{
  "input": {
    "name": "Summit West",
    "geo_json":{
      "type": "Feature",
      "properties":{},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
            {
              "longitude":-121.41926765441896,
              "latitude":47.42831952420922
            },
            {
              "longitude":-121.43609046936035,
              "latitude":47.41629859419753
            },
            {
              "longitude":-121.41188621520995,
              "latitude":47.40863164034136
            },
            {
              "longitude":-121.41926765441896,
              "latitude":47.42831952420922
            }
          ]
      }
    }
  }
}

example polygon: 5dcbd3e9ae8d9e0013fc2956
*/

const argoMonitoringClient = axios.create({
  baseURL: "http://api.agromonitoring.com/agro/1.0/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

function transformRequest(request) {
  const coordinates = request.geo_json.geometry.coordinates;
  request.geo_json.geometry.coordinates = [_.map(coordinates, (coord) => {
    return [coord.longitude, coord.latitude];
  })];
  return request;
}

exports.loaders = {
  sataliteImagery: {
    addPolygon: async (request) => {
      const transformedRequest = transformRequest(request);
      const response = await argoMonitoringClient.post(`polygons?appid=${AGROMONITORING_API_KEY}`,
                                                       transformedRequest);
      return Promise.resolve(response.data);
    },
    getPolygonImages: async ({
      polygonId,
      start,
      end,
      coverageMin,
      coverageMax,
      cloudsMin,
      cloudsMax,
      resolutionMin,
      resolutionMax}) => {
      const queryString = querystring.stringify({
        appid: AGROMONITORING_API_KEY,
        polyid: polygonId,
        start: start,
        end: end,
        type: 's2',
        coverage_min: coverageMin,
        coverage_max: coverageMax,
        clouds_min: cloudsMin,
        clouds_max: cloudsMax,
        //resolution_min: resolutionMin,
        //resolution_max: resolutionMax
      });
      const response = await argoMonitoringClient.get(`image/search?${queryString}`);    
      return Promise.resolve(response.data);
    }
  }
}
