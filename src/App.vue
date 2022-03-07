<template>
  <div id="app">
    <v-app>

      <nav-drawer :items="navItems" v-if="showDrawer" @showDrawer="transitionend" />

      <!-- App bar -->
      <v-app-bar app color="#FFFFFF" tile height="70px" elevation="0" fixed prominent>
          <v-app-bar-nav-icon @click="showDrawer = true" v-if="$vuetify.breakpoint.mdAndDown">
            <slot>
              <v-icon size="32" color="primary">{{mdiText}}</v-icon>
            </slot>
          </v-app-bar-nav-icon>
          <a @click="$router.push({ name: 'home'})">
            <v-avatar width="70px" tile>
              <v-img :src="require('@/assets/logo.webp')" contain></v-img>
            </v-avatar>
          </a>
          <h3 v-if="$vuetify.breakpoint.smAndUp">JK Aromatics And Perfumers</h3>

          <v-spacer></v-spacer>
<!--          <a @click="$router.push({ name: 'home'})">-->
<!--            <v-avatar width="70px" tile>-->
<!--              <v-img :src="require('@/assets/logo.webp')" contain></v-img>-->
<!--            </v-avatar>-->
<!--          </a>-->
<!--          <h6 v-if="$vuetify.breakpoint.smAndUp">-->
<!--            <span class="primary&#45;&#45;text caption">Sister concern</span> <br/>-->
<!--            Mazic Fragrances-->
<!--          </h6>-->
<!--          <div class="hidden-sm-and-down mr-2">-->
<!--            <a v-for="(item, index) in navItems" :key="index" class="black&#45;&#45;text font-weight-bold mx-5 nav-link"-->
<!--               v-if="item.isMainNavItem" @click="$router.push({ name: item.linkTo, params: { id: item.linkParams }})">-->
<!--              {{item.title}}-->
<!--            </a>-->
<!--          </div>-->

          <contact-btn text="Get in touch" @click="$router.push(
            { name: 'about',
              params: {
                navigateToFormOnMobile: true
              }
            })"/>

        <template v-slot:extension>
          <v-tabs centered background-color="#FFFFFF">
            <v-tab :to="{ name: 'home'}" exact-path>
              Home
            </v-tab>
            <v-tab :to="{ name: 'products', params: { id: 1 }}" exact-path>
              Products
            </v-tab>
            <v-tab :to="{ name: 'about'}">
              About
            </v-tab>
            <v-tab @click="goToFooter">
              Sister concern
            </v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <!-- App bar -->

      <!-- Router content -->
      <v-main>
        <router-view/>
      </v-main>
      <!-- Router content -->

      <!-- Footer -->
      <footer-with-bottom-nav :items="navItems"/>
      <!-- Footer -->

    </v-app>
  </div>
</template>

<style lang="scss">
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    header.v-app-bar {
      z-index: 40;
    }

    .v-navigation-drawer {
      z-index: 50;
    }



    .nav-link {
      cursor: pointer;

      &:hover {
        border-bottom: 4px solid #F50E02;
      }
    }

    .mobile-max-width {
      & > div {
        max-width: 350px;
      }
    }
  }
</style>

<script>
  import NavDrawer from '@/components/NavDrawer.vue';
  import ContactBtn from '@/components/ContactBtn.vue';
  import FooterWithBottomNav from '@/components/Footer.vue';
  import { mdiText } from '@mdi/js';

  export default {
    components: {
      NavDrawer, ContactBtn, FooterWithBottomNav
    },
    data() {
      return {
        showDrawer: false,
        mdiText: mdiText,
        navItems: [
          { title: "Home", isMainNavItem: true, linkTo: 'home'},
          { title: "Our Products", isMainNavItem: true, linkTo: 'products', linkParams: 1},
          { title: "About", isMainNavItem: true, linkTo: 'about'}
        ]
      }
    },
    methods: {
      transitionend() {
        this.showDrawer = false;
      },
      goToFooter() {
        this.$vuetify.goTo(document.getElementsByClassName("footer-with-nav")[0], {
          duration: 300,
          offset: 0,
          easing: 'easeInOutCubic',
        });
      }
    }
  }
</script>
