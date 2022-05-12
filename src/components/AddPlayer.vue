<template>
<div class="addplayer">
  <h1>Add Player</h1>
     <input v-model="name" placeholder="name">
     <input v-model="id" placeholder="steamid">
    <button @click="addPlayer()">Add Player</button>
</div>
</template>

<script>

export default {
  name: 'Add_Player',
  props: {
    name: String,
    id: String,
    lobbyid: Number
  },
  components: {
  },
  methods: {
    async addPlayer () {
      const res1 = await fetch('https://localhost:7174/lobby/CreatePlayer?name=' + this.name + '&steamid=' + this.id)
      const data2 = await res1.json()
      const res = await fetch('https://localhost:7174/lobby/addplayer?lobbyid=' + this.lobbyid + '&playerid=' + this.id)
      const data = await res.json()
      this.$router.push({ name: 'Lobby', params: { id: data.id } })
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
    .addplayer{
      display: flex;
      align-self: flex-start;
    }
</style>
