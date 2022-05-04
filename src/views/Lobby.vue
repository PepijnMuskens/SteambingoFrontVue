<template>
    <h1>{{Lobby.id}}</h1>
    <div v-for="player in Lobby.players" :key="player.steamId">
      <h3>{{player.name}}</h3>
    </div>
    <div>
        <ChallengeList :ChallengeLists="Lobby.challengesList"/>
    </div>
</template>

<script>
import ChallengeList from '../components/ChallengeList'

export default {
  name: 'Game_View',
  data () {
    return {
      Lobby: Object
    }
  },
  methods: {
    async fetchLobby () {
      const res = await fetch('https://localhost:7174/Lobby/CreateLobby?id=' + this.$route.params.id)
      const data = await res.json()
      const res2 = await fetch('https://localhost:7174/lobby/addplayer?lobbyid=' + data.id + '&playerid=76561198076269357')
      const data2 = await res2.json()
      return data2
    }
  },
  async created () {
    this.Lobby = await this.fetchLobby()
  },
  components: {
    ChallengeList
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
  div{
    display: flex;
    justify-content: space-evenly;
  }
</style>
