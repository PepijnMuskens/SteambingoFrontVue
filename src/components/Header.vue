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
        justify-content: space-between;
        align-items: center;
        padding-left: 60px;
        padding-right: 60px;
        margin-bottom: 70px;
        background: #1f1f1f;
    }
</style>
