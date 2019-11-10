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
        name: "Alpental",
        lastReadingTime: 1573423414,
        latitude: 47.4204436,
        longitude: -121.4232882,
        baseDepth: 3,
        currentSeasonTotal: {
          season: "2019",
          total: 20
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
            readingTime: 1573123214,
            currentReading: 2,
            unit: "IMPERIAL"
          },
          {
            id: "5",
            readingTime: 1573423414,
            currentReading: 1,
            unit: "IMPERIAL"
          },
          {
            id: "5",
            readingTime: 1573523414,
            currentReading: 8,
            unit: "IMPERIAL"
          }
        ]
      },
      {
        id: "3",
        name: "Summit West",
        lastReadingTime: 1573423414,
        latitude: 47.4203674,
        longitude: -121.4213409,
        baseDepth: 4,
        currentSeasonTotal: {
          season: "2019",
          total: 15
        },
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
            readingTime: 1573423300,
            currentReading: 1,
            unit: "IMPERIAL"
          },
          {
            id: "7",
            readingTime: 1573423414,
            currentReading: 2,
            unit: "IMPERIAL"
          }
        ]
      }
    ],
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
