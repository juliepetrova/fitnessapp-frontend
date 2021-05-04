<template>
  <div class="w-full h-screen">
  <div class="mx-5 lg:mx-20 my-10 ">
    <div class="flex justify-between">
      <h3 class="text-2xl mb-10">Categories:</h3>
<!--      <router-link :to="'/exercises/' + name"><h3 class="text-xl mb-10 underline text-gray-400">View all</h3></router-link>-->
      <div
          :class="open ? 'opacity-25':'opacity-100'"

      >
        <button @click="tog()" class="text-black text-2xl p-2 font-bold">&#9776;</button>
      </div>
    </div>
    <div class="mx-6">
    <section-exercises :name="name"></section-exercises>
    <section-exercises :name="secondName"></section-exercises>
    </div>


<!--    Categories pop-up-->
    <nav
        :class="open ? 'navbar-open' : 'navbar-close'"
        class="navbar w-64 absolute right-0 overflow-hidden bg-gray-300 top-0 h-screen"
    >
      <div class="flex pr-2 justify-end">
        <button @click="tog()" class="p-2 text-white text-xl font-bold">&#9747;</button>
      </div>
      <h1 class="text-xl p-5 text-gray-700">All categories</h1>
      <div class="text-white">
          <button class="w-full py-3 px-5 text-left" v-bind:class="{ hidden: addCategory }" v-on:click="addCategory = true">
            <span class="mr-5">&#10011;</span>
            <span>Add new category</span>
          </button>

        <div class="py-2 px-5 text-left border flex justify-between" v-bind:class="{ hidden: !addCategory }">

          <input placeholder="Category name" v-model="categoryName" class="w-2/3 border-b border-gray-400 bg-gray-300 focus:outline-none" >
          <button class="p-2 focus:outline-none hover:bg-gray-200 text-gray-400" v-on:click="saveCategory">&#10011;</button>
        </div>

        <button v-for="category in categories" :key="category.id" class="w-full flex justify-between py-2 px-5 border hover:bg-gray-400">
          <span class="py-2">{{category.name}}</span>
          <button class="p-2 focus:outline-none hover:bg-gray-200 " v-on:click="deleteCategory(category.id)">&#9747;</button>
        </button>


      </div>
    </nav>
<!--    End Categories pop-up-->

  </div>
  </div>
</template>

<script>
import sectionExercises from "@/components/MyExercises/sectionExercises";
import api from "@/store/backend-api";


export default {
  name: "MyExercises",
  components: {
    sectionExercises,

  },
  data() {
    return {
      exercises: [],
      name: 'Arm exercises',
      secondName: 'Abs exercises',
      open: true,
      categories: [],
      addCategory: false,
      categoryName: ''
    };
  },
  methods: {
    tog() {
      this.open = !this.open;
    },
    saveCategory() {
      this.addCategory = false

      let category = {
        name: this.categoryName
      }
      let resp = JSON.stringify(category);
      api.saveCategory(resp)
      .then(res => this.categories.push(res.data) )
      .catch(err => console.log(err));
    },
    deleteCategory(id){
      api.deleteCategory(id)
          .then(() => {
            let i = this.categories.map(item => item.id).indexOf(id)
            this.categories.splice(i, 1)})
          .catch(err => console.log(err));
    }
  },
  created() {
    api.getCategories()
    .then(res => {
        console.log(res.data)
        this.categories = res.data;
      })
          .catch(err => console.log(err));

  }



};
</script>

<style scoped>

.navbar {
  transition: all 330ms ease-out;
}

.navbar-open {
  display: none;
  transform: translateX(100%);
}
.navbar-close {
  transform: translateX(0%);
}

</style>
