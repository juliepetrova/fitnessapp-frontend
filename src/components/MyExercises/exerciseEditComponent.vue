<template>
  <div class="relative p-3 md:w-56 md:h-56 sm:w-32 sm:h-32 flex items-end rounded-xl shadow-md mx-2 lg:mx-4">
    <button id="icon" class="z-30 absolute -right-3 -top-px bg-red-400 rounded-full text-center p-3 w-12 h-12
    text-white focus:outline-none transform hover:scale-110 motion-reduce:transform-none" v-bind:class="{'bg-green-600': toAdd}">
      <i v-if="!toAdd" class="fas fa-minus"></i>
      <i v-if="toAdd" class="fas fa-plus"></i>
    </button>
    <router-link :to="'/exercise/' + exercise.id"><img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://menspower.nl/wp-content/uploads/2018/02/crunch.gif" class="w-full h-full z-10"></router-link>
    <h4 class="absolute text-2xl mb-2 mx-3 z-20">{{ exerciseName }}</h4>
  </div>
</template>

<script>
export default {
  name: "exerciseEditComponent",
  props: {
    exerciseName: {
      type: String
    },
    toAdd: {
      type: Boolean
    }

  },
  data() {
    return {
      exercise: {
        id:1
      }
    };
  },
  methods: {},
};
</script>

<style scoped></style>
