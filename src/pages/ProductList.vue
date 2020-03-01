<template>
  <div class="product-list">
    <h1>商品一覧</h1>
    <ul>
      <li v-for="{ id, name } in list" :key="id">
        <router-link :to="`/product/${ id }`" :id="id">{{ name }}</router-link>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
data(){
    return {
        list: null
    }
},

created (){ //ここの書き方は覚えてしまっておk
        this.axios.get('https://api.myjson.com/bins/idr9w')
        .then((response) => {
            this.list = response.data
        })
        .catch((e) => {
            alert(e);
        });
    }
}
</script>