<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{ stock.name }} <small>(Preço: {{ stock.price | currency }})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field :error="insufficientFunds || !Number.isInteger(quantity)" label="Quantidade" type="number" v-model.number="quantity"/>
        <v-btn class="green darken-3 white--text" @click="buyStock"
               :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)">
          {{ insufficientFunds ? 'Insuficiente' : 'Comprar' }}
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import {mapActions} from "vuex";
import {mapGetters} from "vuex";

export default {
  name: "Stock",
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapActions({
      buyStockAction: 'buyStock'
    }),
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.buyStockAction(order);
      this.quantity = 0;
    }
  },
  computed: {
    ...mapGetters([
      'funds'
    ]),
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  }
}
</script>

<style scoped>

</style>