import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import PrimeVue from "primevue/config";
import VueFeather from "vue-feather";
import "@/assets/main.css";
import "primevue/resources/primevue.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";
import liffPlugin from "./plugins/liff";

const app = createApp(App)
  .use(router)
  .use(PrimeVue)
  .use(createPinia())
  .use(VueQueryPlugin)
  .use(liffPlugin, { liffId: "2004761239-0A5Lkda7" })
  .component(VueFeather.name, VueFeather);

app.mount("#app");
