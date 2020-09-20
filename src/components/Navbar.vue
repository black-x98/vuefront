<template>
  <nav>
    <v-app-bar height="60px" color=#3b5998 app>
      <v-btn align="left" text color=#3b5998 class="white--text" @click="drawer = !drawer">
        <v-icon>menu</v-icon>
        <span>Menu</span>
      </v-btn>
      <v-spacer/>
      <v-toolbar-title class="white--text">
        <span>Inventory Management System</span>
      </v-toolbar-title>
      <v-spacer/>
        <v-btn text color=#3b5998 class="white--text" >
          <v-icon>lock</v-icon>
          <span>Sign Out</span>
        </v-btn>

    </v-app-bar>
    <v-navigation-drawer app color= #3b5998 v-model="drawer" width="200px">
      <v-layout class="white--text mt-6 ml-12" color=#3b5998 height="50px">Admin Panel</v-layout>
      <v-list>
            <v-list-item color=#3b5998 height="62px" v-for="link in links" :key="link.text" >

              <router-link class="text-link" :to="link.route">
                <v-layout class="white--text mt-10 ml-10" color=#3b5998 height="50px">
                  <v-icon class="white--text">{{ link.icon }}</v-icon>
                  {{ link.text }}
                </v-layout>
              </router-link>

            </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      drawer: true,
      props: true,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/'},
        { icon: 'person', text: 'Users', route: '/users'},
        { icon: 'category', text: 'Products', route: '/products'},
        { icon: 'star', text: 'Test', route: '/test'},
      ]
    }
  }
}
</script>

<style>
.text-link,
.text-link:active,
.text-link:focus,
.text-link:hover,
.text-link:visited {
  align-content: space-around;
  justify-content: center;
  color: white;
  text-decoration: none;
  cursor: default;
  text-decoration-color: white;
}
</style>