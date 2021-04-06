<template>
  <div id="page-wrapper">
    <div class="content container">
      <h2> FUM Knee Exoskeleton </h2>
      <br>
      <br>
      <div class="row">
        <div class="col-12 justify-content-center text-center mx-auto my-auto" >
          <img src="../../assets/ProjectPictures/fum-knee.png" style="width: 20% ; border-radius: 20%">
        </div>
      </div>
      <div class="row">
        <li>Ability to carry human weight</li>
      </div>
      <div class="row">
        <li>Can be equipped by EMG signals
        </li>
      </div>
      <div class="row">
        <li>Built in SEA actuator and high stiffness. Its open control architecture is
          ideal for research applications
        </li>
      </div>
      <br>

      <div style="display: flex;justify-content: center" id="social-videos_link">
        <a v-on:click="goToMovie" class="video-link">
          Click here to watch the movie </a>
      </div>
      <div id="social-videos" class="col-lg-12">

        <social-videos youtube-i-d="q4qnLcl_ljA" aparat-i-d="8xfyN"/>
        <br>
        <br>

      </div>



    </div>
  </div>
</template>

<script>
import SocialVideos from "@/components/socialVideos";
export default {
name: "fumkneeexoskeleton",
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
