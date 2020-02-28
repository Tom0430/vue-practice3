import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Product from '@/pages/Product.vue'
import ProductList from '@/pages/ProductList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/product', component: ProductList },
    {
      path: '/product/:id(\\d+)',
      component: Product,
      // props: true パラメータをpropsとしてコンポーネントに渡す
      props: route => ({
        id: Number(route.params.id)
      })
      // 関数の場合第一引数として現在のルートオブジェクトが使用できる
      // idをNumberに変換するこproduct.vueでのエラーを防ぐ
    }
  ]
})
