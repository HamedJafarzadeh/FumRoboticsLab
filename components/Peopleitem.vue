<template>
  <div class="col-lg-4" v-bind:href="href">
    <img :src="require(`~/assets/people/${img}`)" style="height: 180px; width: auto; border-radius: 20%">
    <div style="font-weight: bolder">{{ name }}</div>
    <a v-if="linkedin !== ''" :href="`${linkedin}`" target="_blank">
      <fa :icon="['fab','linkedin']" style=" color: #0a66c2;   "/>
    </a>
    <a v-if="(blog !== '' && blog !== undefined)" :href="`${blog}`" target="_blank">
      <fa :icon="['fas','external-link-square-alt']" style=" color: #e44c65;   "/>
    </a>
    <h5>{{ grade }} <br> <h6>{{ email }}</h6></h5>
    <h6>Research Interests/Specializations: {{ research }} </h6>




  </div>
</template>
<script>
export default {
  name: "Peopleitem",
  props: {
    img: String,
    name: String,
    grade: String,
    email: String,
    research: String,
    linkedin: String,
    blog: String,
    google: String,
  },
}
</script>

<style scoped>

</style>
