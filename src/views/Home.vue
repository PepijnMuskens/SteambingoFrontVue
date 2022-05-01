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
      const res = await fetch('https://i437675.luna.fhict.nl/steambingo/getsteamgames')
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
