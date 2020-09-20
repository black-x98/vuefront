<template>
  <v-app >
    <v-content class="mx-12 mt-8">
     <Navbar/>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: 'App',
  components: {
     Navbar,
  },
  data() {
	return{
		posts: []
	}
  }
}
</script>