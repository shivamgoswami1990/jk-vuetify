<template>
    <!-- Route based class name -->
    <div :class="$route.name + '-page-layout'">
        <div class="banner-container" :style="{ 'height': screenHeight + 'px' }">
            <div class="background-layer">
                <div :style="leftBgCol.length > 7 ? { 'background-image': leftBgCol } : { 'background-color': leftBgCol }">
                    <img :src="require('@/assets/shape-3.svg')" class="shape-3"/>
                </div>
                <div :style="rightBgCol.length > 7 ? { 'background-image': rightBgCol } : { 'background-color': rightBgCol }"/>
                <img :src="require('@/assets/shape-2.svg')" class="shape-2"/>
            </div>

            <v-container class="foreground-layer">
                <slot name="bannerContent"></slot>
            </v-container>
        </div>

        <!-- Default slot -->
        <slot/>
        <!-- Default slot -->
    </div>
</template>

<style lang="scss">
    div[class*="-page-layout"] {
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
                }

                .shape-2 {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 140px;
                    transform: translateX(-50%) translateY(50%);

                    @media screen and (max-width: 600px) {
                        bottom: -30px;
                    }
                }
            }

            .foreground-layer {
                position: relative;
                width: 100%;
                height: 100%;
                z-index: 5;
                top: 0;
                left: 0;
            }
        }
    }
</style>

<script>
  export default {
    props: {
      leftBgCol: {
        type: String,
        default: "#FFFFFF"
      },
      rightBgCol: {
        type: String,
        default: "#F5F4FF"
      }
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
