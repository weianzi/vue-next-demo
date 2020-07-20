<template>
  <h1>{{ msg }} </h1>
  <p>data：{{count}}</p>
  <p>countRef：{{countRef}}</p>
  <p>state.count：{{state.count}}</p>
  <button @click="handleClick">handleClick</button>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  setup() {
    const countRef = ref(10)
    const state = reactive({
      count: 100
    })
    function handleClick() {
      state.count++
      this.count++
      countRef.value++
    }
    return {
      state,
      countRef,
      handleClick
    }
  }
}
</script>
