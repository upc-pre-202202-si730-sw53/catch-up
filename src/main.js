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

// Add UI Components
import Card from "primevue/card";
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";
import Sidebar from "primevue/sidebar";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Toolbar from "primevue/toolbar";


createApp(App)
    .use(i18n)
    .use(PrimeVue, { ripple: true })
    .component('pv-card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .mount('#app');
