<template>
    <h1>Players:</h1>
    <div class="test">
        <div class="cards" v-for="player in players" :key="player.steamId">
            <Player :player="player"/>
        </div>
    </div>

</template>

<script>
import Player from './Player'

export default {
  name: 'All_Players',
  props: {
    players: Array
  },
  components: {
    Player
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
        flex-direction: row ;
    }
    .cards{
        width: 200px;
        align-self: center;
    }
    h1{
      color: darkgray;
    }
</style>
