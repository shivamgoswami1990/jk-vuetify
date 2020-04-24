import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import VueMeta from 'vue-meta'

Vue.use(Vuetify)
Vue.use(VueMeta)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#F50E02',
        secondary: '#F5F4FF',
        accent: '#191919',
        error: '#FF5252',
        info: '#191919',
        success: '#4CAF50',
      },
    },
  },
  icons: {
    iconfont: 'mdi'
  }
})

