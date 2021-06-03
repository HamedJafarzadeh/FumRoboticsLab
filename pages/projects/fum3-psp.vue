<template>
  <div id="page-wrapper">
    <div class="content container">
      <h2>Fum 3-PSP Industrial Robot</h2>
      <br>
      <br>
      <div class="row">
        <div class="col-12 justify-content-center text-center mx-auto my-auto">
          <img src="../../assets/Robot.png" style="width: 30%; border-radius: 20%">
        </div>
      </div>
      <div class="row">
        <p>The Semi industrial 3PSP is of type 3PSP parallel robot. It can run in any of the three X,Y,Z,ϑ,φ,λ degrees
          of freedom, prominently used for orientating tools and solar panels. The robot has an open control
          architecture suitable for research applications. </p>
      </div>

    </div>
    <br>
    <br>

    <div id="social-videos" class="col-12 justify-content-center" style="width: 700px; margin: auto">
      <br>

      <social-videos id="test" youtube-i-d="qjqbLBO0nkw" aparat-i-d="dnX7y"/>
      <br>
      <br>
    </div>


  </div>
</template>

<script>
import SocialVideos from "@/components/socialVideos";

export default {
  name: "fum3-psp",
  scrollToTop: false,
  components: {
    SocialVideos,
  },
  methods: {
    goToMovie: function () {
      document.getElementById("social-videos")?.scrollIntoView();
    },
  },
  mounted() {
    if (this.$route.query['watch-movie'] === '1') {
      setTimeout(() => {
        document.getElementById("social-videos")?.scrollIntoView({behavior: "smooth"});
      },30)

    } else {
      window.scroll(0, 0)
    }
  },
}
</script>

<style scoped>
.social-videos-link:hover {
  color: #EAD703;

}

.social-videos-link {
  font-size: 20pt;
  font-weight: bolder;
  color: #EAD703;
  text-align: center;

}
</style>
