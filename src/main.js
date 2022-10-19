import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import Main from './Main.vue';
import install from './components/list/install.vue';
import spiceup from './components/list/spiceup.vue';
import courses from './components/list/courses.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import VueScrollTo from 'vue-scrollto'
import './assets/style/font.css';

const routes = [
  {path: '/', component: App},
  {path: '/install', component: install},
  {path: '/spiceup', component: spiceup},
  {path: '/courses', component: courses},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(Main);

app.use(router);
app.use(VueScrollTo)

app.mount('#app');