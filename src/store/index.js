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
    getFilms: (state) => state.allFilms
},

  mutations: {
    loadFilmsMutation(state) {
      console.log('mutation load films');
      axios
        .get('/films.json')
        .then(response => {
          const lista = response.data.lista;
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
