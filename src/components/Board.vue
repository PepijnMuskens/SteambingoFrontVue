<template>
        <div class="row" v-for="row in board" :key="row">
            <div v-for="card in row" :key="card">
                <Card :card="card"/>
            </div>
        </div>
</template>

<script>
import Card from './BoardCard'
export default {
  name: 'bingo_board',
  props: {
    board: Array
  },
  components: {
    Card
  }
}
</script>

<style scoped>
  a {
      color: white;
      text-decoration: none;
      text-transform: uppercase;
  }
  h1{
    color: darkgray;
  }
  .row{
      display: flex;
      justify-content: center;
  }
</style>
