import products from '@/api/products.js'
// 商品詳細用のVuexモジュール
export default {
  namespaced: true,
  state: {
    detail: {}
  },
  getters: {
    detail: state => state.detail
  },
  mutations: {
    set(state, { detail }) {
      state.detail = detail
    },
    clear(state) {
      state.detail = {}
    }
  },
  actions: {
      async  load({ commit }, id) {
        await axios.get('https://api.myjson.com/bins/idr9w')
        .then((response ) => {
            let items = response.data
            detail = items.filter((item) => {
                return item.id === id
            })
            console.log(detail)
        })
        .then (commit('set',  detail ))
    },
    destroy({ commit }) {
      commit('clear')
    }
  }
}