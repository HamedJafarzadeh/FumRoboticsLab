<template>
    <b-row class="hjprojectssection no-gutters" v-bind:style="[isRight?{flexDirection: `unset`}:{flexDirection: `row-reverse`}]">
        <b-col  lg="4" md="4" sm="12" class="hj_projectDescBox p-3" v-bind:class="{right : isRight, left : !isRight}" >

        <b-container >
              <header>
                <h2>{{ProjectName}}</h2>
                <p>{{ProjectSubtitle}}</p>
              </header>
          <div class="hj_projectDescBox_description" >
            <slot/>
          </div>
          <ul class="actions" style="margin-top: 20px">
            <nuxt-link :to="`/projects${this.ProjectLink}`" class="button">Learn More</nuxt-link>
          </ul>
        </b-container>
      </b-col>

<!--      <b-col cols="8" class="hj_projectImage justify-content-center text-center" :style="`background-image:url('~/assets/Robot.png');`">-->
      <b-col lg="8" md="8" sm="12" class="hj_projectImage" :class="{cover:PictureCover}" :style="{backgroundImage: `url(` + require(`~/assets/ProjectPictures/${this.ProjectPicture}`) + `)`}">
<!--        <img class="image" :src="require(`~/assets/ProjectPictures/${this.ProjectPicture}`)" alt=""/>-->
      </b-col>
    </b-row>
</template>


<!--  <section class="spotlight style2 left">-->
<!--    <span class="image fit"><img :src="require(`~/assets/ProjectPictures/${this.ProjectPicture}`)" alt="" style="float: left"/></span>-->
<!--    <div class="content" >-->
<!--      <header>-->
<!--        <h2>{{ProjectName}}</h2>-->
<!--        <p>{{ProjectSubtitle}}</p>-->
<!--      </header>-->
<!--      <p style="max-height: 30vh;word-wrap: break-word; text-overflow: ellipsis;  overflow: hidden; ">-->
<!--        <slot/>-->
<!--      </p>-->
<!--      <div class="fade"></div>-->
<!--      <ul class="actions">-->
<!--        <nuxt-link :to="`${this.ProjectLink}`" class="button">Learn More</nuxt-link>-->
<!--      </ul>-->
<!--    </div>-->
<!--    <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>-->


<script>
export default {
  name: "IndexProjectItem",
  props: {
    ProjectName: String,
    ProjectSubtitle: String,
    ProjectPicture: String,
    ProjectLink:String,
    isRight:Boolean,
    PictureCover:Boolean,
  },
}
</script>

<style scoped>

</style>
