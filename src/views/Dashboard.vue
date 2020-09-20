<template>

  <vue-tabs @tab-change="handleTabChange">

    <h1>List of Requests</h1>
      <v-tabs background-color="white" color="blue accent-4" center>
        <v-tab>All Requests</v-tab>
        <v-tab>Accepted</v-tab>
        <v-tab>Rejected</v-tab>
        <v-tab-item v-for="n in 3" :key="n">
          <v-container fluid>

            <v-card-text v-if="n==1">
              <v-card color=#fefefe outline="true" raised="true" v-for="req in requests" :key="req.product_name">
                <div v-if="req.status=='pending'" >
                <v-layout row wrap :class="`pa-3 project ${req.product_name}`">
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text" align="center">Product Name</div>
                    <div align="center">{{req.product_name}}</div>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text">QR Code</div>
                    <div >{{req.qr_code}}</div>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text">Price</div>
                    <div >{{req.price}}</div>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text">Quantity</div>
                    <div >{{req.quantity}}</div>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text">Request Type</div>
                    <div >{{req.request_type}}</div>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text">Status</div>
                    <div >{{req.status}}</div>
                  </v-flex>
                </v-layout>
                </div>
              </v-card>
            </v-card-text>

            <v-card-text v-if="n==2"><v-card color=#fefefe outline="true" raised="true" v-for="req in requests" :key="req.product_name">
              <div v-if="req.status=='accepted'" >
                <v-layout row wrap :class="`pa-3 project ${req.qr_code}`">
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text" align="center">Product Name</div>
                    <div align="center">{{req.product_name}}</div>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text">QR Code</div>
                    <div >{{req.qr_code}}</div>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text">Price</div>
                    <div >{{req.price}}</div>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text">Quantity</div>
                    <div >{{req.quantity}}</div>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text">Request Type</div>
                    <div >{{req.request_type}}</div>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text">Status</div>
                    <div >{{req.status}}</div>
                  </v-flex>
                </v-layout>
              </div>
            </v-card>
            </v-card-text>

            <v-card-text v-if="n==3"><v-card color=#fefefe outline="true" raised="true" v-for="req in requests" :key="req.product_name">
              <div v-if="req.status=='rejected'" >
                <v-layout row wrap :class="`pa-3 project ${req.qr_code}`">
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text" align="center">Product Name</div>
                    <div align="center">{{req.product_name}}</div>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text">QR Code</div>
                    <div >{{req.qr_code}}</div>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text">Price</div>
                    <div >{{req.price}}</div>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text">Quantity</div>
                    <div >{{req.quantity}}</div>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text">Request Type</div>
                    <div >{{req.request_type}}</div>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <div class="caption grey--text">Status</div>
                    <div >{{req.status}}</div>
                  </v-flex>
                </v-layout>
              </div>
            </v-card>
            </v-card-text>
          </v-container>
        </v-tab-item>
      </v-tabs>
  </vue-tabs>
</template>

<script>
export default {
  name: "Dashboard",
  data()
  {
    return {
      requests: [
        {product_name: 'Product1', qr_code: 'rgyregrgr', quantity: '3', price: '200', request_type: 'checkin', status:'accepted'},
        {product_name: 'Product2', qr_code: 'qweegrgr', quantity: '1', price: '600', request_type: 'checkin', status:'pending'},
        {product_name: 'Product3', qr_code: 'dofegrgr', quantity: '20', price: '300', request_type: 'checkout', status:'accepted'},
        {product_name: 'Product4', qr_code: 'boirgrgr', quantity: '11', price: '2100', request_type: 'checkin', status:'rejected'},
        {product_name: 'Product5', qr_code: 'poeregrgr', quantity: '5', price: '900', request_type: 'checkout', status:'rejected'},
        {product_name: 'Product6', qr_code: 'wpqregrgr', quantity: '6', price: '1300', request_type: 'checkout', status:'pending'},
        {product_name: 'Product7', qr_code: 'ovbregrgr', quantity: '31', price: '980', request_type: 'checkin', status:'accepted'},
        {product_name: 'Product8', qr_code: 'zxoregrgr', quantity: '19', price: '710', request_type: 'checkout', status:'pending'}
      ]
    }
  }
}
</script>

<style scoped>

</style>