<template>
<div id="app">
  
    <app-header></app-header>
  
  <div class="container-fluid">
    <div class="row">
      <app-sidebar></app-sidebar>
        <span class="ai-playback-pause"></span>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
      <!--内容 -->
      <router-view></router-view>
      </div>
    </div>
  </div>
</div>
</template>

<script>
//导入AppHeader组件
import AppHeader from './components/AppHeader.vue';
//导入AppSidebar组件
import AppSidebar from './components/AppSidebar.vue';
export default {
  name: 'app',
  components:{
    AppHeader,
    AppSidebar
  },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
