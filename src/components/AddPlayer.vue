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
    lobbyid: Number,
    gameid: Number
  },
  data () {
    return {
      form: {
        name: '',
        id: ''
      }
    }
  },
  components: {
  },
  methods: {
    async addPlayer () {
      await fetch('https://localhost:7174/lobby/addplayer?lobbyid=' + this.lobbyid + '&name=' + this.name + '&steamid=' + this.id + '&gameid=' + this.gameid)
      location.reload()
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
        justify-content: center;
    }
    h1{
      color: darkgray;
    }
    .addplayer{
      display: flex;
      justify-content: center;
    }
    input{
      margin-left: 20%;
      margin-right: 20%;
      text-align: center;
    }
    button{
      margin-left: 20%;
      margin-right: 20%;
    }
</style>
