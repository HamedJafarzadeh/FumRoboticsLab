<template>
<div>
  <div v-show="!$store.state.isIran" class="col-12 justify-content-center text-center mx-auto my-auto" >
    <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${this.youtubeID}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div v-show="$store.state.isIran" :id="`${aparatID}`" class="col-12 justify-content-center text-center mx-auto my-auto" ><script type="text/JavaScript" :src="`https://www.aparat.com/embed/${aparatID}?data[rnddiv]=${aparatID}&data[responsive]=yes`"></script></div>
</div>
</template>

<script>
export default {
  name: "socialVideos",
  props:{
    youtubeID: String,
    aparatID:String,
  }
}

</script>

<style scoped>

</style>
