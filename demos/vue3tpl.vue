<template>
  <div>Vue3 Template</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Vue3tpl',
  setup() {
    const a = ref(1);
    return {
      a
    }
  }
})
</script>

<style lang="less" scoped>

</style>