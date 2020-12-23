<template>
  <header id="header">
    <span id="logospan"><nuxt-link to="/"><img id="logo" src="~/assets/fum-logo.png" height="30px"/></nuxt-link></span>
    <nav id="nav">
      <ul>
        <li><nuxt-link to="/#banner">Home</nuxt-link></li>
        <li><nuxt-link to="/#about" class="scrolly">About</nuxt-link></li>
        <li><nuxt-link to="/#projects" class="scrolly">Projects</nuxt-link></li>
        <li><nuxt-link to="/#researchtopics" class="scrolly">Research topics</nuxt-link></li>
        <li><nuxt-link to="/#publications" class="scrolly">Publications</nuxt-link></li>
        <li><nuxt-link to="/people" class="scrolly">People</nuxt-link></li>
        <li><a href="/join" class="button primary scrolly">Join Us</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
name: "HeaderSection"
}
</script>

<style scoped>

</style>
