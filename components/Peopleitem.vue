<template>
  <div class="col-lg-4" v-bind:href="href">
   <img :src="` /_nuxt/assets/people/${img}`" style="height: 180px; border-radius: 20%">
    <h5>{{ name }}</h5>
    <h5>{{grade}} <br> <h6>{{email}}</h6> </h5>


    <h6>Research Interests/Specializations: {{research}} </h6>
    <a :href="`${linkedin}`" target="_blank"> <fa :icon="['fab','linkedin']" style="margin-right: 33px; color: #0a66c2;   "/> </a>
  </div>
</template>
<script>
export default {
name: "Peopleitem",
      props:{
      img:String,
      name:String,
      grade:String,
      email:String,
      research:String,
      linkedin:String,
      },
}
</script>

<style scoped>

</style>
