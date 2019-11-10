<template>
  <div class="container">
    <div class="tile is-10 is-parent is-vertical">
      <h1 class="title">Sub area name: {{area.name}}</h1>
      <div class="tile is-child">
        <h2 class="title">Weather</h2>
        Summary: {{area.forecast.currently.summary}}
      </div>
    </div>
    <div class="containeris-10">
      <!-- <AreaMap :center="subAreaCenter" /> -->
    </div>
  </div>
</template>

<script>
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
    }
  },
}
</script>
