<template>
    <v-btn color="primary" rounded height="50" width="150" :text="!backgroundColor" :outlined="outlined"
           class="font-weight-bold text-capitalize my-5">
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
        }
      }
    }
</script>
