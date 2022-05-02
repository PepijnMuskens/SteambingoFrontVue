<template>
<div class="card">
        <router-link :to="{path:'/game/' + game.steamId}">{{game.name}}</router-link>
        <h3>{{game.steamId}}</h3>
</div>
</template>

<script>
export default {
  name: 'Steam_Game',
  props: {
    game: Object
  }
}
</script>

<style scoped>
  .card{
      background: #1f1f1f;
      display: flex;
      justify-content: flex-start;
      flex-direction: column ;;
      width: 200px;
      padding-left: 10%;
      padding-right: 10%;
      margin-bottom: 20%;
      padding-top: 10px;
  }
  a {
      color: white;
      text-decoration: none;
      text-transform: uppercase;
  }
  h3{
    color: gray;
  }
</style>
