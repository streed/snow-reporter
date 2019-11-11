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
          :width="640"
          :axis-min="0"
          :axis-step="10"
          :labels="labels"
          :values="values">
          <note :text="'Snow readings'" :align="'left'"></note>
        </graph-bar>
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
    }
  },
  mounted () {
  }
}
</script>
