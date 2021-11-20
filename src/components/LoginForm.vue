<template>
  <b-row class="d-flex justify-content-center">
    <b-col lg="3">
      <b-form>
        <p class="h4 text-center mb-4">Авторизация</p>
        <label for="defaultFormLoginEmailEx"
               class="text-secondary d-flex justify-content-start mb-2">
          Твой email</label>
        <input type="email" id="defaultFormLoginEmailEx" class="form-control" v-model="user.email"/>
        <br/>
        <label for="defaultFormLoginPasswordEx" class="text-secondary d-flex justify-content-start
     mb-2">Твой пароль</label>
        <input type="password" id="defaultFormLoginPasswordEx" class="form-control"
               v-model="user.password"/>
        <div class="text-center mt-4">
          <p><a href="/register">Регистрация</a></p>
          <b-button class="btn btn-success" size="lg" type="submit" @click.prevent="auth()">
            Авторизация
          </b-button>
        </div>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LoginForm',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      error: false,
    };
  },
  methods: {
    ...mapActions('user', ['LOGIN']),
    auth() {
      this.LOGIN({
        email: this.user.email,
        password: this.user.password,
      }, null)
        .then(() => {
          this.$router.push('/films');
        });
    },
  },
};
</script>
<style scoped>

</style>
