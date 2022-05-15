<template>
  <div class="addgame">
    <h1>Add Game</h1>
     <input v-model="name" placeholder="name">
     <input v-model="id" placeholder="gameid">
    <button @click="addGame()">AddGame</button>
  </div>
</template>

<script>

export default {
  name: 'Add_Game',
  data () {
    return {
      form: {
        name: '',
        id: ''
      },
      Status: Object
    }
  },
  methods: {
    async addGame () {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Vue POST Request Example' })
      }
      const res = await fetch('https://steambingogame20220512121421.azurewebsites.net/steambingo/AddSteamGame?name=' + this.name + '&id=' + this.id, requestOptions)
      const data = await res.json()
      if (data.steamId > 1) {
        this.$router.push({ name: 'Game', params: { id: data.steamId } })
      }
    }
  }
}
</script>

<style scoped>
  .card{
      background: #f4f4f4;
      display: flex;
      justify-content: flex-start;
      flex-direction: column ;;
      width: 200px;
      padding-left: 10%;
      padding-right: 10%;
      margin-bottom: 20%;
  }
  h1{
    color: darkgray;
  }
  div{
    display: flex;
    justify-content: space-evenly;
  }
  .addgame{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: 20%;
      padding-left: 20%;
    }
    input{
        text-align: center;
    }
  a {
      color: black;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 50px;
  }
</style>
