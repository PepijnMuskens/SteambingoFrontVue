<template>
    <button @click="fetchLobby()">Play</button>
    <h1>{{ChallengeList.Name}}</h1>
    <div class="challenges">
        <Challenges :Challenges="ChallengeList.challenges"/>
    </div>
</template>

<script>
import Challenges from '../components/challenges'

export default {
  name: 'Game_View',
  data () {
    return {
      ChallengeList: Object,
      lobbyid: Number
    }
  },
  methods: {
    async fetchchallengelist () {
      const res = await fetch('https://steambingogame20220512121421.azurewebsites.net/steambingo/getchallengelist?id=' + this.$route.params.id)
      const data = await res.json()
      return data
    },
    async fetchLobby () {
      const res = await fetch('https://localhost:7174/Lobby/CreateLobby?id=' + this.$route.params.id)
      const data = await res.json()
      this.lobbyid = data.id
      this.$router.push({ name: 'Lobby', params: { id: data.id } })
    }
  },
  async created () {
    this.ChallengeList = await this.fetchchallengelist()
  },
  components: {
    Challenges
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
  a {
      color: black;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 50px;
  }
  .challenges{
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
