<template>
  <h3>Add Challenge {{challengelistid}}</h3>
     <select v-model="id" id="challenge">
         <option v-for="challenge in AvailableChallenges" :key="challenge.id" :value="challenge.id">{{challenge.discription}}</option>
     </select>
    <button @click="AddChallengeList()">Add Challenge</button>
</template>

<script>

export default {
  name: 'Add_Challenge',
  props: {
    Challenges: [],
    AvailableChallenges: [],
    challengelistid: Number
  },
  data () {
    return {
      form: {
        id: ''
      },
      selectlist: []
    }
  },
  methods: {
    async AddChallengeList () {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Vue POST Request Example' })
      }
      await fetch('https://steambingogame20220512121421.azurewebsites.net/ChallengeList/AddToChallengeList?challengelistid=' + this.challengelistid + '&challengeid=' + this.id, requestOptions)
      location.reload()
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
      margin-bottom: 20px;
      margin-top: 20px;
    }
    button{
      margin-left: 20%;
      margin-right: 20%;
      margin-bottom: 20px;
    }
</style>
