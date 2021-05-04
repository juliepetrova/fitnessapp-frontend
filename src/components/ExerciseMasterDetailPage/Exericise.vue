<template>
  <div class="m-3 md:mx-24 md:my-12">
    <div class="flex justify-center">
      <!--      Col 1-->
      <div class=" flex-initial">
        <div class="flex flex-col  items-center">
          <div class="relative p-3 md:w-72 md:h-72 flex items-end rounded-xl shadow-md ml-2 lg:ml-4">
            <img
                src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://menspower.nl/wp-content/uploads/2018/02/crunch.gif"
                class="w-full h-full z-10">
          </div>
          <button
              class="w-5/6 text-white text-center text-lg bg-gradient-to-r from-yellow-400 to-red-700 rounded-full mt-2 p-2 focus:outline-none">
            Upload picture/video
          </button>
          <button v-on:click="editExercise" v-bind:class="{ hidden: !isHidden }"
              class="w-5/6 text-white text-center text-lg bg-gradient-to-r from-yellow-400 to-green-500 rounded-full mt-2 p-2 focus:outline-none">
            Edit exercise
          </button>
          <button v-on:click="saveExercise" v-bind:class="{ hidden: isHidden }"
                  class="w-5/6 text-white text-center text-lg bg-gradient-to-r from-green-400 to-green-500 rounded-full mt-2 p-2 focus:outline-none">
            Save exercise
          </button>
        </div>
      </div>

      <!--      Col 2-->
      <div class="w-3/4 flex-initial">
        <div class="flex flex-col">
          <div class="w-3/4 p-5 lg:p-10 shadow-md shadow lg:h-72 rounded-xl flex flex-col ">
            <h1 class="text-2xl text-red-800 font-bold pb-4" v-bind:class="{ hidden: !isHidden }">{{ exercise.name }}</h1>
            <input placeholder="Enter your name" v-model="exercise.name" v-bind:class="{ hidden: isHidden }"
                   class="m-2 w-1/3 px-3 border border-gray-300 rounded-xl text-gray-600 h-10 bg-white hover:border-gray-400 focus:outline-none appearance-none text-2xl text-red-800 font-bold">
            <div class="flex flex-row">
              <h3 class="text-lg p-2"> Area: </h3>

              <div class="relative inline-flex">
                <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 412 232">
                  <path
                      d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                      fill="#648299" fill-rule="nonzero"/>
                </svg>
                <select  v-model="selected"  :disabled="isHidden"
                    class="border border-gray-300 rounded-xl text-gray-600 h-10 pl-3 pr-8 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                  <option disabled value="">Choose an area</option>
                  <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
                    {{ option.text }}
                  </option>
                </select>
              </div>
            </div>

            <div class="flex flex-row my-3">
              <h1 class="text-lg p-2">Repetitions: </h1>
              <input placeholder="3" v-model="exercise.repetitions" :disabled="isHidden"
                     class="w-1/6 text-center border border-gray-300 rounded-xl text-gray-600 h-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
            </div>
            <div class="flex flex-row">
              <h1 class="text-lg p-2">Duration:</h1>
              <input placeholder="40" v-model="exercise.duration" :disabled="isHidden"
                     class="w-1/6 text-center border border-gray-300 rounded-xl text-gray-600 h-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <h1 class="text-lg p-2">sek</h1>
            </div>
          </div>
<!--          Second column-->
          <div class="w-3/4 p-5 lg:p-10 shadow-md shadow lg:h-64 rounded-xl flex flex-col ">
            <h1 class="text-xl text-red-600 font-bold pb-4">Additional information/ Steps:</h1>
            <div class="flex flex-row">
              <ol class="list-decimal px-3">
                <li>{{exercise.additional_info}}</li>
                <li>Lay down</li>
                <li>Do a crunch</li>
                <li>Lay back as slowly as possible</li>
              </ol>
            </div>
          </div>

          </div>
      </div>

    </div>
  </div>
</template>

<script>
import api from "@/store/backend-api";

export default {
  name: "Exercise",
  components: {},
  data() {
    return {
      exercise: {
        id: 0,
        name: '',
        repetitions: 0,
        category_id: 0,
        duration: 0,
        additional_info: '',
        suggested: 0,
        image: '',
        user_id: 1,
      },
      selected: '',
      options: [
        { text: 'Abdomen', value: '1' },
        { text: 'Arms', value: '2' },
        { text: 'Legs', value: '3' },
        { text: 'Butt', value: '4' }
      ],
      isHidden: true,
    };
  },
  methods: {
    editExercise(){
      this.isHidden = !this.isHidden
    },
    saveExercise() {

      // this.form.user_id = localStorage.getItem('user')
      // console.log(localStorage.getItem('user').id)
      this.exercise.category_id = this.selected
      let resp = JSON.stringify(this.exercise);
      api.updateExercise(resp, this.exercise.id)
          .then(res => {
            console.log(res.data)
            this.isHidden = true;
          })
          .catch(err => console.log(err));

    },

  },

  // Get exercise with id from the route
  created() {
    api.getExercise(this.$route.params.id)
        .then(res => {
          this.exercise = res.data
          this.selected = res.data.category_id
        })
        .catch(err => console.log(err));
  }
};
</script>

<style scoped></style>
