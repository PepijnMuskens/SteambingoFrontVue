<template>
<div class="card">
    <div class="Top-Row">
        <h4>discription:</h4>
        <h3>{{challenge.discription}}</h3>
    </div>
    <h4>Stat name:</h4>
    <div class="Bottem-Row">
        <h3>{{challenge.statName}}</h3>
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
  }
}
</script>

<style scoped>
  .card{
      background: #1f1f1f;
      display: flex;
      justify-content: flex-start;
      flex-direction: column ;;
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
</style>
