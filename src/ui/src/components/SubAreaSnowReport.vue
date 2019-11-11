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
          <div v-if="area.currentSeasonTotal !== null">
            <p class="title is-size-5">{{area.currentSeasonTotal.total}}in</p>
          </div>
          <div v-else>
            <p class="title is-size-5">0in</p>
          </div>
        </div>
      </div>
    </div>

    <div class="level is-mobile">
      <div class="level-item">
        <div>
          <p class="heading">Weather Summary</p>
          <p class="title is-size-5">{{area.forecast.currently.summary}}</p>
        </div>
      </div>
      <div class="level-item">
        <div>
          <p class="heading">Temperature</p>
          <p class="title is-size-5">{{area.forecast.currently.temperature}}°F</p>
        </div>
      </div>
      <div class="level-item">
        <div>
          <p class="heading">Precipitation %</p>
          <p class="title is-size-5">{{area.forecast.currently.precipProbability}}%</p>
        </div>
      </div>
      <div class="level-item">
        <div>
          <p class="heading">Wind Speed</p>
          <p class="title is-size-5">{{area.forecast.currently.windSpeed}}mph</p>
        </div>
      </div>
      <div class="level-item">
        <div>
          <p class="heading">Wind Gust</p>
          <p class="title is-size-5">{{area.forecast.currently.windGust}}mph</p>
        </div>
      </div>
      <div class="level-item">
        <div>
          <p class="heading">Wind Bearing</p>
          <p class="title is-size-5">{{area.forecast.currently.windBearing}}°</p>
        </div>
      </div>
    </div>

    <div class="level is-mobile">
      <div class="level-item">
        <graph-bar
          :height="200"
          :width="640"
          :axis-min="0"
          :axis-step="10"
          :labels="dailyLabels"
          :values="dailyValues">
          <note :text="'Precipitation Probability for the upcoming week'" :align="'left'"></note>
        </graph-bar>
      </div>
    </div>

    <div class="level is-mobile">
      <div class="level-item">
        <graph-line
          :height="200"
          :width="640"
          :axis-min="0"
          :axis-step="10"
          :labels="dailyLabels"
          :names="['Min Temperature', 'Max Temperature']"
          :values="dailyTemperatureValues">
          <note :text="'Temperature Min and Max for the upcoming week'" :align="'left'"></note>
          <tooltip :names="['Min Temperature', 'Max Temperature']" :position="'right'"></tooltip>
          <legends :names="['Min Temperature', 'Max Temperature']"></legends>
        </graph-line>
      </div>
    </div>

    <div class="level is-mobile">
      <div class="level-item">
        <div v-if="area.readings.length != 0">
          <graph-bar
            :height="400"
            :width="640"
            :axis-min="0"
            :axis-step="10"
            :labels="labels"
            :values="values">
            <note :text="'Snow Accumulation Readings for past week'" :align="'left'"></note>
          </graph-bar>
        </div>
        <div v-else>
          <p class="title">No snow readings recorded yet!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import moment from 'moment';
//import AreaMap from './AreaMap.vue';

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
        return moment.unix(reading.readingTime).format('ll')
      });
    },
    values: function () {
      return _.map(this.area.readings, (reading) => {
        return reading.currentReading;
      });
    },
    dailyLabels: function () {
      return _.map(this.area.forecast.daily.data, (data) => {
        return moment.unix(data.time).format('ll');
      });
    },
    dailyValues: function () {
      return _.map(this.area.forecast.daily.data, (data) => {
        return data.precipProbability * 100;
      });
    },
    dailyTemperatureValues: function () {
      const mins = _.map(this.area.forecast.daily.data, (data) => data.temperatureMin);
      const maxes = _.map(this.area.forecast.daily.data, (data) => data.temperatureMax);
      return [mins, maxes];
    }
  },
  mounted () {
  }
}
</script>
