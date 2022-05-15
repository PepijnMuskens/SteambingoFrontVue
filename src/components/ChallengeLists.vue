<template>
    <div class="test">
      <h1>ChallengeLists</h1>
        <div class="challengelists" v-for="challengelist in ChallengeLists" :key="challengelist.id">
            <ChallengeList :challengeList="challengelist"/>
        </div>
    </div>
</template>

<script>
import ChallengeList from './ChallengeList'

export default {
  name: 'All_Games',
  props: {
    ChallengeLists: Array
  },
  components: {
    ChallengeList
  }
}
</script>

<style scoped>
    .test{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 10%;
        margin-right: 10%;
        width: 30%;
    }
    h1{
        color: darkgray;
    }
</style>
