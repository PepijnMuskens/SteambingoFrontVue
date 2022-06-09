<template>
    <div class="test">
      <h1>Challenges</h1>
      <div style="overflow-y: scroll; height:500px;">
        <div v-for="challenge in Challenges" :key="challenge.discription">
            <Challenge :challenge="challenge"/>
        </div>
      </div>
    </div>

</template>

<script>
import Challenge from './challenge'

export default {
  name: 'All_Challenges',
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
        justify-content: center;
        width: 100%;
    }
    h1{
        color: darkgray;
    }
</style>
