<template>
  <div class="dashboard">
    <h1 class="subheading black--text">Dashboard</h1>
    <h2 class="subheading grey--text">Recent requests</h2>
    <v-container class="my-5">

      <v-layout row class="mb-3">
        <v-btn small flat color="grey" @click="sortBy('title')">
          <v-icon left small>folder</v-icon>
          <span class="caption text-lowercase">Sort by item name</span>
        </v-btn>
        <v-btn small flat color="grey" @click="sortBy('person')">
          <v-icon left small>person</v-icon>
          <span class="caption text-lowercase">Sort by person</span>
        </v-btn>
      </v-layout>

      <v-card color=#fefefe v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">
              Name of Item
            </div>
            <div>
              {{project.title}}
            </div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="black--text">Person</div>
            <div >{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="black--text">Due date</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} caption my-2`">
                {{ project.status }}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>

    </v-container>
<!--    <v-btn @click="$emit(https://api.mocki.io/v1/b043df5a)"></v-btn>-->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Dashboard',
  data() {
    return {
      projects: [
        {title: 'Construction Material', person:'TTTTT', due:'1st Jan 2021', status:"pending"},
        {title: 'Office Accessories', person:'XXXXXX', due:'10th December 2020', status:"rejected"},
        {title: 'Vehicles', person:'BBBBBB', due:'1st Feb 2021', status:"accepted"},
        {title: 'Furnitures', person:'EEEEEEE', due:'25th Nov 2020', status:"pending"},
      ]
    }
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>

<style>
.project.accepted {
  border-left: 4px solid darkgreen;
}
.project.rejected {
  border-left: 4px solid tomato;
}
.project.pending {
  border-left: 4px solid darkgoldenrod;
}
.v-chip.accepted {
  background: darkgreen;
}
.v-chip.rejected {
  background: tomato;
}
.v-chip.pending {
  background: darkgoldenrod;
}
</style>