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
      const res = await fetch('https://localhost:7219/steambingo/getsteamgames')
      return res.json()
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
