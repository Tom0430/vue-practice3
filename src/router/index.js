import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Product from '@/pages/Product.vue'
import ProductList from '@/pages/ProductList.vue'

import ProductHome from '@/pages/Home.vue'
import ProductReview from '@/pages/ProductReview.vue'
import ProductReviewDetail from '@/pages/ProductReviewDetail.vue'


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
      }),
      // 関数の場合第一引数として現在のルートオブジェクトが使用できる
      // idをNumberに変換することでproduct.vueでのエラーを防ぐ
      children: [
        // 商品詳細（デフォルトルート）
        {
          name: 'product-home',
          path: '',
          component: ProductHome
        },
        // 商品のレビュー一覧
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview
        },
        // 商品のレビュー詳細
        {
          name: 'review-detail',
          path: 'review/:rid', // 親ルートとかぶらないパラメータを指定
          component: ProductReviewDetail,
          props: route => ({
            rid: Number(route.params.rid)
          })
        }
      ]
    },
  ]
})
