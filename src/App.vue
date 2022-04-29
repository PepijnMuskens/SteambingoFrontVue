<template>
<Header title='Top Bar'/>
<Games :games='games'/>
</template>

<script>
import Header from './components/Header'
import Games from './components/Games'

export default {
  name: 'App',
  components: {
    Header,
    Games
  },
  data () {
    return {
      games: []
    }
  },
  methods: {
    async fetchGames () {
      const res = await fetch('https://i437675.luna.fhict.nl/steambingo/getsteamgames')
      const data = await res.json()
      return data
    }
  },
  async created () {
    this.games = await this.fetchGames()
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
  margin-top: 60px;
}
</style>
