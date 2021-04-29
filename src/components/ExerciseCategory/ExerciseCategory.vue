<template>
  <div class="mx-5 lg:mx-24 my-10">

    <div class="my-8">
        <h3 class="text-2xl mb-10">{{ name }}</h3>

      <div class="flex flex-wrap m-3">

        <exercise-edit-component :exerciseName="exerciseName" :toAdd="false"></exercise-edit-component>

      </div>
    </div>

    <div class="my-8">
      <h3 class="text-2xl mb-10">Suggested: </h3>

      <div class="flex flex-wrap m-3">
        <exercise-edit-component :exerciseName="exerciseName" :toAdd="true"></exercise-edit-component>


      </div>
    </div>

  </div>
</template>

<script>
import exerciseEditComponent from "@/components/MyExercises/exerciseEditComponent";

export default {
  name: "ExerciseCategory",
  components: {
    exerciseEditComponent
  },
  data() {
    return {
      name: 'Arm exercises',
      exerciseName: "Crunch",
    };
  },
  methods: {},
};
</script>

<style scoped>


</style>
