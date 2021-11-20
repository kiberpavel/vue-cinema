<template>
  <b-form-group class="mb-4 d-flex justify-content-start">
    <b-form-select v-model="selected" v-on:change="clickMe">
      <b-form-select-option :value="null" disabled>Выберите продюсера</b-form-select-option>
      <b-form-select-option v-for="producer in producers"
                            :key=producer.id v-bind:value="producer.id">
        {{ producer.first_name + " " + producer.second_name }}
      </b-form-select-option>
    </b-form-select>
    <span> Selected: {{ selected }}</span>
  </b-form-group>
</template>

<script>
import api from '../api/api';

export default {
  name: 'ProducerList',
  props: ['value'],
  data() {
    return {
      producers: [],
      selected: null,
    };
  },
  created() {
    api.getProducer
      .then((response) => {
        this.producers = response.data.data;
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
