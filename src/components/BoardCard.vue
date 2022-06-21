<template>
<div class="card">
  <div class="pics">
    <div v-for="player in card.players" :key="player.steamId" class="pic">
      <img class="logo-image" :src="'data:image/jpeg;base64,'+ player.pic" alt="player profile picture">
    </div>
  </div>
  <div class="text"><p>{{card.discription}}</p></div>
  </div>
</template>

<script>
export default {
  name: 'Steam_Game',
  props: {
    card: Object
  }
}
</script>

<style scoped>
  .card{
      background: #1f1f1f;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      width: 200px;
      height: 200px;
      margin: 5px;
  }
  .pics{
    position: absolute;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  p {
      color: darkgray;
      text-decoration: none;
  }
  h3{
    color: gray;
  }
  .logo-image{
        width: 50px;
        height: 50px;
        border-radius: 50%;
  }
  .text{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
</style>
