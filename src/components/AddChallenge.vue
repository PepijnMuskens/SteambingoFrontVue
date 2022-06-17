<template>
<button v-if="!open" @click="Open()">v</button>
<button v-if="open" @click="Close()">/\</button>
<div v-if="open" class="addchallenge">
  <h3>Add Challenge {{gameid}} </h3>
     <input v-model="discription" placeholder="discription">
     <p>statname:</p>
     <select v-model="statname" id="stats">
         <option v-for="stat in Stats" :key="stat.id" :value="stat">{{stat}}</option>
     </select>
     <input v-model="value" placeholder="Value">
     <input v-model="diff" placeholder="Difficulty">
    <button @click="AddChallenge()">Add Challenge</button>
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
        discription: '',
        statname: '',
        value: 0,
        diff: 0
      },
      Stats: [],
      open: false
    }
  },
  methods: {
    async AddChallenge () {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Vue POST Request Example' })
      }
      const res = await fetch('https://localhost:7219/challengelist/AddChallenge?disc=' + this.discription + '&statname=' + this.statname + '&value=' + this.value + '&diff=' + this.diff + '&gameid=' + this.gameid, requestOptions)
      const data = await res.json()
      if (data.value > 0) {
        location.reload()
      }
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
