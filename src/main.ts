/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(pinia);

registerPlugins(app);
app.mount("#app");
