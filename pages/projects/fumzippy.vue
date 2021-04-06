<template>
  <div id="page-wrapper">
    <div class="content container">
      <h2> FUM Zippy Wrist-Star Spherical </h2>
      <br>
      <br>
      <div class="row">
        <div class="col-12 justify-content-center text-center mx-auto my-auto" >
          <img src="../../assets/ProjectPictures/Zippy.png" style="width: 30% ; border-radius: 20%">
        </div>
      </div>
      <br>
      <br>
      <div class="row">
        <li>Robot type: 3-RPR parallel robot </li>
      </div>
      <div class="row">
        <li>Fully Spherical Parallel Robot </li>
      </div>
      <div class="row">
        <li>Applications: Optic surgery, Orienting Objects
        </li>
      </div>
      <br>
      <div style="display: flex;justify-content: center" id="social-videos_link">
        <a v-on:click="goToMovie" class="video-link">
          Click here to watch the movie </a>
      </div>

      <br>
      <br>
      <br>
      <br>

      <div id="social-videos" class="col-lg-12">
<br>
        <br>

        <social-videos youtube-i-d="1U_nB2uP1Uc" aparat-i-d="K58Gn"/>
        <br>
        <br>

      </div>
      <div class="col-lg-12">

        <social-videos youtube-i-d="FRAvAUU38Qs" aparat-i-d="0YjnP"/>
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
name: "fumzippy",
  components: {
    SocialVideos,
  },
  methods: {
    goToMovie: function () {
      document.getElementById("social-videos").scrollIntoView();
    }
  }
}
</script>

<style scoped>

</style>
