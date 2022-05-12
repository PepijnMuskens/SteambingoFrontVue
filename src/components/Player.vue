<template>
<div class="card">
    <img :src="'data:image/jpeg;base64,'+player.pic">
    <h1>{{player.name}}</h1>
    <h3>{{player.steamId}}</h3>
</div>
</template>

<script>
export default {
  name: 'player_com',
  props: {
    player: Object
  }
}
</script>

<style scoped>
  .card{
      background: #1f1f1f;
      display: flex;
      flex-direction: column;
      width: 200px;
      padding-left: 10%;
      padding-right: 10%;
      margin-bottom: 20%;
      padding-top: 10px;
  }
  h1 {
      color: white;
      text-decoration: none;
  }
  h3{
    color: gray;
  }
</style>
