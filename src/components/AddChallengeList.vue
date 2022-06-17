<template>
<button v-if="!open" @click="Open()">v</button>
<button v-if="open" @click="Close()">/\</button>
<div v-if="open" class="addchallenge">
  <h3>Add Challenge {{gameid}} </h3>
     <input v-model="name" placeholder="name">
    <button @click="AddChallengeList()">Add ChallengeList</button>
</div>
</template>

<script>

export default {
  name: 'Add_Challenge',
  props: {
    gameid: Number
  },
  data () {
    return {
      form: {
        name: ''
      },
      Stats: [],
      open: false
    }
  },
  methods: {
    async AddChallengeList () {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Vue POST Request Example' })
      }
      await fetch('https://localhost:7219/challengelist/CreateChallengelist?name=' + this.name + '&gameid=' + this.gameid, requestOptions)
      location.reload()
    },
    async Open () {
      this.open = true
      const res = await fetch('https://localhost:7219/SteamBingo/GetStats?id=' + this.gameid)
      const data = await res.json()
      this.Stats = data
    },
    async Close () {
      this.open = false
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
    h3{
      color: darkgray;
    }
    p{
        margin: 0px;
        color: darkgray;
    }
    .addchallenge{
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
    input{
      margin-left: 20%;
      margin-right: 20%;
      text-align: center;
    }
    select{
      margin-left: 20%;
      margin-right: 20%;
      text-align: center;
    }
    button{
      margin-left: 20%;
      margin-right: 20%;
      margin-bottom: 20px;
    }
</style>
