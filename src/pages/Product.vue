<template>
  <div class="product" v-if="item" key="product">
      <!-- ここのkeyはいらないかも　なくても動作した -->
    <h1>商品情報</h1>
    <dl class="product-table">
      <dt>商品名</dt>
      <dd>{{ item[0].name }}</dd>
      <dt>価格</dt>
      <dd>{{ item[0].price }}円</dd>
      <dt>商品説明</dt>
      <dd>{{ item[0].content }}</dd>
    </dl>
  </div>
  <div v-else key="loading">商品情報を読み込んでいます...</div>
    <!-- ここのkeyもなくても行けた -->
</template>

<script>
  import products from '@/api/products.js'
  export default {
    data() {
          return {
              item: null
      }
    },
    props: {
        id: Number,
    },
    created (id){
        this.axios.get('https://api.myjson.com/bins/idr9w')
        .then((response) => {
            let items = response.data
            console.log(this.item)
            this.item = items.filter((itm) => {
                console.log(itm)
                console.log(itm.id)
                console.log("this.id" , this.id)
                return parseInt(itm.id) === this.id
            })
            console.log(this.item[0].id)
        })
        // .catch((e) => {
        //     alert(e);
        // });
    }
//     watch: {
//       id: {
//         handler() {
//           products.asyncFind(this.id, item => {
//             this.item = item
//           })
//         },
//         immediate: true
//         //immediateは、変更だけでなく初期化時にもイベンんとを発生させたい場合はtrueにします。
//       }
//     }
  }
</script>
