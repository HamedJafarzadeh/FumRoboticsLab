<template>
  <div id="page-wrapper">
    <div class="content container">
      <h2> FUM LP Simulator </h2>
      <div class="row">
        <div class="col-12 justify-content-center text-center mx-auto my-auto" >
          <img src="../../assets/ProjectPictures/lpsimulator.png" style="width: 60% ; border-radius: 20%">
        </div>
      </div>
      <br>
      <div class="row">
        <li>Robot type: 6-RSU </li>
      </div>
      <div class="row">
        <li>Approx. dim’s (parked):
          1800x1800x720mm(Width*Length*Height)
        </li>
      </div>
      <div class="row">
        <li>Acceleration: 0.6g</li>
      </div>
      <div class="row">
        <li>Stroke: 120x120x120mm(Width*Length*Height)</li>
      </div>



      <br>



      <div id="social-videos"  class="col-12 justify-content-center" style="width: 700px; margin: auto">

        <social-videos youtube-i-d="gZXehtqiUMY" aparat-i-d="jlcFt"/>
        <br>
        <br>

      </div>
      <br>

    </div>
  </div>
</template>

<script>
import SocialVideos from "@/components/socialVideos";
export default {
name: "fumLPsim",
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
