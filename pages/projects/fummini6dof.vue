<template>
  <div id="page-wrapper">
    <div class="content container">
      <h2> FUM Mini 6DOF Parallel Robot </h2>
      <br>
      <br>
      <div class="row">
        <div class="col-12 justify-content-center text-center mx-auto my-auto" >
          <img src="../../assets/ProjectPictures/6Rnew.png" style="width: 20% ; border-radius: 20%">
        </div>
      </div>
      <br>
      <br>
      <div class="row">
        <p>
          The FUM Mini 6DOF Parallel Robot, is of type 6RSS structure for applications such as Mechanical bulls and biomedical. It is only 30cm in length, widths and height.        </p>
      </div>

      <div class="row">
        <div class="col-12 justify-content-center text-center mx-auto my-auto" >
          <h4> Specification</h4>
          <table style="width: 1300px;">
            <tbody>
            <tr>
              <td style="width: 63px;">&nbsp;Motion</td>
              <td style="width: 23px;">&nbsp;Yaw&nbsp;&nbsp;</td>
              <td style="width: 10px;">&nbsp;Pitch&nbsp;&nbsp;</td>
              <td style="width: 15px;">&nbsp;Roll&nbsp;</td>
              <td style="width: 15px;">&nbsp;Heave&nbsp;&nbsp;</td>
              <td style="width: 15px;">&nbsp;Sway&nbsp;&nbsp;</td>
              <td style="width: 15px;">&nbsp;Surge&nbsp;&nbsp;</td>
            </tr>
            <tr>
              <td style="width: 63px;">Position&nbsp;</td>
              <td style="width: 23px;">&nbsp;&#177 20 &#176 &nbsp;&nbsp;</td>
              <td style="width: 10px;">&nbsp;&#177 25 &#176 &nbsp;&nbsp;</td>
              <td style="width: 15px;">&nbsp;&#177 25 &#176 &nbsp;&nbsp;</td>
              <td style="width: 15px;">&nbsp;&#177 5 &#176 &nbsp;&nbsp;</td>
              <td style="width: 15px;">&nbsp;&#177 5 &#176 &nbsp;&nbsp;</td>
              <td style="width: 15px;">&nbsp;&#177 5 &#176 &nbsp;&nbsp;</td>
            </tr>
            <tr>
              <td style="width: 63px;">&nbsp;Velocity</td>
              <td style="width: 23px;">&nbsp;50 &#176/s</td>
              <td style="width: 10px;">&nbsp;50 &#176/s</td>
              <td style="width: 15px;">&nbsp;50 &#176/s</td>
              <td style="width: 15px;">&nbsp;0.5 m/s</td>
              <td style="width: 15px;">&nbsp;0.5 m/s</td>
              <td style="width: 15px;">&nbsp;0.5 m/s</td>
            </tr>

            </tbody>
          </table>

        </div>
      </div>
      <br>


      <div id="social-videos"  class="col-12 justify-content-center" style="width: 700px; margin: auto">
        <br>
        <br>
        <br>
        <social-videos youtube-i-d="HWk7tRiB1AI" aparat-i-d="dGkHZ"/>
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
name: "fummini6dof",
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
