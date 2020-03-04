import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import About from "../views/About.vue";
// @ts-ignore
import Contact from "../views/Contact.vue";
// @ts-ignore
import Clinical from "../views/ClinicalSupervision.vue";
// @ts-ignore
import GroupTherapy from "../views/GroupTherapy.vue";
// @ts-ignore
import Parents from "../views/ParentEducation.vue";
// @ts-ignore
import Training from "../views/TrainingConsultation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/clinical",
    name: "ClinicalSupervision",
    component: Clinical
  },
  {
    path: "/group-therapy",
    name: "GroupTherapy",
    component: GroupTherapy
  },
  {
    path: "/parents",
    name: "ParentEducation",
    component: Parents
  },
  {
    path: "/training",
    name: "TrainingConsultation",
    component: Training
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
