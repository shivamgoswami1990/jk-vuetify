<template>
    <page-layout :left-bg-col="reversedPrimaryGradientColour" :right-bg-col="primaryGradientColour">
        <template v-slot:bannerContent>
            <div class="home-banner-content">
                <div>
                    <a class="my-5">Family run business</a>
                    <h1 class="display-3 font-weight-bold my-5">About us</h1>
                    <p class="my-5">
                        We are the finest firm manufacturing and supplying a spellbinding series of Fragrances and Oils.
                    </p>
                </div>
                <div>
                    <img :src="require('@/assets/shape-1.svg')" class="shape-1"/>

                    <v-layout fill-height justify-center column class="pa-10">
                        <h2 class="display-1 mb-10">Get in touch</h2>

                        <contact-form hide-category-selection/>
                    </v-layout>
                </div>
            </div>
        </template>

        <!-- Default slot content below -->
        <div class="mobile-form">
            <v-layout fill-height justify-center column class="px-5 pt-10 pb-5">
                <h2 class="display-1 mb-10">Get in touch</h2>

                <contact-form hide-category-selection/>
            </v-layout>
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

    .mobile-form {
        button.v-btn {
            margin: 20px;
        }

        @media (min-width: 600px) {
            display: none;
        }
    }
</style>

<script>
  // @ is an alias to /src
  import PageLayout from '@/components/PageLayout.vue';
  import ContactBtn from '@/components/ContactBtn.vue';
  import ContactForm from '@/components/ContactForm.vue';

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
      PageLayout, ContactBtn, ContactForm
    }
  }
</script>
