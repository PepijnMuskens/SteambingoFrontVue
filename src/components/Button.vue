<template>
    <button @click="onClick()" :style="{background: color}" class="btn">{{text}}</button>
</template>

<script>
export default {
  name: 'Button_Test',
  props: {
    text: String,
    color: String
  },
  methods: {
    onClick () {
      console.log('çlick')
    }
  }
}
</script>
