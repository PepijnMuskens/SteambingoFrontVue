<template>
     <h1>Add Player</h1>
    <Button text="Test" color="Green"/>
</template>

<script>
import Button from './Button'

export default {
  name: 'All_Games',
  props: {
    games: Array,
    name: String,
    id: String
  },
  components: {
    Button
  },
  methods: {
    async addPlayer () {
      const res = await fetch('https://localhost:7174/lobby/addplayer?lobbyid=' + this.Lobby.id + '&playerid=' + this.id)
      const data = await res.json()
      return data
    }
  }
}
</script>

<style scoped>
    .test{
        display: flex;
        flex-wrap: wrap;
        margin-left: 10%;
        margin-right: 10%;
        justify-content: space-between;
    }
    h1{
      color: black;
    }
</style>
