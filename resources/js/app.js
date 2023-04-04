import "./bootstrap";
import "../css/app.css";

import App from "./App.vue";
import { createApp } from "vue";
import { store } from "./store/store.js";
import routes from "./routes.js";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

createApp(App).use(store).use(router).mount("#app");
