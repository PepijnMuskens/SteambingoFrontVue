<template>
     <h1>All games</h1>
    <div class="test">
        <div v-for="game in games" :key="game.steamId">
            <Game :game="game"/>
        </div>
    </div>

</template>

<script>
import Game from './Game'

export default {
  name: 'All_Games',
  props: {
    games: Array
  },
  components: {
    Game
  }
}
</script>

<style scoped>
    .test{
        display: flex;
        flex-wrap: wrap;
        margin-left: 10%;
        margin-right: 10%;
        justify-content: space-between;
    }
    h1{
      color: black;
    }
</style>
