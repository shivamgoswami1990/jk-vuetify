<template>
    <v-navigation-drawer v-model="drawer" temporary app @transitionend="closeDrawer"
                         width="100%">
        <v-icon size="35" style="position: absolute; right: 10px; top: 10px" color="primary" @click="closeDrawer">
            {{mdiClose}}
        </v-icon>
        <v-layout justify-center align-center fill-height column>
            <v-list>
                <v-list-item class="text-center headline" v-for="(item, index) in $attrs.items" :key="index"
                             @click="$router.push({ name: item.linkTo, params: { id: item.linkParams }})">
                    {{item.title}}
                </v-list-item>
            </v-list>
        </v-layout>
    </v-navigation-drawer>
</template>

<script>
    import { mdiClose } from '@mdi/js';

    export default {
        data() {
            return {
              drawer: true,
              mdiClose: mdiClose
            }
        },
        methods: {
            closeDrawer() {
                this.$emit('showDrawer', false);
            }
        }
    }
</script>

