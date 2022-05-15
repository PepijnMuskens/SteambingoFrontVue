<template>
    <h1>{{Game.name}}</h1>
    <div>
        <Challenges :Challenges="Game.challenges" :gameid="Game.steamId"/>
        <ChallengeLists :ChallengeLists="Game.challengesLists"/>
    </div>
</template>

<script>
import Challenges from '../components/challenges'
import ChallengeLists from '../components/ChallengeLists'

export default {
  name: 'Game_View',
  data () {
    return {
      Game: Object
    }
  },
  methods: {
    async fetchGame () {
      const res = await fetch('https://steambingogame20220512121421.azurewebsites.net/steambingo/getsteamgame?id=' + this.$route.params.id)
      const data = await res.json()
      return data
    }
  },
  async created () {
    this.Game = await this.fetchGame()
  },
  components: {
    Challenges,
    ChallengeLists
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
</style>
