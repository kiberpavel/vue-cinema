<template>
  <b-form-group class="mb-4 d-flex justify-content-start">
    <b-form-select v-model="selected" v-on:change="clickMe">
      <b-form-select-option :value="null" disabled>Выберите жанр</b-form-select-option>
      <b-form-select-option v-for="genre in genres" :key=genre.id v-bind:value="genre.id">
        {{ genre.title }}
      </b-form-select-option>
    </b-form-select>
    <span> Selected: {{ selected }}</span>
  </b-form-group>
</template>

<script>
import api from '../api/api';

export default {
  name: 'GenreList',
  props: ['value'],
  data() {
    return {
      genres: [],
      selected: this.value,
    };
  },
  created() {
    api.getGenre
      .then((response) => {
        this.genres = response.data.data;
      });
  },
  methods: {
    clickMe() {
      this.$emit('input', this.selected);
    },
  },
};
</script>

<style scoped>

</style>
