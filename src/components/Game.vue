<template>
<div class="card">
        <h3>{{game.name}} </h3>
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
      background: #f4f4f4;
      display: flex;
      justify-content: flex-start;
      flex-direction: column ;;
      width: 200px;
      padding-left: 10%;
      padding-right: 10%;
      margin-bottom: 20%;
  }
</style>
