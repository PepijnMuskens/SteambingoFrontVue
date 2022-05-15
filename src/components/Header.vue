<template>
    <header>
        <div class="start">
            <a href="/"><h1>All Games</h1></a>
            <a href="/addgame"><h3>Add Game</h3></a>
        </div>
        <div class="end">
            <Button text="Test" color="green"/>
        </div>
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
    a {
        color: gray;
        text-decoration: none;
        text-transform: uppercase;
        height: auto;
        padding: 20px;
        text-align: end;
    }
    h1{
        margin: 0px;
    }
    h3{
        margin: 0px;
    }
    .start{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }
    .end{
        display: flex;
        align-items: flex-end;
        height: max-content;
    }
</style>
