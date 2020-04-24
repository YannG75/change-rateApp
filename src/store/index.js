import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    symbols: {},
    result: []
  },
  getters: {
    GetSymbols: state => {
      return state.symbols
    },

    GetResult: state => {
      return state.result
    }

  },
  mutations: {
    getSymbols(state, symbols){
        state.symbols = symbols
    },

    getResult(state, {amount, to}) {
      let calcResult = amount*to.value
      state.result.push({amount: amount,devise: to.name, change: Math.round(calcResult*100)/100})
    }

  },
  actions: {
    getSymbols({commit}) {
      axios.get('http://data.fixer.io/api/latest?access_key=2f6d91b1c5f5d2e6b36ff0f41dbedf84')
          .then(symbols => {
            commit('getSymbols', symbols.data.rates)
          })
    },

  },
  modules: {
  }
})
