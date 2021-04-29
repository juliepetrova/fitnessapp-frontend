<template>
  <div class="my-8">
    <div class="flex justify-between">
    <h3 class="text-2xl mb-10">{{ name }}</h3>
      <router-link :to="'/exercises/' + name"><h3 class="text-xl mb-10">See more <i class="fas fa-arrow-right"></i></h3></router-link>
    </div>
    <div class="flex flex-wrap m-3">
      <exercise-component :exerciseName="exerciseName"></exercise-component>
      <exercise-component :exerciseName="exerciseName"></exercise-component>

    </div>
  </div>
</template>

<script>
import exerciseComponent from './exerciseComponent'
export default {
  name: "",
  props: {
    name: {
      type: String
    },
  },
  components: {
    exerciseComponent
  },
  data() {
    return {
      exerciseName: 'Crunch',
    };
  },
  methods: {},
};
</script>

<style scoped></style>
