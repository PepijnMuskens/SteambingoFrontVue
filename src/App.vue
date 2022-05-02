<template>
<Header title='Home'/>
<router-view></router-view>

</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
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
body {
  background-image: url('https://cdn.cloudflare.steamstatic.com/steam/apps/714010/page_bg_generated_v6b.jpg?t=1648914721');
  background-size: cover;
}
</style>
