<template>
  <div v-show="area !== null" class="container">
    <div class="level is-mobile">
      <div class="level-item">
        <div>
          <p class="heading">Last Reading</p>
          <p class="title is-size-5">{{area.lastReadingTime | formatTimestamp}}</p>
        </div>
      </div>
      <div class="level-item">
        <div>
          <p class="heading">Base Depth</p>
          <p class="title is-size-5">{{area.baseDepth}}in</p>
        </div>
      </div>
      <div class="level-item">
        <div>
          <p class="heading">Season Total</p>
          <p class="title is-size-5">{{area.currentSeasonTotal.total}}in</p>
        </div>
      </div>
    </div>

    <div class="level is-mobile">
      <div class="level-item">
        <graph-bar
          :height="400"
          :axis-min="0"
          :axis-step="10"
          :labels="labels"
          :values="values" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
//import AreaMap from './AreaMap.vue';

const subAreas = {
  "2": {
    id: "2",
    name: "Alpental",
    lastReadingTime: 1573382729,
    latitude: 47.4204436,
    longitude: -121.4232882,
    baseDepth: 3,
    currentSeasonTotal: {
      season: "2019",
      total: 8
    },
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
        readingTime: 1573382729,
        currentReading: 3,
        unit: "IMPERIAL"
      },
      {
        id: "5",
        readingTime: 1573382600,
        currentReading: 5,
        unit: "IMPERIAL"
      }
    ]
  },
  "3": {
    id: "3",
    name: "Summit West",
    lastReadingTime: 1573382729,
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
        readingTime: 1573382729,
        currentReading: 15,
        unit: "IMPERIAL"
      },
      {
        id: "7",
        readingTime: 1573382600,
        currentReading: 5,
        unit: "IMPERIAL"
      }
    ]
  }
}

export default {
  props: {
    area: Object
  },
  components: {
    //AreaMap
  },
  computed: {
    subAreaCenter: function () {
      return [this.area.longitude, this.area.latitude];
    },
    labels: function () {
      return _.map(this.area.readings, (reading) => {
        return reading.readingTime;
      });
    },
    values: function () {
      return _.map(this.area.readings, (reading) => {
        return reading.currentReading;
      });
    }
  },
  mounted () {
    this.area = subAreas[this.areaId];
  }
}
</script>
