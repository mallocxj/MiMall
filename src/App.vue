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
    }
  },
  mounted() {
    this.getUser();
    this.getCartCount();
  },
  methods:{
    getUser(){
      this.axios.get('/user').then(()=>{
        // to-do
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then(()=>{
        // todo
      })
    }
  }
}
</script>
<style>
@import './assets/scss/reset.scss';
</style>
