<template>
  <header id="header">
    <span id="logospan"><nuxt-link to="/"><img id="logo" src="~/assets/fum-logo.png" height="30px"/></nuxt-link></span>
    <nav id="nav">
      <ul>
        <li>
          <nuxt-link to="/#banner">Home</nuxt-link>
        </li>
        <li>
          <a v-on:click="goToAbout()" href="/#about" class="scrolly">About</a>
        </li>
        <li>
          <a v-on:click="goToResearchTopics()" href="/#researchtopics" class="scrolly">Research Topics</a>
        </li>
        <li>
          <a v-on:click="goToPublications()" href="/#publication"  class="scrolly">Publications</a>
        </li>
        <li>
          <nuxt-link to="/people" class="scrolly">People</nuxt-link>
        </li>
        <li><a href="/join" class="button primary scrolly">Join Us</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderSection",
  methods: {
    goToPublications() {
      document.getElementById('publications').scrollIntoView({behavior: "smooth"})

    },

    goToAbout() {
      document.getElementById('about').scrollIntoView({behavior: "smooth"})

    },
    goToResearchTopics(){
      document.getElementById('researchtopics').scrollIntoView({behavior: "smooth"})
    }
  }
}
</script>

<style scoped>

</style>
