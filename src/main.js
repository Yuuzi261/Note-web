import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import Main from './Main.vue';
// import courses from './pages/courses/courses.vue';
import courses from './components/list/courses.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {path: '/', component: App},
  {path: '/courses', component: courses},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp(Main);

app.use(router);

app.mount('#app');