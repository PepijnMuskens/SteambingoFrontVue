<template>
    <h1>{{Game.name}}</h1>
    <div>
      <div class="column">
        <AddChallenge :gameid="Game.steamId" />
        <Challenges :Challenges="Game.challenges"/>
      </div>
        <div class="column">
          <AddChallengeList :gameid="Game.steamId" />
          <ChallengeLists :ChallengeLists="Game.challengesLists"/>
        </div>
    </div>
</template>

<script>
import Challenges from '../components/challenges'
import ChallengeLists from '../components/ChallengeLists'
import AddChallenge from '../components/AddChallenge'
import AddChallengeList from '../components/AddChallengeList'

export default {
  name: 'Game_View',
  data () {
    return {
      Game: Object
    }
  },
  methods: {
    async fetchGame () {
      const res = await fetch('https://localhost:7219/steambingo/getsteamgame?id=' + this.$route.params.id)
      const data = await res.json()
      return data
    }
  },
  async created () {
    this.Game = await this.fetchGame()
  },
  components: {
    Challenges,
    ChallengeLists,
    AddChallenge,
    AddChallengeList
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
  .column{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 40%;
  }
</style>
