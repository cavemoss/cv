import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import "./style.css";
import App from "./App.vue";
import { i18n } from "./i18n";
import { CvPreset } from "./theme";

const app = createApp(App);

app.use(i18n);
app.use(PrimeVue, {
  theme: {
    preset: CvPreset,
    options: {
      darkModeSelector: ".app-dark",
      cssLayer: {
        name: "primevue",
        order: "theme, base, primevue",
      },
    },
  },
});

app.mount("#app");
