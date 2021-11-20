<template>
  <b-container fluid>
    <b-row class="d-flex justify-content-center">
      <b-col lg="6" class="bg-primary rounded-3">
        <h2 class="text-white">Создание фильма</h2>
        <b-row>
          <b-form :model="form" class="d-flex justify-content-center">
            <b-col lg="8">
              <b-form-group class="mb-4">
                <b-input-group>
                  <template #prepend>
                    <b-input-group-text class="bg-primary text-light">Film</b-input-group-text>
                  </template>
                  <b-form-input v-model="form.name"
                                placeholder="Введите название фильма" required></b-form-input>
                </b-input-group>
              </b-form-group>
              <b-form-group class="mb-4">
                <b-input-group>
                  <template #prepend>
                    <b-input-group-text class="bg-primary text-light">Year</b-input-group-text>
                  </template>
                  <b-form-input v-model="form.year_of_issue"
                                placeholder="Введите год выпуска фильма" required></b-form-input>
                </b-input-group>
              </b-form-group>
              <b-form-group class="mb-4">
                <b-input-group>
                  <template #prepend>
                    <b-input-group-text class="bg-primary text-light">Limit</b-input-group-text>
                  </template>
                  <b-form-input v-model="form.min_age"
                                placeholder="Введите ограние по возврасту" required></b-form-input>
                </b-input-group>
              </b-form-group>
              <b-form-group class="mb-4">
                <b-input-group>
                  <template #prepend>
                    <b-input-group-text class="bg-primary text-light">Url</b-input-group-text>
                  </template>
                  <b-form-input v-model="form.trailer_url"
                                placeholder="Заполните url трейлера" required></b-form-input>
                </b-input-group>
              </b-form-group>
              <b-form-group class="mb-4">
                <b-input-group>
                  <template #prepend>
                    <b-input-group-text class="bg-primary text-light">Rating</b-input-group-text>
                  </template>
                  <b-form-input v-model="form.rating"
                                placeholder="Введите рейтинг фильма" required></b-form-input>
                </b-input-group>
              </b-form-group>
              <b-form-group class="mb-4">
                <b-input-group>
                  <b-form-textarea v-model="form.about"
                                   placeholder="Введите информацию о фильме" required>
                  </b-form-textarea>
                </b-input-group>
              </b-form-group>
              <GenreList v-model="form.genre_id"></GenreList>
              <LeadList v-model="form.lead_id"></LeadList>
              <ProducerList v-model="form.producer_id"></ProducerList>
              <b-form-group class="mb-4 d-flex justify-content-start">
                <b-button type="button" variant="success" v-on:click="submitInputs">
                  Добавить
                </b-button>
              </b-form-group>
            </b-col>
          </b-form>
        </b-row>
      </b-col>
      <b-row class="d-flex justify-content-center">
        <b-col lg="6">
          <ul>
            <li v-for="(value,index) in problems" :key=index
                class="text-danger">
              {{ value[0] }}
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
import GenreList from './GenreList.vue';
import LeadList from './LeadList.vue';
import ProducerList from './ProducerList.vue';
import api from '../api/api';

export default {
  name: 'FilmCreate',
  components: {
    GenreList,
    LeadList,
    ProducerList,
  },
  computed: {
    ...mapGetters('user', ['isNotAutorized']),
  },
  data() {
    return {
      form: {
        name: '',
        year_of_issue: '',
        producer_id: null,
        min_age: '',
        genre_id: null,
        trailer_url: '',
        lead_id: null,
        rating: '',
        about: '',
      },
      problems: [],
    };
  },
  created() {
    if (this.isNotAutorized) {
      this.$router.push('/login');
    }
  },
  methods: {
    submitInputs() {
      api.createFilm(this.form)
        .then(() => {
          this.clearForm();
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.problems = error.response.data;
          }
        });
    },
    clearForm() {
      this.form.name = '';
      this.form.year_of_issue = '';
      this.form.producer_id = null;
      this.form.min_age = '';
      this.form.genre_id = null;
      this.form.trailer_url = '';
      this.form.lead_id = null;
      this.form.rating = '';
      this.form.about = '';
      this.problems = [];
    },
  },
};
</script>

<style scoped>

</style>
