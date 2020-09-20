<template>
<div>
  <h1>List of Products</h1>
  
  <v-card color=#fefefe v-for="product in products" :key="product.product-name">
    <v-layout row wrap :class="`pa-3 project ${product.qr-code}`">
      <v-flex xs2 sm2 md2>
        <div class="caption grey--text" align="center">Product Name</div>
        <div align="center">{{product.product-name}}</div>
      </v-flex>
      <v-flex xs2 sm2 md2>
        <div class="caption grey--text">Price per Unit</div>
        <div >{{product.price}}</div>
      </v-flex>
      <v-flex xs2 sm2 md2>
        <div class="caption grey--text">Quantity</div>
        <div >{{product.quantity}}</div>
      </v-flex>
      <v-flex xs2 sm2 md2>
        <div class="caption grey--text">QR Code</div>
        <div >{{product.qr-code}}</div>
      </v-flex>
	<v-flex xs2 sm2 md2>
      <div class="caption grey--text">Actions</div>
      <div >
      <v-btn align="left" flat color=#3b5998 class="white--text">
          <v-icon>edit</v-icon>
        </v-btn>
        <v-btn align="left" flat color=#3b5998 class="white--text">
          <v-icon>delete</v-icon>
        </v-btn>
    </div>`
      </v-flex>
    </v-layout>
  </v-card>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Products",
  data() {
	return{
		products: []
	}
  },
  created(){
	axios.post('https://run.mocky.io/v3/317f1f47-1a3b-4266-829b-429f0a5bdaa4')
	.then(response => {
		this.products = response.data
	})
	.catch(error => {
		console.log(error);
	});
  }
}
</script>

<style scoped>

</style>