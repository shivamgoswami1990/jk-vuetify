<template>
    <div class="banner-section">
        <div class="banner-container" :style="{ 'height': screenHeight + 'px' }">
            <div class="background-layer">
                <div class="bg-shape"></div>
            </div>

            <v-container class="foreground-layer">
                <v-slide-group show-arrows class="products-slide-group">
                    <v-slide-item v-for="(product, index) in products" :key="index" :style="{width: containerWidth + 'px'}">
                        <div class="d-flex">
                            <v-card color="transparent" elevation="0" tile
                                    :width="$vuetify.breakpoint.smAndUp ? containerWidth/2 : containerWidth - 24">
                                <a class="my-5">Best sellers</a>
                                <h1 class="display-3 font-weight-bold my-5">{{product.title}}</h1>
                                <p v-html="product.content"/>

                                <contact-btn text="Get quote"/>
                                <contact-btn :background-color="false" text="All products" class="ml-5"/>
                            </v-card>

                            <v-card color="transparent" elevation="0" tile class="product-img-container"
                                    :width="$vuetify.breakpoint.smAndUp ? containerWidth/2 : containerWidth - 24">
                                <div class="primary-img">
                                    <div class="border-div"></div>
                                    <img :src="require('@/assets/Products/' + product.imagePath3)"/>

                                    <div class="img-1">
                                        <img :src="require('@/assets/Products/' + product.imagePath1)"/>
                                        <div class="border-div"></div>
                                    </div>
                                </div>
<!--                                <img :src="require('@/assets/shape-2.svg')" class="shape-2"/>-->
                            </v-card>
                        </div>
                    </v-slide-item>
                </v-slide-group>
            </v-container>
        </div>
    </div>
</template>

<style lang="scss">
    a {
        color: #F50E02;
        font-weight: bold;
    }

    .banner-section {
        .banner-container {
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
                padding-top: 130px;

                .bg-shape {
                    background-image: linear-gradient(to top, #F5F4FF 20%, #FFFFFF 70%);
                    /*background-color: #F5F4FF;*/
                    width: 40%;
                    -webkit-transform: perspective(90vh) rotateX(-30deg);
                    -o-transform: perspective(300px) rotateX(-30deg);
                    -moz-transform: perspective(300px) rotateX(-30deg);
                    -webkit-transform-origin: 0% 50%;
                    -moz-transform-origin: 0% 50%;
                    -o-transform-origin: 0% 50%;
                    transform-origin: 0% 100%;
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
                align-items: center;

                .products-slide-group {
                    position: relative;
                    .v-slide-group__prev, .v-slide-group__next {
                        position: absolute;
                        bottom: 0;
                        background-color: #FFFFFF;
                        border-bottom: 2px solid rgba(245, 14, 2, 0.1);
                        box-shadow: 7px 10px 46px -11px rgba(245,14,2,0.34);
                        width: 35px;
                        height: 70px;
                        z-index: 10;
                        i {
                            color: #F50E02 !important;
                        }
                    }

                    .v-slide-group__prev {
                        right: 50%;
                        transform: translateX(50%);
                        border-top-left-radius: 50%;
                        border-bottom-left-radius: 50%;
                        border-top-right-radius: 10px;
                        border-bottom-right-radius: 10px;
                    }

                    .v-slide-group__next {
                        right: calc(50% - 55px);
                        transform: translateX(50%);
                        border-top-left-radius: 10px;
                        border-bottom-left-radius: 10px;
                        border-top-right-radius: 50%;
                        border-bottom-right-radius: 50%;
                    }

                    .product-img-container {
                        position: relative;
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;

                        .primary-img {
                            width: 70%;
                            position: relative;
                            right: 40px;

                            > .border-div {
                                width: 60%;
                                height: 70%;
                                position: absolute;
                                top: -15px;
                                left: -15px;
                                border-left: 7px solid rgba(245,14,2,0.1);
                                border-top: 7px solid rgba(245,14,2,0.1);
                            }

                            img {
                                width: 100%;
                                -webkit-box-shadow: 7px 10px 46px -11px rgba(245,14,2,0.34);
                                box-shadow: 7px 10px 46px -11px rgba(245,14,2,0.34);
                            }

                            .img-1 {
                                position: absolute;
                                z-index: 7;
                                width: 70%;
                                top: 50%;
                                left: 0;
                                transform: translateX(-50%) translateY(-50%);

                                > .border-div {
                                    width: 30%;
                                    height: 40%;
                                    position: absolute;
                                    bottom: -15px;
                                    left: -15px;
                                    border-left: 7px solid rgba(245,14,2,0.1);
                                    border-bottom: 7px solid rgba(245,14,2,0.1);
                                }

                                img {
                                    width: 100%;
                                }
                            }
                        }

                        .shape-2 {
                            position: absolute;
                            z-index: 6;
                            top: 50%;
                            left: 50%;
                            transform: translateX(-50%) translateY(-50%);
                        }
                    }

                    p {
                        max-width: 60%;
                        min-width: 350px;
                        text-align: justify;
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
        screenHeight: null,
        containerWidth: null
      }
    },
    mounted() {
      this.screenHeight = this.$vuetify.breakpoint.height;
      this.containerWidth = document.getElementsByClassName("foreground-layer")[0].clientWidth;
    },
    created() {
      let vm = this;
      window.addEventListener("load", function(event) {
        let productSlider = document.getElementsByClassName("products-slide-group")[0];
        let productOffsetBottom = vm.screenHeight - productSlider.clientHeight - productSlider.offsetTop;
        document.getElementsByClassName("v-slide-group__prev")[0].style.bottom = -(productOffsetBottom - 40) + "px";
        document.getElementsByClassName("v-slide-group__next")[0].style.bottom = -(productOffsetBottom - 60) + "px";
      });
    }
  }
</script>

