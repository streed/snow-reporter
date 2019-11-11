import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const areas = [
  {
    id: "1",
    name: "The Summit at Snoqualmie",
    comments: [
      {
        id: "9",
        postDate: 1573426211,
        posterName: "Sean",
        body: "## Snow Report for today\n\nThe conditions were _great_!"
      }
    ],
    subAreas: [
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

export default new Vuex.Store({
  state: {
    areas: []
  },
  mutations: {
    setAreas (state, areas) {
      state.areas = areas;
    }
  },
  actions: {
    async loadAreas ({commit}) {
      commit('setAreas', areas);
    }
  },
  modules: {
  }
})
