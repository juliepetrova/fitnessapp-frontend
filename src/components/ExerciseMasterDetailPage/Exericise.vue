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
        </div>
      </div>

      <!--      Col 2-->
      <div class="w-3/4 flex-initial">
        <div class="flex flex-col">
          <div class="w-3/4 p-5 lg:p-10 shadow-md shadow lg:h-72 rounded-xl flex flex-col ">
            <h1 class="text-2xl text-red-800 font-bold pb-4">{{ exercise.name }}</h1>
            <div class="flex flex-row">
              <h3 class="text-lg p-2"> Area: </h3>

              <div class="relative inline-flex">
                <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 412 232">
                  <path
                      d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                      fill="#648299" fill-rule="nonzero"/>
                </svg>
                <select
                    class="border border-gray-300 rounded-xl text-gray-600 h-10 pl-3 pr-8 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                  <option>Choose an area</option>
                  <option>Abdomen</option>
                  <option>Arms</option>
                  <option>Legs</option>
                  <option>Butt</option>
                </select>
              </div>
            </div>

            <div class="flex flex-row my-3">
              <h1 class="text-lg p-2">Repetitions: </h1>
              <input placeholder="3" value="3"
                     class="w-1/6 text-center border border-gray-300 rounded-xl text-gray-600 h-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
            </div>
            <div class="flex flex-row">
              <h1 class="text-lg p-2">Duration:</h1>
              <input placeholder="40" value="40"
                     class="w-1/6 text-center border border-gray-300 rounded-xl text-gray-600 h-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <h1 class="text-lg p-2">sek</h1>
            </div>
          </div>
<!--          Second column-->
          <div class="w-3/4 p-5 lg:p-10 shadow-md shadow lg:h-64 rounded-xl flex flex-col ">
            <h1 class="text-xl text-red-600 font-bold pb-4">Additional information/ Steps:</h1>
            <div class="flex flex-row">
              <ol class="list-decimal px-3">
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
export default {
  name: "Exercise",
  components: {},
  data() {
    return {
      exercise: {
        name: "Crunch",
        img: "",
        repetitions: 2,
        duration: 0.30,
        area: 'Abdomen'
      }
    };
  },
  methods: {},
};
</script>

<style scoped></style>
