<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
// import storage from './storage/index';
export default {
  name: "app",
  data() {
    return{
      res:{}
    }
  },
  mounted() {
   // storage.setItem('a',9,'user');
    // console.log(storage.getItem('a','user'));
    // storage.clear('a');
    // storage.setItem('a',{a:123},'user');
    //storage.clear('a','user');
    this.axios.get('/user/login').then((res)=>{
      this.res = res
    })
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
