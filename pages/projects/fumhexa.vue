<template>
  <div id="page-wrapper">
    <div class="content container">
      <h2>Fum Hexa</h2>
      <br>
      <br>
      <div class="row">
        <div class="col-12 justify-content-center text-center mx-auto my-auto" >
          <img src="../../assets/ProjectPictures/HEXA.png" style="width: 40%; border-radius: 20%">
        </div>
      </div>
      <div class="row">
        <p style="text-align: justify"> Hip Exoskeleton for Assistance (HEXA) is a wearable robotic system for assistive technology and rehabilitation engineering, primarily developed to help patients with lower limb disabilities to restore or improve their walking ability. The robot consists of two 70 BLDC with Harmonic Drive gearbox, each for either hip; driving the two metal links which are placed parallel to the human thigh and fastened with Velcro straps. HEXA assists disabled people regain their locomotion with significant reduction of the therapists’ physical burden. </p>
      </div>
      <br>

      <div style="display: flex;justify-content: center" id="social-videos_link">
        <a v-on:click="goToMovie" class="video-link">
          Click here to watch the movie </a>
      </div>
      
      <br>



      <div id="social-videos" class="col-lg-12">

        <social-videos youtube-i-d="TLseVuZhDGc" aparat-i-d="hTlAS"/>
        <br>
        <br>

      </div>

    </div>


  </div>
</template>

<script>
import SocialVideos from "@/components/socialVideos";
export default {
name: "fumhexa",
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
