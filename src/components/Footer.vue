<template>
    <v-footer class="footer-with-nav pa-0" color="transparent">
        <div class="background-layer">
            <img :src="require('@/assets/shape-6.svg')" class="shape-6"/>
        </div>

        <div class="foreground-layer">
            <v-layout fill-height justify-center align-center column class="pa-0">
                <v-container>
                    <v-row no-gutters>
                        <v-col cols="12" md="3" sm="12" class="text-center">
                            <div class="d-flex justify-center">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-avatar>
                                            <v-img :src="require('@/assets/logo.webp')" contain/>
                                        </v-list-item-avatar>

                                        <v-list-item-content>
                                            <h3 class="text-left font-weight-bold body-1">JK Aromatics and Perfumers</h3>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </div>

                            <p class="text-justify py-5 body-2" :class="$vuetify.breakpoint.smAndUp ? 'pl-10' : 'pt-0'">
                                Ours is the finest firm manufacturing and supplying a spellbinding series of
                                Fragrances and Oils nationally since 1989.
                            </p>
                        </v-col>

                        <v-col cols="12" md="6" sm="12">
                            <h3 class="pb-6 body-1 font-weight-bold text-center">Contact Us</h3>

                            <div id="contactus-list">
                                <div class="contactus-item">
                                    <v-icon color="primary">{{mdiMapMarker}}</v-icon>
                                    <p class="body-2">
                                        No. 2187/13, Beri Market, Gali Hinga Beg, Tilak Bazar,
                                        Delhi-110006, India
                                    </p>
                                </div>

                                <div class="contactus-item">
                                    <v-icon color="primary">{{mdiPhone}}</v-icon>
                                    <p class="body-2">
                                        +91-9868174388
                                    </p>
                                </div>

                                <div class="contactus-item">
                                    <v-icon color="primary">{{mdiEmail}}</v-icon>
                                    <p class="body-2">
                                        contact@jkaromaticsandperfumers.com
                                    </p>
                                </div>
                            </div>
                        </v-col>

                        <v-col cols="12" md="3" sm="12" class="text-center">
                            <h3 class="pb-6 body-1 font-weight-bold">Company</h3>

                            <v-layout justify-center>
                                <ul id="sitemap-links" class="pt-0">
                                    <li v-for="(item, index) in $attrs.items" :key="index"
                                        @click="$router.push({ name: item.linkTo})" class="body-2">
                                        {{item.title}}
                                    </li>
                                </ul>
                            </v-layout>
                        </v-col>
                    </v-row>
                </v-container>

                <p class="text-center body-2 font-weight-bold mt-5">
                    © Copyright 2020 JK Aromatics and Perfumers. All rights reserved
                    <br>
                    Made with ❣ by
                    <a href="https://shivamgoswami.live" target="_blank" rel="noopener">Shivam Goswami</a>
                </p>
            </v-layout>
        </div>
    </v-footer>
</template>

<style lang="scss">
    .footer-with-nav {
        position: relative;

        .background-layer {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 5;

            .shape-6 {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
            }
        }

        .foreground-layer {
            position: relative;
            z-index: 15;
            width: 100%;

            #sitemap-links {
                list-style-type: none;
                margin: 0 auto;
                padding: 20px;
                overflow: hidden;

                @media screen and (max-width: 600px) {
                    padding: 0;
                }

                li {
                    padding: 0 15px;
                    float: left;
                    &:hover {
                        cursor: pointer;
                        text-decoration: underline;
                        color: #F50E02;
                    }
                }
            }

            #contactus-list {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .contactus-item {
                    width: 350px;
                    padding-bottom: 20px;
                    display: flex;
                    i {
                        align-self: center;
                    }

                    p {
                        padding: 0;
                        margin: 0 0 0 20px;
                        text-align: left;
                        text-justify: auto;
                    }
                }
            }
        }
    }
</style>

<script>
  // @ is an alias to /src
  import { mdiMapMarker } from '@mdi/js'
  import { mdiPhone } from '@mdi/js';
  import { mdiEmail } from '@mdi/js';

  export default {
    data() {
      return {
        mdiMapMarker: mdiMapMarker,
        mdiPhone: mdiPhone,
        mdiEmail: mdiEmail
      }
    }
  }
</script>
