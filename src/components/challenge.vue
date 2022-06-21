<template>
<div class="card">
    <div class="Top-Row">
        <div class="Bottem-Row">
            <h4>discription:</h4>
            <button v-if="!edit" @click="Edit()">E</button>
            <button v-if="edit" @click="Save()">S</button>
        </div>
        <h3 v-if="!edit">{{challenge.discription}}</h3>
        <input v-if="edit" v-model="discription">
    </div>
    <h4>Stat name:</h4>
    <div class="Bottem-Row">
        <h3 v-if="!edit">{{challenge.statName}}</h3>
        <input v-if="edit" v-model="statname">
        <div class="dif-div">
            <h4 class="difficulty">Difficulty:{{challenge.difficulty}}</h4>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Challenge_Cart',
  props: {
    challenge: Object
  },
  data () {
    return {
      edit: false,
      form: {
        discription: '',
        statname: '',
        diff: this.challenge.difficulty,
        id: 0
      }
    }
  },
  methods: {
    async Edit () {
      this.edit = true
      this.discription = this.challenge.discription
      this.statname = this.challenge.statName
    },
    async Save () {
      this.edit = false
      await fetch('https://localhost:7219/steambingo/editchallenge?id=' + this.challenge.id + '&discription=' + this.discription + '&statname=' + this.statname)
      location.reload()
    }
  }
}
</script>

<style scoped>
  .card{
      background: #1f1f1f;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      padding-left: 5%;
      padding-right: 5%;
      margin-bottom: 5%;
  }
  h3{
      color: white;
      margin-bottom: 5px;
      margin-top: 5px;
      align-self: flex-start;
      text-align: left;
  }
  h4{
      color: gray;
      margin-bottom: 0px;
      margin-top: 5px;
      align-self: flex-start;
      text-align: left;
  }
  .Top-Row{
      display: flex;
      flex-direction: column;
      align-self: flex-start;
      width: 100%;
  }
  .Bottem-Row{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-content: flex-start;
  }
  .difficulty{
      align-self: flex-end;
      padding-right: 5px;
  }
  .dif-div{
      display: flex;
      flex-direction: column-reverse;
  }
  button{
      margin-top: 5px;
      height: 16px;
      width: 16px;
      text-align: center;
      padding: 0px;
  }
</style>
