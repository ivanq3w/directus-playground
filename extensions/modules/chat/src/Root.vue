<style lang="scss" scoped>
.wrapper {
  @apply bg-green-500;
  border: 1px solid red;
  width: 100%;
  &:hover {
    background: white;
  }
}
</style>

<template>
<div class="wrapper p-10">
  <h1>I am Root!</h1>
  <span style="min-width: 100%" @click="count++">count: {{count}}, countDouble: {{countDouble}}</span>
  <span style="min-width: 100%">width: {{width}}, height: {{height}}</span>
  <SomeComponent />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { useCounter } from './use/counter'
import SomeComponent from './components/SomeComponent.vue'

export default defineComponent({
  components: {
    SomeComponent,
  },
  setup() {
    const { count, countDouble, countAdd } = useCounter()
    const { width, height } = useWindowSize()

    return {
      count,
      countDouble,
      countAdd,
      width,
      height,
    }
  },
})
</script>
