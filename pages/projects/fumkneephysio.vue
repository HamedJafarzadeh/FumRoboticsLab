<template>
  <div id="page-wrapper">
    <div class="content container">
      <h2> FUM Knee Physio</h2>
      <br>
      <div class="row">
        <div class="col-12 justify-content-center text-center mx-auto my-auto" >
          <img src="../../assets/ProjectPictures/Physio.png" style="width: 30% ; border-radius: 20%">
        </div>
      </div>
      <div class="row">
        <p style="text-align: justify;">
          One specific area in medical robotics is joint rehabilitation. Knee rehabilitation therapy is a very important procedure to recover function after knee injury or surgery. The treatment objective is to reduce knee adhesion and regain adequate joint motion and flexibility. The key to successful knee rehabilitation requires regular exercises in a very controlled manner. Along this lines, 1DOF Lower-limb rehabilitation robot has been designed and constructed at FUM Robotics lab. Capable of using EMG signals, a variety of cognitive games can be employed and integrated with the system to assist the therapist in adjusting the rehabilitation process according to the medical progress of the user.

        </p>
      </div>


      <div id="social-videos"  class="col-12 justify-content-center" style="width: 700px; margin: auto">

        <social-videos youtube-i-d="_Fv_0XV2H-Q" aparat-i-d="smu8I"/>
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
  name: "fumkneephysio",
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
