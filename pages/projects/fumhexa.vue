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


      <br>



      <div id="social-videos"  class="col-12 justify-content-center" style="width: 700px; margin: auto">

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
