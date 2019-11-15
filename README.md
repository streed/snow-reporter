# Snow Reporter

Running locally run the following:

```
npm run start-snow-report
npm run start-forecast
npm run start-satalite
npm run start-gateway
```

This should expose a graph that allows for a request that looks like the following:

```
query areaSnowReports {
  areaSnowReports {
    comments {
      body
      id
      postDate
      posterName
    }
    id
    name
    subAreas {
      baseDepth
      currentSeasonTotal {
        season
        total
      }
      forecast {
        currently {
          precipProbability
          summary
          temperature
          windBearing
          windGust
          windSpeed
        }
        daily {
          data {
            precipProbability
            temperatureMax
            temperatureMin
            time
          }
          summary
        }
      }
      id
      lastReadingTime
      latitude
      longitude
      name
      readings {
        currentReading
        id
        readingTime
        units
      }
      seasonTotals {
        season
        total
      }
      sataliteImages(start:, end:) {
        image {
          truecolor
          ndvi
        }
      }
    }
  }
}
```

This data can then be viewed in the UI or exported to BigQuery/DynamoDB for further analysis.
