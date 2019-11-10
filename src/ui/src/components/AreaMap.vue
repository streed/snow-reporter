<template>
  <MglMap 
    :accessToken="accessToken" 
    :mapStyle="mapStyle" 
    :minZoom="13"
    :maxZoom="14"
    :center="center"
    @load="onMapLoaded">
  </MglMap>
</template>

<script>
import MapBox from 'mapbox-gl';
import {MglMap} from 'vue-mapbox';

const TOKEN =
'pk.eyJ1Ijoic3RyZWVkNTcxIiwiYSI6ImNrMnNrNWJmcTEwd2EzbHFvcm4xenVidXMifQ.wrAY46Y9SZVTFW4ilNUDqQ';
const MAP_STYLE = 'mapbox://styles/streed571/ck2skepgv1chb1cqnbzt8zfix';

export default {
  props: ['center'],
  components: {
    MglMap
  },
  created () {
    this.mapbox = MapBox;
    this.map = null;
  },
  data () {
    return {
      accessToken: TOKEN,
      mapStyle: MAP_STYLE
    }
  },
  methods: {
    async onMapLoaded (event) {
      this.map = event.map;
    }
  }
}
</script>
