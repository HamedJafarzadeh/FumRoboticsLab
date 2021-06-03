<template>
  <div id="page-wrapper">
    <div class="content container">
      <h2> FUM SCARA II </h2>
      <br>
      <br>
      <div class="row">
        <div class="col-12 justify-content-center text-center mx-auto my-auto" >
          <img src="../../assets/ProjectPictures/scara2.png" style="width: 40% ; border-radius: 20%">
        </div>
      </div>
      <br>
      <br>
      <div class="row">
        <p style="text-align: justify">
          FUM SCARA II is the second series in the class of SCARA manipulators developed at FUM robotics lab. This robot entails industrial grade control architecture for factory usage, with main applications in pick & place scenarios, packaging industry, pharmaceutical lines.
        </p>
      </div>
      <li>Robot type: Series RRR-P, XYZ,&#952 </li
      <div class="row">
        <li>Repeatability – Best case: 0.02mm</li>
      </div>


      <br>
      <br>

      <div id="social-videos"  class="col-12 justify-content-center" style="width: 700px; margin: auto">

        <social-videos youtube-i-d="u1WJJyZP2lM" aparat-i-d="MYyI8"/>
        <br>
        <br>

      </div>




      <br>
      <br>
      <br>

    </div>
  </div>
</template>

<script>
import SocialVideos from "@/components/socialVideos";
export default {
name: "fumscara2",
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
