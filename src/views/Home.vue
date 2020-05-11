<template>
    <page-layout :right-bg-col="primaryGradientColour">
        <template v-slot:bannerContent>
            <div class="home-banner-content">
                <div>
                    <a class="my-5">Fragrance experts</a>
                    <h1 class="display-3 font-weight-bold my-5">Creating sensorial dreams since 1989</h1>
                    <p class="my-5">
                        We are the finest firm manufacturing and supplying a spellbinding series of Fragrances and Oils.
                        Check our
                        <a class="text-decoration-underline font-weight-regular">upcoming events</a>
                        and <a class="text-decoration-underline font-weight-regular">industry association</a>
                    </p>

                    <div class="action-btn-wrapper">
                        <contact-btn/>
                        <contact-btn :background-color="false" text="Check our products"
                                     class="ml-5" @click="$router.push({ name: 'products', params: { id: 1 }})"/>
                    </div>

                    <img :src="require('@/assets/banner.webp')"/>

                </div>
                <div>
                    <img :src="require('@/assets/banner.webp')"/>
                    <img :src="require('@/assets/shape-1.svg')" class="shape-1"/>
                </div>
            </div>
        </template>

        <!-- Default slot content below -->
        <v-container class="featured-products-section mt-5">
            <a>Products</a>

            <div class="d-flex mobile-max-width justify-space-between">
                <div>
                    <h2 class="display-2 my-5">Our featured products</h2>
                    <p>
                        Our products are used for incense sticks, fine fragrances, candles, personal care,
                        laundry care and hair care industries
                    </p>
                </div>

                <contact-btn text="Explore more" outlined class="explore-btn"
                             @click="$router.push({ name: 'products', params: { id: 1 }})"/>
            </div>

            <v-row no-gutters :class="$vuetify.breakpoint.smAndUp ? 'my-5' : ''">
                <v-col sm="4" md="4" lg="4" cols="12" :class="$vuetify.breakpoint.smAndUp ? 'pr-10' : 'pr-0 mb-5'"
                       v-for="(product, index) in products" :key="index" v-if="product.isFeatured">
                    <v-hover v-slot:default="{ hover }">
                        <v-card class="pa-5 featured-tiles" :raised="!hover" height="100%">

                            <v-icon color="primary" class="pl-3" v-if="product.id === 1">
                                {{mdiCandle}}
                            </v-icon>
                            <v-icon color="primary" class="pl-3" v-if="product.id === 2">
                                {{mdiWashingMachine}}
                            </v-icon>
                            <v-icon color="primary" class="pl-3" v-if="product.id === 12">
                                {{mdiSpa}}
                            </v-icon>

                            <v-card-title class="font-weight-bold">{{product.title}}</v-card-title>
                            <v-card-text>
                                {{product.content}}
                            </v-card-text>
                            <v-card-subtitle>
                                <a @click="$router.push(
                                  { name: 'products',
                                    params: {
                                        id: product.id
                                    }
                                  })">
                                    Learn more
                                </a>
                            </v-card-subtitle>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>

        <div class="expertise-section">
            <div class="background-layer">
                <img :src="require('@/assets/shape-4.svg')" class="shape-4"/>
                <img :src="require('@/assets/shape-5.svg')" class="shape-5"/>
            </div>

            <div class="foreground-layer">
                <v-container class="section-container" :class="$vuetify.breakpoint.smAndUp ? 'mt-5' : ''">
                    <div>
                        <v-row no-gutters class="first-row my-10">
                            <v-col class="left-col" v-if="$vuetify.breakpoint.smAndUp">
                                <v-img :src="require('@/assets/section-1.webp')" contain height="420" max-width="450px"/>
                            </v-col>
                            <v-col class="right-col" :class="$vuetify.breakpoint.smAndUp ? 'pl-10' : ''">
                                <div class="mobile-max-width">
                                    <div>
                                        <a>Deliverability</a>
                                        <h2 class="display-2 my-5">Right people, Right fragrances</h2>
                                        <p class="text-justify">
                                            JK Aromatics and Perfumers has been helping create unique brand identities since 1989.
                                            Our refined aesthetics, extensive knowledge of perfumery and master craftsmanship
                                            have won the trust of leading fragrance labels. The art of designing a signature
                                            fragrance is like creating an aromatic symphony which not only calls for creative
                                            perception but also requires most advanced technology tools.
                                        </p>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>

                        <v-row no-gutters class="second-row my-10">
                            <v-col class="right-col" :class="$vuetify.breakpoint.smAndUp ? 'pl-10' : ''">
                                <div class="mobile-max-width">
                                    <div>
                                        <a>Reliability</a>
                                        <h2 class="display-2 my-5">State of the art solutions</h2>
                                        <p class="text-justify">
                                            Our firm is involved in delivering a vast series products
                                            to valued customers. The offered items are made with the help of modern
                                            techniques, optimum grade ingredients in compliance with the set
                                            market quality using contemporary tools and technologies
                                            in tandem with industry set guidelines of quality.
                                        </p>
                                    </div>
                                </div>
                            </v-col>
                            <v-col class="left-col" v-if="$vuetify.breakpoint.smAndUp">
                                <v-img :src="require('@/assets/section-2.webp')" contain height="420" max-width="450px"/>
                            </v-col>
                        </v-row>
                    </div>
                </v-container>
            </div>
        </div>
    </page-layout>
