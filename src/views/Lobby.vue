<template>
<h1>{{Lobby.id}}</h1>
<div class="content">
    <AddPlayer :lobbyid="Lobby.id"/>
    <PlayerList :players="Lobby.players"/>
</div>
</template>
<script>
import PlayerList from '../components/PlayerList'
import AddPlayer from '../components/AddPlayer'

export default {
  name: 'Lobby_View',
  data () {
    return {
      Lobby: Object
    }
  },
  methods: {
    async fetchLobby () {
      const res = await fetch('https://localhost:7174/Lobby/GetLobby?id=' + this.$route.params.id)
      const data = await res.json()
      return data
    }
  },
  async created () {
    this.Lobby = await this.fetchLobby()
  },
  components: {
    PlayerList,
    AddPlayer
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
    color: black;
  }
  h3{
    color: black;
  }
  div{
    display: flex;
    justify-content: space-evenly;
    flex-direction: column ;
  }
  .content{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
</style>
