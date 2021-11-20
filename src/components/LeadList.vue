<template>
  <b-form-group class="mb-4 d-flex justify-content-start">
    <b-form-select v-model="selected" v-on:change="clickMe">
      <b-form-select-option value="null" disabled>Выберите главного героя</b-form-select-option>
      <b-form-select-option v-for="lead in leads" :key=lead.id v-bind:value="lead.id">
        {{ lead.first_name + " " + lead.second_name }}
      </b-form-select-option>
    </b-form-select>
    <span> Selected: {{ selected }}</span>
  </b-form-group>
</template>

<script>
import api from '../api/api';

export default {
  name: 'LeadList',
  props: ['value'],
  data() {
    return {
      leads: [],
      selected: null,
    };
  },
  created() {
    api.getLead
      .then((response) => {
        this.leads = response.data.data;
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
