<template>
  <ul class="posts">
    <li class="post" v-for="(post, i) in posts" :key="i">
      <article>
        <img class="post-image" v-if="post.image" :src="post.image" />
        <div class="post-title">{{ post.title }}</div>
        <div class="post-summary">{{ post.summary }}</div>
      </article>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    posts: Array,
  },
}
</script>
