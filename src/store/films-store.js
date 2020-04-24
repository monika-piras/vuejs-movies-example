import axios from 'axios'

export default {

    namespaced: true,

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
        },

        addFilm(state, filmNew) {
            console.log('state- add Film');
            state.allFilms.push(filmNew);
        }
    },

    actions: {
        loadFilms(context) {
            context.commit('loadFilmsMutation');
        },
        callActionAddFilm(context, filmParam) {
            context.commit('addFilm', filmParam);
        },
    },

};
