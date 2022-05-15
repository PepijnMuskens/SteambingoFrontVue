<template>
    <div class="test">
      <h1>Challenges</h1>
      <div v-if="Selected">
        <AddChallenge :gameid="gameid" />
      </div>
        <div v-for="challenge in Challenges" :key="challenge.discription">
            <Challenge :challenge="challenge"/>
        </div>
    </div>

</template>

<script>
import Challenge from './challenge'
import AddChallenge from './AddChallenge.vue'

export default {
  name: 'All_Challenges',
  props: {
    Challenges: Array,
    gameid: Number
  },
  data () {
    return {
      Selected: Boolean
    }
  },
  components: {
    Challenge,
    AddChallenge
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
        color: darkgray;
    }
</style>
