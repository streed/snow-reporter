import axios from 'axios';

const API_ENDPOINT = 'http://localhost:4000/graphql';

const AREA_SNOW_REPORT_QUERY = `
query areaSnowReports {
  areaSnowReports {
    id
    name
    subAreas {
      id
      name
      lastReadingTime
      latitude
      longitude
      baseDepth
      currentSeasonTotal {
        season
        total
      }
      seasonTotals {
        season
        total
      }
      readings {
        id
        readingTime
        currentReading
        units
      }
      forecast {
        currently {
          summary
          temperature
          precipProbability
          windSpeed
          windGust
          windBearing
        }
        daily {
          summary
          data {
            time
            precipProbability
            temperatureMin
            temperatureMax
          }
        }
      }
    }
    comments {
      id
      posterName
      body
      postDate
    }
  }
}`;



export default {
  areas: async () => {
    const response = await axios({
      url: API_ENDPOINT, 
      method: 'post',
      data: {
        query: AREA_SNOW_REPORT_QUERY,
      }
    });

    return Promise.resolve(response.data.data.areaSnowReports);
  }
};
