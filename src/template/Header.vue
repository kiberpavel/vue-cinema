<template>
  <div class="mt-0">
    <b-nav v-if="isNotAutorized">
      <a class="navbar-brand" href="#">Кинотеатр</a>
      <b-nav-item>
        <router-link :to="{ name: 'login' }" class="text-decoration-none">Авторизация</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link :to="{ name: 'register' }" class="text-decoration-none">
          Регистрация
        </router-link>
      </b-nav-item>
    </b-nav>
  <b-nav v-else>
    <a class="navbar-brand" href="#">Кинотеатр</a>
    <b-nav-item>
      <router-link :to="{ name: 'film-add' }" class="text-decoration-none">Создать</router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link :to="{ name: 'films' }" class="text-decoration-none">Просмотреть</router-link>
    </b-nav-item>
    <b-nav-item @click.prevent="logoutHeaderAction()">Выход</b-nav-item>
  </b-nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters('user', ['isNotAutorized']),
  },
  methods: {
    ...mapActions('user', ['LOGOUT']),
    logoutHeaderAction() {
      this.LOGOUT();
      this.$router.push('/login');
    },
    login() {
      this.$router.push('/login');
    },
    register() {
      this.$router.push('/register');
    },
    getFilms() {
      this.$router.push('/films');
    },
    createFilm() {
      this.$router.push('/film-add');
    },
  },
};
</script>

<style scoped>

</style>
