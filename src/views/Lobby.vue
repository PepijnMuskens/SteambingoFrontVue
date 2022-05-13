<template>
<h1>{{Lobby.id}}</h1>
<button v-if="Lobby.open" @click="StartGame()">Start Game</button>
<div class="fullpage" v-if="Lobby.open == true">
  <div class="content">
  <div>
    <AddPlayer :lobbyid="Lobby.id"/>
  </div>
    <PlayerList :players="Lobby.players"/>
  </div>
<Challenges :Challenges="Lobby.challengelist.challenges"/>
</div>
<div class="board" v-else>
  <Board :board="Lobby.board"/>
  <PlayerList :players="Lobby.players"/>
</div>

</template>
<script>
import PlayerList from '../components/PlayerList'
import AddPlayer from '../components/AddPlayer'
import Challenges from '../components/challenges'
import Board from '../components/Board'

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
    },
    async StartGame () {
      const res = await fetch('https://localhost:7174/Lobby/StartGame?lobbyid=' + this.$route.params.id)
      const data = await res.json()
      this.Lobby = data
      return data
    }
  },
  async created () {
    this.Lobby = await this.fetchLobby()
  },
  components: {
    PlayerList,
    AddPlayer,
    Challenges,
    Board
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
  .board{
    display: flex;
    margin-bottom: 200px;
  }
  h1{
    color: darkgray;
  }
  h3{
    color: darkgray;
  }
  div{
    display: flex;
    justify-content: center;
    flex-direction: column ;
  }
  .content{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 60%;
  }
  .fullpage{
    display: flex;
    flex-direction: row;
  }
</style>
