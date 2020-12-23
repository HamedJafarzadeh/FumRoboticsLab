<template>
  <div>
    <div class="embed-responsive embed-responsive-16by9 videodiv">
        <video autoplay muted loop playsinline id="myVideo">
          <source src="~/assets/6rBackground.mp4" type="video/mp4">
        </video>
    </div>
  <section class="container d-flex align-items-center min-vh-100 no-gutters">

    <div class="d-flex min-vw-100 position-absolute" >

    </div>

      <b-row class="" style="min-width: 100%">
        <b-col lg="6" md="6" sm="12" class="pl-5 my-auto align-content-center text-center">
          <header>
            <h2>FUM Robotics Laboratoary</h2>
            <p>We <span style="background-color: brown; font-weight:bold; padding: 5px"> bridge</span> the imagination and reality<br/>
            </p>
          </header>

        </b-col>
        <b-col lg="6" md="6" sm="12" class="d-flex align-content-center text-center">
          <div style=" min-height: 60vh;float:left; min-width: 20vw" class="">
            <span  class="slider image fade-in circleCrop"><img class="sliderimg" src="~/assets/Robot.png" alt=""/></span>
            <span  class="slider image fade-out" style="display: none"><img class="sliderimg" src="~/assets/ProjectPictures/6r.png" alt=""/></span>
            <span  class="slider image fade-out" style="display: none"><img class="sliderimg"  src="~/assets/ProjectPictures/hand2.png" alt=""/></span>
            <span  class="slider image fade-out" style="display: none"><img class="sliderimg" src="~/assets/ProjectPictures/fumstewartmidsize.png" alt=""/></span>
          </div>
        </b-col>
      </b-row>

    <a href="#about" class="nextButton goto-next scrolly">Next</a>
  </section>
  </div>
</template>

<script>
var i = 0;

export default {
name: "FirstSection",
  data(){
   return{
     sliderIndex : 0
   }
  },
  mounted() {
    var sliders = this.$el.getElementsByClassName("slider");
    sliders.forEach(function (slider){
        slider.style.display='inline-block';
      }
    );
    // sliders[0].style.display='inline-block';


  setInterval(()=>{
      this.sliderNext(sliders);
  },
    3000
  )


  },
  methods:{
    sliderNext(elements){
      this.hideSlide(elements);
      this.sliderIndex = (this.sliderIndex+1)%elements.length;
      this.showSlide(elements);
    },
    showSlide(elements){
      // elements[this.sliderIndex].style.display = 'inline-block';
      elements[this.sliderIndex].classList.remove('fade-out');
      elements[this.sliderIndex].classList.add('fade-in');
    },
    hideSlide(elements){
      elements[this.sliderIndex].classList.remove('fade-in')
      elements[this.sliderIndex].classList.add('fade-out');
    }
  }

}
</script>

<style scoped>

.sliderimg{
  width: 100%;
}
/* Style the video: 100% width and height to cover the entire window */
.videodiv{
  position: absolute;
  overflow: hidden;
  opacity: 100%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
}
#myVideo {
  /*position: absolute;*/
  /*overflow: hidden;*/
  opacity: 10%;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  /*z-index: 0;*/
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}


.slider{
  position: absolute;
  transition: all 2s;
}
.circleCrop{
  border-radius: 100%;
}
.fade-in {
  opacity: 1;
  transform: translateY(0px);
}
.fade-out {
  opacity: 0;
  transform: translateY(100px);
}


.fullscreen-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
}

.fullscreen-bg__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
