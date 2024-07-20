import "./assets/main.css";

import { createApp } from "vue";

import App from "./App.vue";
import { createPinia } from "pinia";
import axiosInit from "./api";
import Cookies from "js-cookie";
import router from "./router";

const app = createApp(App);

axiosInit.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${Cookies.get("userdata")}`;
    return config;
  },
  (error) => Promise.reject(error)
);

app.config.globalProperties.$axios = { ...axiosInit };

app.use(router);
app.use(createPinia());
app.mount("#app");
