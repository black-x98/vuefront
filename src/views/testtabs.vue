<template>
  <vue-tabs @tab-change="handleTabChange">


    <v-card>
      <v-tabs background-color="white" color="deep-purple accent-4" center>
        <v-tab>All Requests</v-tab>
        <v-tab>Accepted</v-tab>
        <v-tab>Rejected</v-tab>
        <v-tab-item v-for="n in 3" :key="n">
          <v-container fluid>
            <v-card-text v-if="n==1">This is the first tab</v-card-text>
            <v-card-text v-if="n==2">This is the second tab</v-card-text>
            <v-card-text v-if="n==3">This is the Third tab</v-card-text>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>


  </vue-tabs>
</template>

<script>
export default {
name: "testtabs"
}
</script>

<style scoped>

</style>