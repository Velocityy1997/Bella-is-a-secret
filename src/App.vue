<template>
  <div id="app">
    <img src="./assets/xiamu.png">
    <!-- <a href="/first">首页</a>
    <a href="/detail">详情页</a> -->
    <router-view/>
    <router-link to="/first">首页</router-link>
    <router-link to="/detail">详情页</router-link>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0; 
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
