<template>
  <div id="app">
    <div class="container">
      <div class="top">
        <h1>Articles</h1>

        <div class="search-fields">
          <input
            v-model="searchQuery"
            class="search-input"
            placeholder="Find a post"
            name="search"
            id="search"
            type="text"
          />
          <button @click="search" class="search-button">Search</button>
        </div>
      </div>

      <Posts :posts="posts" />

      <button @click="nextPage" :disabled="!canShowMore" class="load-button">
        Load More
      </button>
    </div>
  </div>
</template>

<script>
import Posts from './components/Posts'
import allPosts from './posts'

import { ref, computed } from '@vue/composition-api'

import paginate from './composables/pagination'
import getWindowDimensions from './composables/dimensions'

export default {
  components: {
    Posts,
  },
  setup() {
    const searchQuery = ref('')
    const submittedSearch = ref('')
    function search() {
      submittedSearch.value = searchQuery.value
    }

    const posts = computed(() =>
      allPosts.filter(post => {
        return (
          post.title
            .toLowerCase()
            .includes(submittedSearch.value.toLowerCase()) ||
          post.summary
            .toLowerCase()
            .includes(submittedSearch.value.toLowerCase())
        )
      })
    )
    const { width, height } = getWindowDimensions()
    const pageLimit = computed(() => (width.value > 767 ? 4 : 2))
    const { items, canShowMore, nextPage } = paginate(posts, pageLimit)

    return {
      filteredPosts: posts,
      posts: items,
      searchQuery,
      search,
      nextPage,
      canShowMore,
    }
  },
}
</script>

<style src="./assets/styles.css"></style>
