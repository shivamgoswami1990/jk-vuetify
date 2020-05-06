<template>
    <v-btn color="primary" rounded height="50" width="150" :text="!backgroundColor" :outlined="outlined"
           :disabled="disabled" :loading="loading"
           class="font-weight-bold text-capitalize my-5" @click="btnClicked">
        {{text}}
    </v-btn>
</template>

<script>
    export default {
      props: {
        text: {
          type: String,
          default: "Contact us"
        },
        backgroundColor: {
          type: Boolean,
          default: true
        },
        outlined: {
          type: Boolean,
          default: false
        },
        disabled: {
          type: Boolean,
          default: false
        },
        loading: {
          type: Boolean,
          default: false
        }
      },
      methods: {
        btnClicked() {
          this.$emit('click');
        }
      }
    }
</script>
