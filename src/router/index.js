import Vue from "vue";
import Router from "vue-router";
import Buefy from "buefy";
import Homepage from "@/components/home";
import CallForSpeakers from "@/components/call_speakers";

import "buefy/dist/buefy.css";
import "../assets/stylesheet/style.css"

Vue.use(Router);
Vue.use(Buefy);

const myRouter = new Router({
  mode:'history',
  routes: [
    {
      path: "/",
      name: "Homepage",
      component: Homepage
    },
    {
      path: "/call_for_speakers",
      name: "CallForSpeakers",
      component: CallForSpeakers
    },
    { path: "*",name:'error_page', component: Homepage }
  ]
});

export default  myRouter
