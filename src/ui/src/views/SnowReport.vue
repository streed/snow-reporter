<template>
  <SnowReport v-bind:areaId="areaId"/>
</template>

<script>
import SnowReport from '../components/SnowReport.vue'

export default {
  computed: {
    areaId: function () { 
      return  this.$route.query.areaId; 
    }
  },
  components: {
    SnowReport
  }
}
</script>
