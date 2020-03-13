import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allFilms: [

    ]
  },

  getters: {
    getFilms: (state) => state.allFilms,

    getFilmDetails: (state) => (filmID) => {
      const filmIndex = state.allFilms.findIndex(x => x.id == filmID);
      return state.allFilms[filmIndex];
    },
},

  mutations: {
    loadFilmsMutation(state) {
      console.log('Mutation loadFilms');
      axios
        .get('/films.json')
        .then(response => {
          const lista = response.data.lista;
          console.log('ha risposto la chiamata api');
          
          state.allFilms.push(...lista);
        })
    }
  },

  actions: {
    loadFilms(context) {
      context.commit('loadFilmsMutation');
    }
  },

  modules: {
  }

});
