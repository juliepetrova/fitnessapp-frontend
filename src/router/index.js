import Vue from "vue";
import VueRouter from "vue-router";
import MyExercises from "@/components/MyExercises/MyExercises";
import ExerciseCategory from "@/components/ExerciseCategory/ExerciseCategory";
import ExerciseMasterDetailPage from "@/components/ExerciseMasterDetailPage/Exericise";
import LogInPage from "@/components/layout/logInComponent";

Vue.use(VueRouter);

const routes = [
  {
    path: "/exercises",
    component: MyExercises
  },
  {
    path: "/exercises/:name",
    component: ExerciseCategory
  },
  {
    path: "/exercise/:id",
    component: ExerciseMasterDetailPage
  },
  {
    path: "/logIn",
    component: LogInPage
  }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

export default router;
