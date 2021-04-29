<template>
  <div class="relative p-3 md:w-56 md:h-56 sm:w-32 sm:h-32 flex items-end rounded-xl shadow-md mx-2 lg:mx-4">
    <img src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://menspower.nl/wp-content/uploads/2018/02/crunch.gif" class="w-full h-full z-10">
    <h4 class="absolute text-2xl mb-2 mx-3 z-20">{{ exerciseName }}</h4>
  </div>
</template>

<script>
export default {
  name: "exerciseComponent",
  props: {
    exerciseName: {
      type: String
    }
    },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
