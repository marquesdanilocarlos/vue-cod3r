<template>
  <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
  </v-layout>
</template>

<script>
import Stock from "@/components/stocks/Stock.vue";
import {mapGetters} from "vuex";

export default {
  name: "Stocks",
  components: {Stock},
  computed: {
    ...mapGetters({
      stocks: 'stocks'
    })
  },

}
</script>

<style scoped>

</style>