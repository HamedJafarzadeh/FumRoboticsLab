<template>
  <section id="banner">
    <div class="content">
      <header>
        <h2>FUM Robotics Laboratoary</h2>
        <p>We <span style="background-color: brown; font-weight:bold; padding: 5px"> bridge</span> the imagination and reality<br/>
        </p>
      </header>
      <span  class="slider image"><img src="~/assets/Robot.png" alt=""/></span>
      <span  class="slider image" style="display: none"><img src="~/assets/ProjectPictures/6r.png" alt=""/></span>
      <span  class="slider image" style="display: none"><img src="~/assets/ProjectPictures/hand2.png" alt=""/></span>
      <span  class="slider image" style="display: none"><img src="~/assets/ProjectPictures/fumstewartmidsize.png" alt=""/></span>




    </div>
    <a href="#about" class="nextButton goto-next scrolly">Next</a>
  </section>
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
        slider.style.display='none';
      }
    );
    sliders[0].style.display='inline-block';
  setInterval(()=>{
      this.sliderNext(sliders);
  },
    3000
  )
  },
  methods:{
    sliderNext(elements){
      console.log(elements);
      elements.forEach(function (slider){
        slider.style.display='none';
      });
      elements[this.sliderIndex].style.display = 'inline-block';
      this.sliderIndex = (this.sliderIndex+1)%elements.length;
      console.log("Next Slider " + this.sliderIndex)
    },
  }
}
</script>

<style scoped>

</style>
