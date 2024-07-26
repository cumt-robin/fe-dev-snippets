import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Vue3tsx',
  props: {},
  setup(props, { emit, attrs, slots, expose }) {
    const value = ref(1)

    return () => {
      return <div>demo</div>
    }
  },
})