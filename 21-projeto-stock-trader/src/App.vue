<template>
  <v-app>
    <Header></Header>
    <v-content>
      <v-container>
        <router-view>

        </router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import {mapActions} from "vuex";

export default {
  components: {Header},
  created() {
    this.$store.dispatch('initStocks');
    //this.initStocks();
  },
  methods: {
    ...mapActions([
      'initStocks'
    ])
  }
}
</script>

<style>

</style>

