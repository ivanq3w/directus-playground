import { ref, computed } from 'vue'

export function useCounter() {
  const count = ref(0)
  const countDouble = computed(() => count.value * 2)
  const countAdd = () => {
    count.value++
  }

  return {
    count,
    countDouble,
    countAdd,
  }
}