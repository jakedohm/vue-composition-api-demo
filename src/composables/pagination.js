import { ref, computed, watch } from '@vue/composition-api'

function paginate(items, pageLength) {
  /* TODO #3: Create reactive page property, starting at 0 */
  const page = ref(0)

  /* TODO #4: Create method to request next page of items */
  function nextPage() {
    page.value++
  }

  /* TODO #5: Use a computed property for the paginated items */
  const paginatedItems = computed(() => {
    const count = pageLength.value * (page.value + 1)

    return items.value.slice(0, count)
  })

  /* TODO #6: canShowMore computed property */
  const canShowMore = computed(() => {
    const count = pageLength.value * (page.value + 1)
    return count <= items.value.length
  })

  watch(items, (newItems, oldItems) => {
    if (newItems && oldItems && newItems !== oldItems) {
      page.value = 0
    }
  })

  /* TODO #7: Return all public properties */
  return { items: paginatedItems, canShowMore, nextPage }
}

export default paginate
