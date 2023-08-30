import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import Toast from "vue-toastification";
import App from "./App.vue";
import router from "./router";
import SsUI from "./components";
import "@/utils/fontawesome";
import "normalize.css";
import "@/assets/styles/common.less";
import "vue-toastification/dist/index.css";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(pinia);
app.use(Toast);
app.use(SsUI);
app.mount("#app");
