<template>
    <header>
        <h1>{{title}}</h1>
        <Button text="Test" color="green"/>
    </header>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Header_1',
  props: ['title'],
  components: {
    Button
  }
}
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 20px;
    }
</style>
