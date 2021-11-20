<template>
  <b-row class="d-flex justify-content-center">
    <b-col lg="3">
      <b-form>
        <p class="h4 text-center mb-4">Регистрация</p>
        <label for="defaultFormRegisterNameEx"
               class="text-secondary d-flex justify-content-start mb-2">
          Твое имя</label>
        <input type="text" id="defaultFormRegisterNameEx" class="form-control" v-model="name"/>
        <br/>
        <label for="defaultFormRegisterEmailEx" class="text-secondary d-flex justify-content-start
     mb-2">Твой email</label>
        <input type="email" id="defaultFormRegisterEmailEx" class="form-control" v-model="email"/>
        <br/>
        <label for="defaultFormRegisterPasswordEx" class="text-secondary d-flex
        justify-content-start mb-2">Твой пароль</label>
        <input type="password" id="defaultFormRegisterPasswordEx" class="form-control"
               v-model="password"/>
        <div class="text-center mt-4">
          <b-button class="btn btn-danger" size="lg" type="submit" @click.prevent="register()">
            Регистрация
          </b-button>
        </div>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RegisterForm',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions('user', ['REGISTER']),
    register() {
      this.REGISTER({
        name: this.name,
        email: this.email,
        password: this.password,
      })
        .then(() => {
          this.$router.push('/login');
        });
    },
  },
};
</script>

<style scoped>

</style>
