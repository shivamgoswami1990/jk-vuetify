<template>
    <page-layout left-bg-col="linear-gradient(to top right, #F5F4FF 20%, #FFFFFF 70%)" right-bg-col="#FFFFFF">
        <template v-slot:bannerContent>
            <div class="products-banner-content">
                <v-slide-group show-arrows class="products-slide-group">
                    <v-slide-item v-for="(product, index) in productList" :key="index"
                                  :style="{width: containerWidth - 24 + 'px'}">
                        <div class="d-flex products-flex-row">
                            <v-card color="transparent" elevation="0" tile
                                    :width="$vuetify.breakpoint.smAndUp ? containerWidth/2 : containerWidth - 24">
                                <a class="my-5">Best sellers</a>
                                <h1 class="display-3 font-weight-bold"
                                    :class="$vuetify.breakpoint.smAndUp ? 'my-5' : 'mb-5'">
                                    {{product.title}}
                                </h1>
                                <p v-html="product.content"/>

                                <contact-btn text="Get quote" @click="showDrawerWithSelectedCategory(product)"/>
                                <contact-btn :background-color="false" text="All products" class="ml-5"
                                             @click="scrollToAllProductsSection"/>
                            </v-card>

                            <v-card color="transparent" elevation="0" tile class="product-img-container"
                                    v-if="$vuetify.breakpoint.smAndUp"
                                    :width="$vuetify.breakpoint.smAndUp ? containerWidth/2 : containerWidth - 24">
                                <div class="primary-img">
                                    <div class="border-div"></div>
                                    <img :src="product.imagePath2 ? require('@/assets/Products/' + product.imagePath2) : 'https://via.placeholder.com/400'"/>

                                    <div class="img-1">
                                        <img :src="product.imagePath1 ? require('@/assets/Products/' + product.imagePath1) : 'https://via.placeholder.com/400'"/>
                                        <div class="border-div"></div>
                                    </div>
                                </div>
                            </v-card>
                        </div>
                    </v-slide-item>
                </v-slide-group>
            </div>
        </template>

        <!-- Default slot content below -->
        <quote-drawer v-if="showDrawer" :selected-product="selectedProduct" @showDrawer="transitionend"/>

        <v-container class="all-products-section mt-5">
            <a>Products</a>

            <div class="d-flex mobile-max-width justify-space-between">
                <div>
                    <h2 class="display-2 my-5">All products</h2>
                </div>

                <contact-btn text="Get quote" outlined @click="showDrawerWithSelectedCategory(productList[0])"/>
            </div>

            <v-row no-gutters class="my-5">
                <v-col md="4" lg="4" cols="12" class="mb-10"
                       :class="$vuetify.breakpoint.smAndUp ? 'pr-10' : ''"
                       v-for="(product, index) in productList" :key="index">
                    <v-hover v-slot:default="{ hover }">
                        <v-card class="pa-0" :raised="!hover" height="100%">
                            <v-img :src="product.imagePath2 ? require('@/assets/Products/' + product.imagePath2) : 'https://via.placeholder.com/400'"
                                   class="align-end justify-end" height="200">
                            </v-img>

                            <v-card-title class="font-weight-bold px-5">{{product.title}}</v-card-title>
                            <v-card-text class="px-5 text-justify card-content">
                                {{product.content}}
                                <a class="px-5" @click="setAndScrollToTop(product.id)">
                                    View more ...
                                </a>
                            </v-card-text>
                            <v-card-actions class="pa-0 action-btn-container">
                                <a @click="showDrawerWithSelectedCategory(product)">Get quote</a>
                            </v-card-actions>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </page-layout>
</template>

