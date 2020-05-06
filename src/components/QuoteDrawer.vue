<template>
    <v-navigation-drawer v-model="drawer" temporary app clipped right @transitionend="closeDrawer"
                         width="450px" overlay-color="#F50E02" overlay-opacity="0.1">
        <v-icon size="35" style="position: absolute; right: 10px; top: 10px" color="primary" @click="closeDrawer">
            mdi-close
        </v-icon>
        <v-layout fill-height column class="pa-10">
            <h2 class="display-1 mb-10">Contact us for a quote</h2>

            <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="save">
                <v-select v-model="product" :items="products" item-text="title" chips
                          label="Categories" multiple return-object
                          persistent-hint hint="Select more for group inquiry">
                </v-select>

                <v-text-field v-model="name" label="Name" clearable
                              :rules="[rules.required]" class="my-2">
                </v-text-field>

                <v-text-field v-model="email" label="Email" clearable
                              :rules="[rules.required, rules.email]" class="my-2">
                </v-text-field>

                <v-textarea v-model="message" label="Message" clearable auto-grow
                            :rules="[rules.required]" class="my-2">
                </v-textarea>

                <v-alert type="accent" class="mt-5"
                         outlined light icon="mdi-check-circle" v-if="showSuccessMessage">
                    Your query has been submitted. We will be in touch
                </v-alert>
                <v-alert type="primary" class="mt-5"
                         outlined light icon="mdi-cancel" v-if="showErrorMessage">
                    Something went wrong. Please try again
                </v-alert>

                <contact-btn text="Submit" :disabled="!valid" @click="save" :loading="isLoading"/>
            </v-form>
        </v-layout>
    </v-navigation-drawer>
</template>

<script>
  import ContactBtn from '@/components/ContactBtn.vue';

  export default {
    components: {
      ContactBtn
    },
    props: {
      selectedProduct: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        drawer: true,
        valid: false,
        rules: {
          required: value => !!value || 'Required.',
          max: v => this.validateFormRules(v, 'lte', 20, 'Max 20 characters'),
          min: v => this.validateFormRules(v, 'gte', 8, 'Min 8 characters'),
          email: (v) => {
            if (v !== undefined && v !== null) {
              if (v.length > 0) {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return pattern.test(v) || 'Invalid e-mail.';
              }
              return true;
            }
            return true;
          }
        },
        product: null,
        name: '',
        email: '',
        message: '',
        showSuccessMessage: false,
        showErrorMessage: false,
        isLoading: false
      }
    },
    mounted() {
      this.product = this.selectedProduct;
    },
    methods: {
      closeDrawer() {
        this.$emit('showDrawer', false);
      },
      save() {
        let vm = this;
        vm.name = '';
        vm.email = '';
        vm.message = '';
        vm.isLoading = false;

        // Show the message on a timeout
        vm.showSuccessMessage = true;
        // if (this.$refs.form.validate()) {
        //   // Submit form on valid
        //   const data = { contact: {
        //       "name": this.name,
        //       "email": this.email,
        //       "message": this.message,
        //     }};
        //   let vm = this;
        //   vm.isLoading = true;
        //   fetch(process.env.VUE_APP_REST_URL + '/contacts', {
        //     method: 'POST', // or 'PUT'
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        //   })
        //     .then((response) => response.json())
        //     .then((data) => {
        //       // On success, clear form & display success message
        //       if ('response_code' in data) {
        //         if (data.response_code === '202') {
        //           vm.name = '';
        //           vm.email = '';
        //           vm.message = '';
        //           vm.isLoading = false;
        //
        //           // Show the message on a timeout
        //           vm.showSuccessMessage = true;
        //           setTimeout(function () {
        //             vm.showSuccessMessage = false;
        //           }, 4000);
        //         }
        //       }
        //     })
        //     .catch((error) => {
        //       vm.isLoading = false;
        //       console.log(error);
        //       // Show the message on a timeout
        //       vm.showErrorMessage = true;
        //       setTimeout(function () {
        //         vm.showErrorMessage = false;
        //       }, 4000);
        //     });
        // }
      },
    }
  }
</script>

