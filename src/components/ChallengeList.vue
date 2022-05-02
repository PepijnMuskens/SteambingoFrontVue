<template>
<div class="card">
    <div class="Top-Row">
        <div class="Name-Link">
            <h4>Name:</h4>
            <router-link :to="{path:'/challengelist/' + challengeList.id}">Inspect</router-link>
        </div>
        <h3>{{challengeList.name}}</h3>
    </div>
    <div class="Bottem-Row">
        <h4 class="end">Id:{{challengeList.id}}</h4>
    </div>
</div>
</template>

<script>
export default {
  name: 'Challenge_Cart',
  props: {
    challengeList: Object
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
  .Name-Link{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }
  .Bottem-Row{
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
  }
  .end{
      align-self: flex-end;
      padding-right: 5px;
  }
  .end-div{
      display: flex;
      flex-direction: column-reverse;
  }
  a {
      padding-top: 5px;
      color: gray;
      text-decoration: none;
      text-transform: uppercase;
  }
</style>