<style lang="scss">
    .products-banner-content {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
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
                    color: #F50E02;
                }

                &:hover {

                }

                &:active {
                    box-shadow: none;
                }
            }

            .v-slide-group__prev {
                right: 50%;
                bottom: -30px;
                transform: translateX(50%);
                border-top-left-radius: 50%;
                border-bottom-left-radius: 50%;
                border-top-right-radius: 10px;
                border-bottom-right-radius: 10px;

                @media screen and (max-width: 600px) {
                    right: 20%;
                    top: 15%;
                    transform: unset;
                }
            }

            .v-slide-group__next {
                right: calc(50% - 55px);
                bottom: -15px;
                transform: translateX(50%);
                border-top-left-radius: 10px;
                border-bottom-left-radius: 10px;
                border-top-right-radius: 50%;
                border-bottom-right-radius: 50%;

                @media screen and (max-width: 600px) {
                    right: calc(20% - 65px);
                    top: calc(15% + 25px);
                    transform: unset;
                }
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

            .products-flex-row {
                @media screen and (max-width: 600px) {
                    height: 100vh;
                    align-items: center;
                }
            }

            p {
                max-width: 60%;
                min-width: 350px;
                text-align: justify;

                @media screen and (max-width: 600px) {
                    max-width: unset;
                    padding: 10px;

                    --lh: 1rem;
                    --max-lines: 16;
                    position: relative;
                    max-height: calc(var(--lh) * var(--max-lines));
                    overflow: hidden;
                    padding-right: 1rem; /* space for ellipsis */

                    &::before {
                        position: absolute;
                        content: "...";
                        inset-block-end: 0; /* "bottom" */
                        inset-inline-end: 0; /* "right" */
                    }
                    &::after {
                        content: "";
                        position: absolute;
                        inset-inline-end: 0; /* "right" */
                        width: 1rem;
                        height: 1rem;
                        background: white;
                    }
                }
            }

            h1 {

                @media screen and (max-width: 400px) {
                    font-size: 36px !important;
                    line-height: 2.5rem;
                    max-width: 60% !important;
                }

                @media screen and (max-width: 600px) {
                    max-width: 70%;
                }
            }
        }
    }

    .all-products-section {
        position: relative;
        z-index: 15;

        .card-content {
            height: 90px;
            overflow: hidden;
            position: relative;

            a {
                position: absolute;
                bottom: 2px;
                right: 0;
                z-index: 17;
                background-color: #FFFFFF;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .action-btn-container {
            display: flex;
            width: 100%;
            margin-top: 10px;
            overflow: hidden;
            border-bottom: 1px solid #F50E02;

            a {
                flex: 1;
                text-align: center;
                padding: 15px 0;

                &:nth-child(1) {

                    &:hover {
                        background-color: #F50E02;
                        color: #FFFFFF;
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
  import QuoteDrawer from '@/components/QuoteDrawer.vue';

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
      ContactBtn, QuoteDrawer, PageLayout
    },
    data() {
      return {
        screenHeight: null,
        containerWidth: null,
        productList: [],
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic',
        showDrawer: false,
        selectedProduct: null
      }
    },
    computed: {
      options() {
        return {
          duration: this.duration,
          offset: this.offset,
          easing: this.easing,
        }
      }
    },
    mounted() {
      this.screenHeight = this.$vuetify.breakpoint.height;
      this.containerWidth = document.getElementsByClassName("foreground-layer")[0].clientWidth;
      console.log(this.primaryGradientColour)
    },
    created() {
      this.sortProductListById(this.$route.params.id);
    },
    methods: {
      sortProductListById(currentId) {
        if (currentId !== undefined && currentId !== null) {
          let unSortedList = [];
          Object.assign(unSortedList, this.products);
          this.productList = [];
          for (let i = 0; i < unSortedList.length; i++) {
            if (parseInt(unSortedList[i].id) === parseInt(currentId)) {
              this.productList.push(unSortedList[i]);
              unSortedList.splice(i, 1);
              this.productList = this.productList.concat(unSortedList);
              break;
            }
          }
        } else {
          this.productList = this.products;
        }
      },
      setAndScrollToTop(currentId) {
        this.sortProductListById(currentId);
        this.$vuetify.goTo(document.getElementsByClassName("products-banner-content")[0], this.options);
      },
      scrollToAllProductsSection() {
        this.$vuetify.goTo(document.getElementsByClassName("all-products-section")[0], this.options);
      },
      transitionend() {
        this.showDrawer = false;
      },
      showDrawerWithSelectedCategory(selectedProduct) {
        this.selectedProduct = selectedProduct;
        this.showDrawer = true;
      }
    }
  }
</script>

