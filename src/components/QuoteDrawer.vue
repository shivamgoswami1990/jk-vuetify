<template>
    <v-navigation-drawer v-model="drawer" temporary app clipped right @transitionend="closeDrawer"
                         width="450px" overlay-color="#F50E02" overlay-opacity="0.1">
        <v-icon size="35" style="position: absolute; right: 10px; top: 10px" color="primary" @click="closeDrawer">
            mdi-close
        </v-icon>
        <v-layout fill-height column class="pa-10">
            <h2 class="display-1 mb-10">Contact us for a quote</h2>

            <contact-form :selected-product="selectedProduct"/>
        </v-layout>
    </v-navigation-drawer>
</template>

<script>
  import ContactBtn from '@/components/ContactBtn.vue';
  import ContactForm from '@/components/ContactForm.vue';

  export default {
    components: {
      ContactBtn, ContactForm
    },
    props: {
      selectedProduct: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        drawer: true
      }
    },
    methods: {
      closeDrawer() {
        this.$emit('showDrawer', false);
      }
    }
  }
</script>

