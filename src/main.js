import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.prototype.products = [
  {
    "title": "Detergent fragrances",
    "price": "Rs 450 / Kilogram",
    "imagePath1": "Detergent/1.jpg",
    "imagePath2": "Detergent/3.jpg",
    "imagePath3": "Detergent/6.jpg",
    "content": "Our enterprise is ranked amid one of the leading names of the industry immersed in the business of" +
      " presenting a broad plethora of Detergent Fragrances. These products are specifically processed by using" +
      " contemporary tools and technologies in tandem with industry set guidelines of quality. Additionally," +
      " the final consignment is well examined on numerous measures before final shipment. <br>" +
      "Features : <br> <ul>" +
      "<li>Soothing scent</li>" +
      "<li>Accurate composition</li>" +
      "<li>Purity</li>" +
      "</ul>"
  },
  {
    "title": "Detergent fragrances",
    "price": "Rs 450 / Kilogram",
    "imagePath1": "Detergent/1.jpg",
    "imagePath2": "Detergent/3.jpg",
    "imagePath3": "Detergent/6.jpg",
    "content": "Our enterprise is ranked amid one of the leading names of the industry immersed in the business of" +
      " presenting a broad plethora of Detergent Fragrances. These products are specifically processed by using" +
      " contemporary tools and technologies in tandem with industry set guidelines of quality. Additionally," +
      " the final consignment is well examined on numerous measures before final shipment. <br>" +
      "Features : <br> <ul>" +
      "<li>Soothing scent</li>" +
      "<li>Accurate composition</li>" +
      "<li>Purity</li>" +
      "</ul>"
  }
]

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
