<template>
  <div class="mx-5 lg:mx-24 my-10">

    <div class="flex justify-center">

      <button v-on:click="isHidden = !isHidden" class="mx-3 bg-cover rounded-2xl w-full lg:w-1/2 p-3 md:p-8 flex justify-center focus:outline-none text-white text-2xl
                     opacity-90 shadow-sm hover:shadow-lg" style="background-image: url(https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)">
       Add new exercise
      </button>

      <button class="mx-3 bg-cover bg-center rounded-2xl w-full lg:w-1/2 p-3 md:p-8 flex justify-center focus:outline-none text-white text-2xl
                     opacity-90 shadow-sm hover:shadow-lg" style="background-image: url(https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)">
        Go to trainings
      </button>

    </div>

<!--    Add new exercise section-->
    <div class="flex justify-center" v-bind:class="{ hidden: isHidden }">
    <div class="rounded-xl shadow-md w-full lg:w-4/5 flex flex-row p-5 lg:px-10 border-2 border-gray-100 my-5 justify-between">


        <div class="flex flex-col justify-center items-center">
          <div class="md:w-28 md:h-28 rounded-xl ml-2 lg:ml-4">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Icons8_flat_add_image.svg/1024px-Icons8_flat_add_image.svg.png">

          </div>
        </div>

      <div class="">
        <div class="flex flex-row my-2">
          <h1 class="text-lg p-2">Name: </h1>
          <input placeholder="3" value="20" required v-model="formExercise.name"
                 class="text-center border border-gray-300 rounded-xl text-gray-600 h-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
        </div>

        <div class="flex flex-row my-2">
          <h3 class="text-lg p-2"> Area:</h3>

          <div class="relative inline-flex">
            <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 412 232">
              <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299" fill-rule="nonzero"/>
            </svg>
            <select  v-model="selected" required
                     class="border border-gray-300 rounded-xl text-gray-600 h-10 pl-3 pr-8 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <option disabled value="">Choose an area</option>
              <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
                {{ option.text }}
              </option>
            </select>
          </div>
        </div>


        <div class="flex flex-row my-2">
          <h1 class="text-lg p-2">Repetitions: </h1>
          <input placeholder="3" value="20" required v-model="formExercise.repetitions"
                 class="w-1/4 text-center border border-gray-300 rounded-xl text-gray-600 h-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
        </div>

        <div class="flex flex-row my-2">
          <h1 class="text-lg p-2">Duration:</h1>
          <input placeholder="40" value="23" required v-model="formExercise.duration"
                 class="w-1/4 text-center border border-gray-300 rounded-xl text-gray-600 h-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
          <h1 class="text-lg p-2">sek</h1>
        </div>
      </div>


      <div class="">
          <h1 class="text-lg p-2">Additional information:</h1>
          <textarea placeholder="ex. steps, calories" cols="30" rows="4" v-model="formExercise.additional_info"
                    class="h-40 text-center border border-gray-300 rounded-xl text-gray-600 h-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"></textarea>
      </div>

<!--      Close and Save-->
      <div class="mx-5 flex flex-col justify-center">
        <button class="m-3 bg-gradient-to-r from-red-300 via-pink-500 to-red-400 rounded-2xl  p-3 w-32 h-16 focus:outline-none text-white text-xl
                      shadow-sm hover:shadow-lg">
          Reset
        </button>
        <button v-on:click="saveExercise" class="m-3 bg-gradient-to-r from-green-400 via-green-300 to-green-400 rounded-2xl  p-3 w-32 h-16 focus:outline-none text-white text-xl
                      shadow-sm hover:shadow-lg">
          Save
        </button>
      </div>




    </div>
    </div>

    <div class="my-8">
        <h3 class="text-2xl mb-10">{{ name }}</h3>

      <div class="flex flex-wrap m-3">

        <exercise-edit-component v-for="exercise in exercises" :key="exercise.id" :exercise="exercise" :toAdd="false"></exercise-edit-component>

      </div>
    </div>

    <div class="my-8">
      <h3 class="text-2xl mb-10">Suggested: </h3>

      <div class="flex flex-wrap m-3">
<!--        <exercise-edit-component :exerciseName="name" :toAdd="true"></exercise-edit-component>-->


      </div>
    </div>

  </div>
</template>

<script>
import exerciseEditComponent from "@/components/MyExercises/exerciseEditComponent";
import api from "@/store/backend-api";


export default {
  name: "ExerciseCategory",
  components: {
    exerciseEditComponent
  },
  data() {
    return {
      name: 'Arm exercises',
      exercises: [],
      selected: '',
      options: [
        {text: 'Abdomen', value: '1'},
        {text: 'Arms', value: '2'},
        {text: 'Legs', value: '3'},
        {text: 'Butt', value: '4'}
      ],
      isHidden: true,
      formExercise: {
        name: '',
        repetitions: 0,
        category_id: 0,
        duration: 0,
        additional_info: '',
        suggested: 0,
        image: '',
        user_id: 1,
      }
    };
  },
  methods: {
    saveExercise() {

      // this.form.user_id = localStorage.getItem('user')
      console.log(localStorage.getItem('user'))
      let resp = JSON.stringify(this.formExercise);
      api.saveExercise(resp)
          .then(res => {
            console.log(res.data)
            this.isHidden = true;
          })
          .catch(err => console.log(err));

    },
  },
    created() {
      api.getAllExercises()
          .then(res => this.exercises = res.data)
          .catch(err => console.log(err));
      console.log(this.exercises)
    }

}
</script>

<style scoped>


</style>
