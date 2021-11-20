<template>
  <b-col lg="3">
    <div class="d-inline p-1">
      <button v-if="pageNumber > 1" v-on:click="previousPage"
              class="btn btn-primary btn-sm shadow-none">
        Предыдущая
      </button>
      <button v-else class="btn btn-primary btn-sm shadow-none" disabled>
        Предыдущая
      </button>
    </div>
    <div v-for="(number, index) in this.lastPage" :key="index" class="d-inline p-1">
      <button v-if="pageNumber === number" class="bg-primary text-white rounded" disabled>
        {{ number }}
      </button>
      <button v-else disabled class="bg-white text-black rounded">{{ number }}</button>
    </div>
    <div class="d-inline p-1">
      <button v-if="pageNumber < lastPage" v-on:click="nextPage"
              class="btn btn-primary btn-sm shadow-none">
        Следущая
      </button>
      <button v-else class="btn btn-primary btn-sm shadow-none" disabled>
        Следущая
      </button>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pageNumber: Number,
    lastPage: Number,
  },
  methods: {
    nextPage() {
      this.$emit('nextPage');
    },
    previousPage() {
      this.$emit('previousPage');
    },
  },
};
</script>

<style scoped>

</style>
