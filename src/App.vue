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
      this.axios.get('/user').then((res)=>{
        this.$store.dispatch('saveUsername',res.username);
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        this.$store.dispatch('savecartCount',res);
      })
    }
  }
}
</script>
<style>
@import './assets/scss/reset.scss';
</style>
