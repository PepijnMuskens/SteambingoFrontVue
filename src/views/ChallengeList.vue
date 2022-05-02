<template>
    <router-link :to="{path:'/lobby/' + ChallengeList.id}">Play</router-link>
    <h1>{{ChallengeList.Name}}</h1>
    <div>
        <Challenges :Challenges="ChallengeList.challenges"/>
    </div>
</template>

<script>
import Challenges from '../components/challenges'

export default {
  name: 'Game_View',
  data () {
    return {
      ChallengeList: Object
    }
  },
  methods: {
    async fetchchallengelist () {
      const res = await fetch('https://i437675.luna.fhict.nl/steambingo/getchallengelist?id=' + this.$route.params.id)
      const data = await res.json()
      return data
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
</style>
