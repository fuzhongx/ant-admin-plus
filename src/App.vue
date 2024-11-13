<template>
  <div id="app" >
    <router-view ></router-view>
  </div>
 
</template>

<script>


export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style lang="scss">
@import url('@/style/main.css');
html,body{
    width:100%;
    height:100%;
}
#app {}
</style>
