<template>
  <div class="product-list">
    <h1>商品一覧</h1>
    <ul>
      <li v-for="{ id, name } in list" :key="id">
        <router-link :to="`/product/${ id }`">{{ name }}</router-link>
      </li>
      <div @click="getIp">商品一覧</div>
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
    methods: {
        getIp() {
            this.axios.get('https://api.myjson.com/bins/idr9w')
            .then((response) => {
                console.log(response.data);
                this.list = response.data
            })
            .catch((e) => {
                alert(e);
            });
        }
    }
  }
</script>