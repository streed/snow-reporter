<template>
  <div class="container">
    <div class="columns">
      <div class="column is-3">
        <h3 class="is-size-6">
          Managed Areas
        </h3>
        <aside class="menu" v-for="area in areas" v-bind:key="area.id">
          <p class="menu-label">
            {{area.name}}
          </p>
          <ul class="menu-list">
            <li v-for="subArea in area.subAreas" v-bind:key="subArea.id">
              <a @click="loadSnowReport(area, subArea)"
                v-bind:class="{'is-active': (subArea.id === subAreaId)}">{{subArea.name}}</a>
            </li>
          </ul>

        </aside>
      </div>
      <div class="column">
        <div v-if="subArea !== null">
          <SubAreaSnowReport :area="subArea" />
        </div>
        <div v-else>
          Please select an area on the left.
        </div>
        <div v-if="area !== null" class="level is-mobile">
          <SnowReportComment :comment="comment" v-for="comment in area.comments"
                                                v-bind:key="comment.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubAreaSnowReport from '../components/SubAreaSnowReport.vue';
import SnowReportComment from '../components/SnowReportComment.vue';

export default {
  name: 'Dashboard',
  components: {
    SubAreaSnowReport,
    SnowReportComment
  },
  data () {
    return {
      areaId: null,
      subAreaId: null,
      area: null,
      subArea: null,
    }
  },
  computed: {
    areas: function () {
      return this.$store.state.areas;
    }
  },
  mounted () {
    this.$store.dispatch('loadAreas');
  },
  methods: {
    loadSnowReport (area, subArea) {
      this.areaId = area.id;
      this.subAreaId = subArea.id;
      this.subArea = subArea;
      this.area = area;
    }
  }
}
</script>
