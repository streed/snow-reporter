<template>
  <div class="container is-10">
  </div>
</template>

<script>
const resortReports = {
  "1": {
    id: "1",
    name: "The Summit at Snoqualmie",
    areas: [
      {
        id: "2",
        name: "Alpental",
        lastReadingTime: 123456789,
        latitude: 47.4204436,
        longitude: -121.4232882,
        baseDepth: 3,
        seasonTotals: [
          {
            season: "2018",
            total: 300
          },
          {
            season: "2019",
            total: 8
          }
        ],
        readings: [
          {
            id: "4",
            readingTime: 123456789,
            currentReading: 1,
            unit: "IMPERIAL"
          },
          {
            id: "5",
            readingTime: 123456789,
            currentReading: 2,
            unit: "IMPERIAL"
          }
        ]
      },
      {
        id: "3",
        name: "Summit West",
        lastReadingTime: 123456789,
        latitude: 47.4203674,
        longitude: -121.4213409,
        baseDepth: 4,
        seasonTotals: [
          {
            season: "2018",
            total: 300
          },
          {
            season: "2019",
            total: 20
          }
        ],
        readings: [
          {
            id: "6",
            readingTime: 123456789,
            currentReading: 1,
            unit: "IMPERIAL"
          },
          {
            id: "7",
            readingTime: 123456789,
            currentReading: 2,
            unit: "IMPERIAL"
          }
        ]
      }
    ],
    comments: [
      {
        id: "3",
        postDate: 123456789,
        posterName: "Sean",
        body: "This is a test"
      }
    ]
  }
};

export default {
  name: 'SnowReport',
  props: {
    areaId: String,
    subAreaId: String
  },
  data: function () {
    return {
    snowReport: {}
    };
  },
  mounted: function () {
    const areaId = this.areaId.toString();
    this.snowReport = resortReports[areaId];
  }
}
</script>
