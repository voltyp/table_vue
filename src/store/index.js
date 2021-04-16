import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({

  state: () => ({
    data: [
      {
        id: 1,
        date: '2020-02-24',
        name: 'Bob Lee',
        money: 1000,
      },
      {
        id: 2,
        date: '2020-02-25',
        name: 'John Seek',
        money: 1999.99,
      },
      {
        id: 3,
        date: '2020-02-26',
        name: 'Harry Smith',
        money: 3000.5,
      },
      {
        id: 4,
        date: '2020-02-27',
        name: 'Alex Morphy',
        money: 4000,
      },
      {
        id: 5,
        date: '2020-02-28',
        name: 'Ben Gold',
        money: 5000,
      },
      {
        id: 6,
        date: '2020-02-28',
        name: 'Tim Black',
        money: 10000,
      },
      {
        id: 7,
        date: '2020-02-30',
        name: 'Jimmy Elephant',
        money: 1000000,
      },
    ],
    isLoading: false,
    isCached: false,
  }),

  mutations: {
    setState(state, value) {
      Object.entries(value).forEach(([key, data]) => {
        if (!Array.isArray(state[key]) && state[key] && typeof state[key] === 'object') {
          state[key] = {
            ...state[key],
            ...data,
          };
        } else {
          state[key] = data;
        }
      });
    },
  },

  actions: {
    async load({ commit }, params = {}) {
      commit('setState', { isLoading: true });

      try {
        const { data } = await api.getPayments(params);

        if (Array.isArray(data)) {
          commit('setState', { data });
        }
      } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e?.message);
      } finally {
        commit('setState', { isLoading: false });
      }
    },
  },
});
