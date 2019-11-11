import axios from 'axios';

const AREA_SNOW_REPORT_QUERY = `
query areaSnowReports {
  areaSnowReports {
    id
    name
    subAreas {
      name
      lastReadingTime
      latitude
      longitude
      baseDepth
      currentSeasonTotal{
        season
        total
      }
      seasonTotals {
        season
        total
      }
      readings{
        id
        readingTime
        currentReading
        unit
      }
    }
  }
}`;

exports = {
  area
};
