<template>
  <div id="app">
    <v-app>

      <nav-drawer :items="navItems" v-if="showDrawer" @showDrawer="transitionend" />

      <v-app-bar app color="transparent" tile height="70px" elevation="0" hide-on-scroll fixed>
        <v-container class="d-flex align-center">
          <v-app-bar-nav-icon @click="showDrawer = true" v-if="$vuetify.breakpoint.mdAndDown">
            <slot>
              <v-icon size="32" color="primary">mdi-text</v-icon>
            </slot>
          </v-app-bar-nav-icon>
          <a @click="$router.push({ name: 'home'})">
            <v-avatar width="70px" tile>
              <v-img :src="require('@/assets/logo.png')" contain></v-img>
            </v-avatar>
          </a>
          <h3>JK Aromatics And Perfumers</h3>

          <v-spacer></v-spacer>
          <div class="hidden-md-and-down">
            <a v-for="(item, index) in navItems" :key="index" class="black--text font-weight-bold px-5"
                   v-if="item.isMainNavItem" :to="{ 'name' : item.linkTo}">
              {{item.title}}
            </a>
          </div>
        </v-container>
      </v-app-bar>

      <!-- Router content -->
      <v-content>
        <router-view/>
      </v-content>
      <!-- Router content -->

    </v-app>
    <router-view/>
  </div>
</template>

<style>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

<script>
  import NavDrawer from '@/components/NavDrawer.vue';

  export default {
    components: {
      NavDrawer
    },
    data() {
      return {
        showDrawer: false,
        navItems: [
          { title: "Home", isMainNavItem: true, linkTo: 'home'},
          { title: "Our Products", isMainNavItem: true, linkTo: 'products'},
          { title: "About Us", isMainNavItem: true, linkTo: 'about'},
          { title: "Contact Us", isMainNavItem: true, linkTo: 'contactus'},
        ]
      }
    },
    methods: {
      transitionend() {
        this.showDrawer = false;
      }
    }
  }
</script>
