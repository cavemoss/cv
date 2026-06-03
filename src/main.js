import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import './styles/base.css';

import App from './App.vue';
import { CvPreset } from './theme/preset.js';
import { i18n } from './i18n/index.js';

const app = createApp(App);

app.use(i18n);
app.use(PrimeVue, {
  theme: {
    preset: CvPreset,
    options: {
      prefix: 'p',
      darkModeSelector: '.app-dark',
      cssLayer: false
    }
  }
});

app.mount('#app');
