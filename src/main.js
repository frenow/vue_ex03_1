import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import User from "./components/User";
import Userdetail from "./components/Userdetail";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    {
      path: "/user/",
      component: User
    },
    {
      path: "/user/:id",
      component: Userdetail
    }
  ]
});

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
