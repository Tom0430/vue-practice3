<template>
  <div id="app">
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link to="/product">商品情報</router-link>
    </nav>
    <router-view />
    <!-- この<router-view />がないと動かない -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
