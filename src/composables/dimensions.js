/* TODO #1: Import necesarry helpers from @vue/composition-api */
import { reactive, onMounted, toRefs } from '@vue/composition-api'

function getWindowDimensions() {
  /* TODO #2: Create reactive object for the window dimensions */
  const dimensions = reactive({
    width: null,
    height: null,
  })
  /* TODO #3: Create method to get dimensions */
  function getDimensions() {
    dimensions.width = window.innerWidth
    dimensions.height = window.innerHeight
  }
  /* TODO #3: On mount, get dimensions and create a listener for window size changes */
  onMounted(() => {
    getDimensions()
    window.addEventListener('resize', getDimensions)
  })

  return toRefs(dimensions)
}

export default getWindowDimensions
