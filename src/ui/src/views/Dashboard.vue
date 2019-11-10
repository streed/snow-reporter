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
            <li v-for="subArea in area.areas" v-bind:key="subArea.id">
              <a @click="loadSnowReport(area, subArea)"
                v-bind:class="{'is-active': (subArea.id === subAreaId)}">{{subArea.name}}</a>
            </li>
          </ul>

        </aside>
      </div>
      <div class="column">
        <div v-if="areaId !== null && subAreaId !== null">
          <SubAreaSnowReport :area="subArea" />
        </div>
        <div v-else>
          Please select an area on the left.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubAreaSnowReport from '../components/SubAreaSnowReport.vue';

const areas = [
  {
    id: "1",
    name: "The Summit at Snoqualmie",
    areas: [
      {
        id: "2",
        name: "Alpental"
      },
      {
        id: "3",
        name: "Summit West"
      }
    ]
  }
];
export default {
  name: 'Dashboard',
  components: {
    SubAreaSnowReport 
  },
  data () {
    return {
      areaId: null,
      subAreaId: null,
      subArea: null,
      areas: []
    }
  },
  mounted () {
    this.areas = areas;
  },
  methods: {
    loadSnowReport (area, subArea) {
      this.areaId = area.id;
      this.subAreaId = subArea.id;
      this.subArea = subArea;
    }
  }
}
</script>
