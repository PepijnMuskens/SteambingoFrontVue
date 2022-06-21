<template>
    <button @click="fetchLobby()">Play</button>
    <h1>{{ChallengeList.Name}}</h1>
    <div>
      <div class="challenges">
        <Challenges :Challenges="ChallengeList.challenges"/>
    </div>
    <div class="add">
      <AddTo :Challenges="ChallengeList.challenges" :AvailableChallenges="AvailableChallenges" :challengelistid="ChallengeList.id" />
    </div>
    </div>
</template>

<script>
import Challenges from '../components/challenges'
import AddTo from '../components/AddToChallengeList'

export default {
  name: 'Game_View',
  data () {
    return {
      ChallengeList: Object,
      AvailableChallenges: Array,
      lobbyid: Number
    }
  },
  methods: {
    async fetchchallengelist () {
      const res = await fetch('https://localhost:7219/steambingo/getchallengelist?id=' + this.$route.params.id)
      return await res.json()
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
    const res = await fetch('https://localhost:7219/steambingo/GetChallengesGame?id=' + this.ChallengeList.gameId)
    const data = await res.json()
    this.AvailableChallenges = data
  },
  components: {
    Challenges,
    AddTo
  }
}
</script>

<style scoped>
  .card{
      background: #f4f4f4;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
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
  .add{
    display: flex;
    width: 40%;
    flex-direction: column;
    justify-content: start;
  }
</style>
