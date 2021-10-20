<template>
  <div>
    <topbar></topbar>
    <topbanner></topbanner>
    <product></product>
  </div>
</template>

<script>
  import topbar from '../components/topbar.vue'
  import topbanner from '../components/topbanner.vue'
  import product from '../components/product'
 export default{
    components:{
      topbar,
      topbanner,
      product
    }
 }
</script>

<style>
</style>
