<template>
  <div class="main-container">
    <!-- Header -->
    <HeaderSection/>
    <Nuxt />

  </div>
</template>

<script>

export default {
  head: {
    script: [
      // { src: '/head.js' },
      // Supported since Nuxt 1.0
      { src: '/js/jquery.scrolly.min.js', body: true },
      { src: '/js/jquery.dropotron.min.js', body: true },
      { src: '/js/jquery.scrollex.min.js', body: true },
      { src: '/js/browser.min.js', body: true },
      { src: '/js/breakpoints.min.js', body: true },
      { src: '/js/util.js', body: true },
      { src: '/js/main.js', body: true },
      // { src: '/defer.js', defer: '' }
    ]
  }
}
</script>
<style scoped>

</style>
