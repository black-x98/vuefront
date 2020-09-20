<template>
<div>
  <h1>List of Users</h1>
  
  <v-card color=#fefefe outline="true" raised="true" v-for="user in users" :key="user.username">
    <v-layout row wrap :class="`pa-3 project ${user.name}`">
      <v-flex xs2 sm2 md2>
        <div class="caption grey--text" align="center">Name</div>
        <div align="center">{{user.name}}</div>
      </v-flex>

      <v-flex xs2 sm2 md2>
        <div class="caption grey--text">Email Address</div>
        <div >{{user.email}}</div>
      </v-flex>
      <v-flex xs2 sm2 md2>
        <div class="caption grey--text">Phone Number</div>
        <div >{{user.phone}}</div>
      </v-flex>
	<v-flex xs2 sm2 md2>
		<div class="caption grey--text">username</div>
		<div >{{user.username}}</div>
      </v-flex>
      <v-flex xs2 sm2 md2>
        <div class="caption grey--text">Group</div>
        <div >{{user.group}}</div>
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
	</div>
      </v-flex>
    </v-layout>
  </v-card>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Users",
  data() {
	return{
		users: []
	}
  },
  created(){
	axios.post('https://run.mocky.io/v3/74bfda65-8907-469b-a6ec-e864153e87a7')
	.then(response => {
		this.users = response.data
	})
	.catch(error => {
		console.log(error);
	});
  }
}
</script>

<style scoped>

.card-border {
  border-style: solid;
  border-color: #ff0000 #00ff00 #0000ff;
}

</style>