</template>

<style lang="scss" scoped>
    .home-banner-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;

        @media screen and (max-width: 600px) {
            padding-top: 70px;
        }

        > div {
            width: 50%;

            @media screen and (max-width: 600px) {
                width: 100%;
            }

            &:nth-child(1) {
                align-self: center;

                @media screen and (max-width: 600px) {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                img {
                    display: none;

                    @media screen and (max-width: 600px) {
                        display: block;
                        position: absolute;
                        width: 45%;
                        top: 30%;
                        right: 0;
                    }
                }

                h1 {
                    line-height: 1.2;

                    @media screen and (max-width: 600px) {
                        max-width: 70%;
                    }
                }
            }

            &:nth-child(2) {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                flex: 1;
                position: relative;

                @media screen and (max-width: 600px) {
                    display: none;
                }

                img {
                    width: 100%;
                }

                .shape-1 {
                    position: absolute;
                    top: 50%;
                    right: 0;
                    width: 100px;
                    height: 150px;
                    transform: translateY(-50%);
                }
            }
        }
    }

    .featured-products-section {
        position: relative;
        z-index: 15;

        .explore-btn {
            @media screen and (max-width: 600px) {
                display: none;
            }
        }

        .featured-tiles {
            .v-card__text {
                max-height: 90px;
                overflow: hidden;
            }

            .v-card__subtitle {
                a:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    .expertise-section {
        position: relative;
        a {
            background-color: rgba(245, 14, 2, 0.05);
            padding: 5px 10px;
            border-radius: 10px;
        }

        .background-layer {
            position: absolute;
            width: 100%;
            height: 100%;

            .shape-4 {
                position: absolute;
                top: 50%;
                left: 0;
                height: 60%;
                width: 50%;
                transform: translateY(-50%);
            }

            .shape-5 {
                position: absolute;
                top: 50%;
                right: 0;
                height: 40%;
                transform: translateY(-50%);
            }
        }

        .foreground-layer {
            position: relative;
            z-index: 15;
            .first-row, .second-row {
                .left-col, .right-col {
                    display: flex;
                    align-self: center;
                    justify-content: center;

                    .mobile-max-width {
                        display: flex;
                        justify-content: center;
                        text-align: left;
                    }
                }
            }
        }
    }
</style>

<script>
  // @ is an alias to /src
  import PageLayout from '@/components/PageLayout.vue';
  import ContactBtn from '@/components/ContactBtn.vue';
  import { mdiCandle } from '@mdi/js'
  import { mdiWashingMachine } from '@mdi/js';
  import { mdiSpa } from '@mdi/js';

  export default {
    metaInfo: {
      title: 'JK Aromatics and Perfumers',
      titleTemplate: 'Perfumes → %s',
      meta: [
        { name: 'name', content: '' },
        { name: 'description', content: '' }
      ]
    },
    data() {
      return {
        mdiCandle: mdiCandle,
        mdiWashingMachine: mdiWashingMachine,
        mdiSpa: mdiSpa
      }
    },
    components: {
      PageLayout, ContactBtn
    }
  }
</script>
