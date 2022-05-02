<template>
    <div class="test">
      <h1>Challenges</h1>
        <div v-for="challenge in Challenges" :key="challenge.discription">
            <Challenge :challenge="challenge"/>
        </div>
    </div>

</template>

<script>
import Challenge from './challenge'

export default {
  name: 'All_Games',
  props: {
    Challenges: Array
  },
  components: {
    Challenge
  }
}
</script>

<style scoped>
    .test{
        display: flex;
        flex-direction: column;
        margin-left: 10%;
        margin-right: 10%;
        justify-content: flex-start;
        width: 30%;
    }
    h1{
        color: black;
    }
</style>
