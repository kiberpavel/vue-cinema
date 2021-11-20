import VueRouter from 'vue-router';

import FilmCreate from '../components/FilmCreate.vue';
import FilmList from '../components/FilmList.vue';
import RegisterUser from '../components/RegisterUser.vue';
import LoginUser from '../components/LoginUser.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/film-add',
      name: 'film-add',
      component: FilmCreate,
    },
    {
      path: '/films',
      name: 'films',
      component: FilmList,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginUser,
    },
  ],
});
