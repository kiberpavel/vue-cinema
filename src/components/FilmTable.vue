<template>
  <div class="overflow-auto">
    <b-container fluid>
      <b-row class="d-flex justify-content-center">
        <b-col lg="10">
          <div class="d-flex justify-content-lg-between bg-primary rounded text-white
          text-uppercase">
            <b-col class="mt-3">
              <p>Id</p>
            </b-col>
            <b-col class="mt-3">
              <p>Название фильма</p>
            </b-col>
            <b-col class="mt-3">
              <p>Год выпуска</p>
            </b-col>
            <b-col class="mt-3">
              <p>Рейтинг</p>
            </b-col>
            <b-col class="mt-3">
              <p>Минимальный возвраст</p>
            </b-col>
            <b-col class="mt-3">
              <p>Id продюсера</p>
            </b-col>
            <b-col class="mt-3">
              <p>Ред.</p>
            </b-col>
            <b-col class="mt-3">
              <p>Удалить</p>
            </b-col>
          </div>
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-center">
        <b-col lg="10">
          <div class="d-flex justify-content-lg-around border rounded border-secondary m-2"
               v-for="(film, index) in this.items" :key="index">
            <b-col lg="1,5">
              <p class="mt-3">{{ film.id }}</p>
            </b-col>
            <b-col lg="1,5" class="mt-3">
              <p>{{ film.name }}</p>
            </b-col>
            <b-col lg="1,5" class="mt-3">
              <p>{{ film.year_of_issue }}</p>
            </b-col>
            <b-col lg="1,5" class="mt-3">
              <p>{{ film.rating }}</p>
            </b-col>
            <b-col lg="1,5" class="mt-3">
              <p>{{ film.min_age }}</p>
            </b-col>
            <b-col lg="1,5" class="mt-3">
              <p>{{ film.producer_id }}</p>
            </b-col>
            <b-col lg="1,5" class="mt-3">
              <p>Ред.</p>
            </b-col>
            <b-col lg="1,5" class="mt-3">
              <p>Удалить</p>
            </b-col>
          </div>
        </b-col>
       <Pagination
       :pageNumber="pageNumber"
       @nextPage="nextPage()"
       @previousPage="previousPage()"
       :lastPage="lastPage"
       >
       </Pagination>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import api from '../api/api';
import Pagination from './common/Pagination.vue';

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      pageNumber: 1,
      perPage: '',
      pagination: '',
      currentPage: '1',
      lastPage: 1,
      films: [],
      items: [],
    };
  },
  methods: {
    nextPage() {
      this.pageNumber += 1;
      this.getFilms();
    },
    previousPage() {
      this.pageNumber -= 1;
      this.getFilms();
    },
    getFilms() {
      api.getFilms(this.pageNumber)
        .then((response) => {
          this.items = response.data.data;
          this.perPage = response.data.meta.pagination.perPage;
          this.currentPage = response.data.meta.pagination.currentPage;
          this.lastPage = response.data.meta.pagination.lastPage;
        });
    },
  },
  created() {
    this.getFilms();
  },
};
</script>
