import Vue from "vue";
import Router from "vue-router";
import Intro from "./views/Intro.vue";
import TheEnd from "./views/TheEnd.vue";
import Question from "./components/Question.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "intro",
      component: Intro
    },
    {
      path: "/fim",
      name: "the-end",
      component: TheEnd
    },
    {
      path: "/quest/:index",
      name: "question",
      component: Question
    }
  ]
});
