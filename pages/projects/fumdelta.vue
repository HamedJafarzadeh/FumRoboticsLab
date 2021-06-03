<template>
  <div id="page-wrapper">
    <div class="content container">
      <h2>Fum Delta</h2>

      <div class="row">
        <div class="col-12 justify-content-center text-center mx-auto my-auto" >
          <img src="../../assets/ProjectPictures/delta.png" style="width: 40%; border-radius: 20%">
        </div>
      </div>
      <br>
      <br>
      <div class="row">
        <p> A parallel robot with three parallelogram arms for picking and packaging with high acceleration and speed capability. </p>

      </div>


      <br>
      <br>
        <div id="social-videos" class="col-12 justify-content-center">
          <social-videos youtube-i-d="7TS7npC5ZZo" aparat-i-d="F0gy4"/>
          <br>
          <br>
        </div>
        <br>
        <br>
        <br>
        <br>









    </div>




  </div>
</template>

<script>
import SocialVideos from "@/components/socialVideos";
export default {
name: "Delta",
  scrollToTop: false,
  components: {
    SocialVideos,
  },
  methods: {
    goToMovie: function () {
      document.getElementById("social-videos").scrollIntoView();
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

</style>
