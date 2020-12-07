<template>
  <div class="container">

    <article>
      <nuxt-content :document="article" />
<!--      {{article.path}}-->
    </article>
  </div>

</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }

  }
}
</script>

<style scoped>

</style>
