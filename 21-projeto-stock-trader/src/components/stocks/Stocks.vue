<template>
  <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" />
  </v-layout>
</template>

<script>
import Stock from "@/components/stocks/Stock.vue";

export default {
  name: "Stocks",
  components: {Stock},
  data() {
    return {
      stocks: [
        {id: 1, name: 'BMW', price: 110},
        {id: 2, name: 'Google', price: 200},
        {id: 3, name: 'Apple', price: 320},
        {id: 4, name: 'Twitter', price: 83},
      ]
    }
  }
}
</script>

<style scoped>

</style>