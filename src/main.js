import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// Add PrimeVue
import PrimeVue from "primevue/config";

// Add Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// Add PrimeFlex
import 'primeflex/primeflex.css';
import i18n from "@/i18n";


createApp(App)
    .use(i18n)
    .use(PrimeVue, { ripple: true })
    .mount('#app')
