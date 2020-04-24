<template>
    <div class="banner-section">
        <div class="banner-container" :style="{ 'height': screenHeight - 70 + 'px' }">
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
                        We are the finest firm manufacturing and supplying a spellbinding series of Fragrances and Oils
                    </p>

                    <contact-btn/>
                    <contact-btn :background-color="false" text="Check our products" class="ml-5"/>

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

            <div class="d-flex title-container justify-space-between">
                <div>
                    <h2 class="display-2 my-5">Our featured products</h2>
                    <p>
                        Our products are used for incense sticks, fine fragrances, candles, personal care,
                        laundry care and hair care industries
                    </p>
                </div>

                <contact-btn text="Explore more" outlined/>
            </div>

            <v-row no-gutters class="my-5">
                <v-col md="4" lg="4" cols="12" class="px-5">
                    <v-card class="pa-5" raised height="270">
                        <v-card-title class="d-flex flex-column align-content-start" style="position: relative">
                            <v-icon style="position: relative; left: -20px" color="primary">mdi-history</v-icon>
                            <b>Incense</b>
                        </v-card-title>
                        <v-card-text>
                            Light & breezy floral/fruity blends, rich & heavy oriental notes or warm woody/earthy
                            aromas, we bring you a full spectrum of natural fragrances
                        </v-card-text>
                        <v-card-subtitle>
                            <a>Learn more</a>
                        </v-card-subtitle>
                    </v-card>
                </v-col>

                <v-col md="4" lg="4" cols="12" class="px-5">
                    <v-card class="pa-5" raised height="270">
                        <v-card-title class="d-flex flex-column align-content-start" style="position: relative">
                            <v-icon style="position: relative; left: -20px" color="primary">mdi-history</v-icon>
                            <b>Incense</b>
                        </v-card-title>
                        <v-card-text>
                            Light & breezy floral/fruity blends, rich & heavy oriental notes or warm woody/earthy
                            aromas, we bring you a full spectrum of natural fragrances
                        </v-card-text>
                        <v-card-subtitle>
                            <a>Learn more</a>
                        </v-card-subtitle>
                    </v-card>
                </v-col>

                <v-col md="4" lg="4" cols="12" class="px-5">
                    <v-card class="pa-5" raised height="270">
                        <v-card-title class="d-flex flex-column align-content-start" style="position: relative">
                            <v-icon style="position: relative; left: -20px" color="primary">mdi-history</v-icon>
                            <b>Incense</b>
                        </v-card-title>
                        <v-card-text>
                            Light & breezy floral/fruity blends, rich & heavy oriental notes or warm woody/earthy
                            aromas, we bring you a full spectrum of natural fragrances
                        </v-card-text>
                        <v-card-subtitle>
                            <a>Learn more</a>
                        </v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style lang="scss">
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

            .title-container {
                > div {
                    max-width: 350px;
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
