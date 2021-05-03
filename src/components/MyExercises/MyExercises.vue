<template>
  <div class="mx-5 lg:mx-24 my-10">

    <section-exercises :name="name"></section-exercises>
    <section-exercises :name="secondName"></section-exercises>


  </div>
</template>

<script>
import sectionExercises from "@/components/MyExercises/sectionExercises";
// import api from "@/store/backend-api";


export default {
  name: "MyExercises",
  components: {
    sectionExercises
  },
  data() {
    return {
      exercises: [],
      name: 'Arm exercises',
      secondName: 'Abs exercises'
    };
  },
  methods: {},

};
</script>

<style scoped>

  /*.exercise{*/
  /*  background-image: url("https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://menspower.nl/wp-content/uploads/2018/02/crunch.gif");*/
  /*  background-position: center;*/
  /*  background-repeat: no-repeat;*/
  /*  background-size: contain;*/
  /*}*/

</style>
