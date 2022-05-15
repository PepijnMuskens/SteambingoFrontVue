<template>
<Games :games='games'/>
</template>

<script>
import Games from '../components/Games'

export default {
  name: 'Home_View',
  data () {
    return {
      games: []
    }
  },
  methods: {
    async fetchGames () {
      const res = await fetch('https://steambingogame20220512121421.azurewebsites.net/steambingo/getsteamgames')
      const data = await res.json()
      return data
    }
  },
  async created () {
    this.games = await this.fetchGames()
  },
  components: {
    Games
  }
}
</script>
