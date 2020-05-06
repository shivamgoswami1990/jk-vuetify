<template>
    <div class="banner-section">
        <div class="banner-container" :style="{ 'height': screenHeight + 'px' }">
            <div class="background-layer">
                <div class="white">
                    <img :src="require('@/assets/shape-3.svg')" class="shape-3"/>
                </div>
                <div></div>
            </div>

            <v-container class="foreground-layer">
                <div>
                    <a class="my-5">Fragrance experts</a>
                    <h1 class="display-3 font-weight-bold my-5">Creating sensorial dreams since 1989</h1>
                    <p class="my-5">
                        We are the finest firm manufacturing and supplying a spellbinding series of Fragrances and Oils.
                        Check our
                        <a class="text-decoration-underline font-weight-regular">upcoming events</a>
                        and <a class="text-decoration-underline font-weight-regular">industry association</a>
                    </p>

                    <contact-btn/>
                    <contact-btn :background-color="false" text="Check our products"
                                 class="ml-5" @click="$router.push({ name: 'products', params: { id: 1 }})"/>

                </div>
                <div>
                    <img :src="require('@/assets/banner.png')"/>
                    <img :src="require('@/assets/shape-1.svg')" class="shape-1"/>
                </div>
                <img :src="require('@/assets/shape-2.svg')" class="shape-2"/>
            </v-container>
        </div>

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

                <contact-btn text="Explore more" outlined @click="$router.push({ name: 'products', params: { id: 1 }})"/>
            </div>

            <v-row no-gutters class="my-5">
                <v-col md="4" lg="4" cols="12" class="pr-10" v-for="(product, index) in products"
                       :key="index" v-if="product.isFeatured">
                    <v-hover v-slot:default="{ hover }">
                        <v-card class="pa-5 featured-tiles" :raised="!hover" height="100%">

                            <v-icon color="primary" class="pl-3" v-if="product.id === 1">
                                mdi-candle
                            </v-icon>
                            <v-icon color="primary" class="pl-3" v-if="product.id === 2">
                                mdi-washing-machine
                            </v-icon>
                            <v-icon color="primary" class="pl-3" v-if="product.id === 12">
                                mdi-spa
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
                <v-container class="section-container mt-5">
                    <div>
                        <v-row no-gutters class="first-row my-10">
                            <v-col class="left-col">
                                <v-img :src="require('@/assets/section-1.png')" contain height="420" max-width="450px"/>
                            </v-col>
                            <v-col class="right-col pl-10">
                                <div class="mobile-max-width">
                                    <div>
                                        <a>Deliverability</a>
                                        <h2 class="display-2 my-5">Right people, Right fragrances</h2>
                                        <p>
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
                            <v-col class="right-col pl-10">
                                <div class="mobile-max-width">
                                    <div>
                                        <a>Reliability</a>
                                        <h2 class="display-2 my-5">State of the art solutions</h2>
                                        <p>
                                            Our firm is involved in delivering a vast series products
                                            to valued customers. The offered items are made with the help of modern
                                            techniques, optimum grade ingredients in compliance with the set
                                            market quality using contemporary tools and technologies
                                            in tandem with industry set guidelines of quality.
                                        </p>
                                    </div>
                                </div>
                            </v-col>
                            <v-col class="left-col">
                                <v-img :src="require('@/assets/section-2.png')" contain height="420" max-width="450px"/>
                            </v-col>
                        </v-row>
                    </div>
                </v-container>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    a {
        color: #F50E02;
        font-weight: bold;
    }

    .banner-section {
        .banner-container {
            background-color: #F5F4FF;
            position: relative;

            .background-layer {
                position: absolute;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                align-items: stretch;
                overflow: hidden;
                z-index: 1;
                top: 0;
                left: 0;

                > div:nth-child(1) {
                    -webkit-transform: perspective(90vh) rotateX(-30deg);
                    -o-transform: perspective(300px) rotateX(-30deg);
                    -moz-transform: perspective(300px) rotateX(-30deg);
                    -webkit-transform-origin: 0% 50%;
                    -moz-transform-origin: 0% 50%;
                    -o-transform-origin: 0% 50%;
                    transform-origin: 0% 100%;
                    width: 40%;

                    .shape-3 {
                        position: absolute;
                        top: 50%;
                        left: 0;
                        transform: translateY(-30%);
                        height: 200px;
                    }
                }

                > div:nth-child(2) {
                    width: 60%;
                    background-image: linear-gradient(to top right, #F5F4FF 20%, #FFFFFF 70%);
                }
            }

            .foreground-layer {
                position: relative;
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: row;
                z-index: 5;
                top: 0;
                left: 0;

                .shape-2 {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 140px;
                    transform: translateX(-50%) translateY(50%);
                }

                > div {

                    &:nth-child(1) {
                        align-self: center;
                        width: 50%;

                        h1 {
                            line-height: 1.2;
                        }
                    }

                    &:nth-child(2) {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                        flex: 1;
                        width: 50%;
                        position: relative;

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
        }

        .featured-products-section {
            position: relative;
            z-index: 15;

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
    }
</style>

<script>
  // @ is an alias to /src
  import ContactBtn from '@/components/ContactBtn.vue';

  export default {
    metaInfo: {
      title: 'JK Aromatics and Perfumers',
      titleTemplate: 'Perfumes → %s',
      meta: [
        { name: 'name', content: '' },
        { name: 'description', content: '' }
      ]
    },
    components: {
      ContactBtn
    },
    data() {
      return {
        screenHeight: null
      }
    },
    mounted() {
      this.screenHeight = this.$vuetify.breakpoint.height;
    }
  }
</script>
