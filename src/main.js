import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.prototype.products = [
  {
    "id": 1,
    "title": "Incense fragrances",
    "imagePath1": "Incense/1.jpg",
    "imagePath2": "Incense/5.jpg",
    "content": "From time immemorial, incense has been burnt during worship and festivities for creating the ambience" +
      " to attain solace and spirituality. In modern times, it has become a tool to create a happening mood to welcome" +
      " someone you like, an aura to relax or enhance your spirit. Be it light & breezy floral/fruity blends, rich & " +
      "heavy oriental notes or warm woody/earthy aromas, experienced perfumers at J.K Aromatics & Perfumers bring you " +
      "a full spectrum of natural fragrances as well as synthetic ones - creatively designed with the highest quality" +
      " ingredients. The premier fragrance and flavor house pays meticulous attention to processing purity and perfect" +
      " balancing of 'notes' so that our valued customers may choose from the finest of fragrance range and create" +
      " incense brands.",
    "isFeatured": true
  },
  {
    "id": 2,
    "title": "Detergent fragrances",
    "imagePath1": "Detergent/1.jpg",
    "imagePath2": "Detergent/6.jpg",
    "content": "Our enterprise is ranked amid one of the leading names of the industry immersed in the business of" +
      " presenting a broad plethora of Detergent Fragrances. These products are specifically processed by using" +
      " contemporary tools and technologies in tandem with industry set guidelines of quality. Additionally," +
      " the final consignment is well examined on numerous measures before final shipment. <br>" +
      "Features : <br> <ul>" +
      "<li>Soothing scent</li>" +
      "<li>Accurate composition</li>" +
      "<li>Purity</li>" +
      "</ul>",
    "isFeatured": true
  },
  {
    "id": 3,
    "title": "Cooler Perfume Extra",
    "imagePath1": "",
    "imagePath2": "",
    "content": "With the inclusion of pioneering machines in all processes, we are indulged in presenting a broad" +
      " compilation of CoolerPerfume Extra. The products provided by us are highly required for their numerous packing" +
      " options and soothing smell. These products are inspected under the direction of knowledgeable personnel against" +
      " numerous restrictions of quality to make sure a perfect range at our patron’s end.<br>" +
      "Features : <br> <ul>" +
      "<li>No impurity</li>" +
      "<li>Pleasant smell</li>" +
      "<li>Highly effective</li>" +
      "</ul>"
  },
  {
    "id": 4,
    "title": "Appu Cooler Perfume",
    "imagePath1": "",
    "imagePath2": "",
    "content": "We are prominently involved in presenting a comprehensive plethora of Appu Cooler Perfume. The " +
      "presented gamut is made up employing pristine-grade inputs and highly advances technology in tandem with the" +
      " guidelines of quality. In addition to this, the presented collection is examined on numerous merits to preserve" +
      " its authenticity throughout the process. We offer them in normal as well as altered forms.<br>" +
      "Features : <br> <ul>" +
      "<li>Perfect scent</li>" +
      "<li>Durable</li>" +
      "<li>Chemical resistance</li>" +
      "</ul>"
  },
  {
    "id": 5,
    "title": "Soap Fragrances",
    "imagePath1": "Soap/1.jpg",
    "imagePath2": "Soap/6.jpg",
    "content": "Backed by our vast experience and a talented team of workers, we are delivering a best series of " +
      "Soap Fragrances. The mentioned assortment is developed utilizing supreme grade substances and allied material," +
      " source from the certified vendors of the industry. In addition to this, the mentioned range is highly in" +
      " demand in the industry for nourishment of skin and eliminating skin impurities due to its gentle lather.<br>" +
      "Features : <br> <ul>" +
      "<li>Pleasing fragrance</li>" +
      "<li>Skin friendly</li>" +
      "<li>Makes skin fresh and charming</li>" +
      "</ul>"
  },
  {
    "id": 6,
    "title": "Fabric Fragrances",
    "imagePath1": "Fabric/1.jpg",
    "imagePath2": "Fabric/6.jpg",
    "content": "We are a prominent name actively engaged in delivering a large variety of FabricFragrances to vast" +
      " customers’ base across the nation. The offered items are appreciated for its refreshing smell. Our workers " +
      "ensure to supply this range in standard as well as customized packaging in order to cater to the aesthetic" +
      " necessities of clients.<br>" +
      "Features : <br> <ul>" +
      "<li>Purity</li>" +
      "<li>Soothing fragrance</li>" +
      "<li>Skin friendly</li>" +
      "</ul>"
  },
  {
    "id": 7,
    "title": "Aromatherapy Fragrances",
    "imagePath1": "Aromatherapy/1.jpg",
    "imagePath2": "Aromatherapy/6.jpg",
    "content": "Our firm specializes in presenting an unmatched compilation of Aromatherapy Fragrances. So as to" +
      " preserve industry defined quality norms & principles, the complete variety is processed using finest grade" +
      " material and avant-garde technology. More to this, these products are examined properly by quality examiners" +
      " upon distinct limitations of quality. Patrons can avail them from us market leading rates." +
      "<br>" +
      "Features : <br> <ul>" +
      "<li>Soothing aroma</li>" +
      "<li>Longer shelf life</li>" +
      "<li>Safer to use</li>" +
      "</ul>"
  },
  {
    "id": 8,
    "title": "Cosmetics Fragrances",
    "imagePath1": "Cosmetics/1.png",
    "imagePath2": "Cosmetics/6.jpg",
    "content": "With the aid of our adroit and deft personnel, we are able to present an incomparable gamut of" +
      " Cosmetics Fragrances. The offered variety is inspected on several modified provisions and forms in" +
      " accordance with the diverse demands of patrons. In addition to this, the presented variety is made" +
      " up in stern global quality guidelines. We offer them in temper proof packaging at affordable rates." +
      "<br>" +
      "Features : <br> <ul>" +
      "<li>Fine packing</li>" +
      "<li>Reliable</li>" +
      "<li>Long lasting</li>" +
      "</ul>"
  },
  {
    "id": 9,
    "title": "Perfume spray",
    "imagePath1": "Spray/1.jpg",
    "imagePath2": "Spray/6.jpg",
    "content": "If you are familiar with the brand, you know this is not merely Perfume Spray," +
      " but they do serve that purpose.  I love to put the serum on my hands and run it through my hair." +
      " The Pure Energy is my favorite for this particular use, with notes of grapefruit, coffee, black pepper," +
      " and cinnamon.  These do come as perfumes if you are okay with alcohol-based fragrance."
  },
  {
    "id": 10,
    "title": "Roll On Fragrances",
    "imagePath1": "",
    "imagePath2": "",
    "content": "Keeping in pace with time, we successfully offer best range of Roll On Fragrances in the market. " +
      "The mentioned range is developed using modern techniques and natural ingredients in complete compliance with" +
      " the market laid standards and norms. The offered item is accessible in various forms and stipulation to meet" +
      " various requirements of patrons." +
      "<br>" +
      "Features : <br> <ul>" +
      "<li>Longer shelf life</li>" +
      "<li>Pure</li>" +
      "<li>Appealing fragrance</li>" +
      "</ul>"
  },
  {
    "id": 11,
    "title": "Synthetic Essential Oils",
    "imagePath1": "SyntheticOils/1.jpg",
    "imagePath2": "SyntheticOils/6.jpg",
    "content": "We being a highly illustrious name of the nation are enthusiastically indulged in presenting a " +
      "superlative gamut of Synthetic Essential Oils. Prepared with excellence, these products are made in line " +
      "with the set guidelines of excellence. Furthermore, their accurate composition makes these highly commended." +
      " These are accessible from the market at the affordable rates." +
      "<br>" +
      "Features : <br> <ul>" +
      "<li>Soothing</li>" +
      "<li>Freshness</li>" +
      "<li>No side effect</li>" +
      "</ul>"
  },
  {
    "id": 12,
    "title": "Fine Fragrance",
    "imagePath1": "Fine/1.jpg",
    "imagePath2": "Fine/6.jpg",
    "content": "Manufacturers across the globe Fine Fragrance seek to introduce most appropriate & exquisite aromas" +
      " to ensure better brand positioning and greater product success. Our refined aesthetics, extensive knowledge" +
      " of perfumery and master craftsmanship have won the trust of leading fragrance labels and helped create unique" +
      " brand identities coveted by millions of end-users. The art of designing a signature fragrance is like creating" +
      " an aromatic symphony which not only calls for creative perception but also requires most advanced technology" +
      " tools for capturing the most bewitching of aromas ever inspired by nature.",
    "isFeatured": true

  },
  {
    "id": 13,
    "title": "Natural Essential Oils",
    "imagePath1": "NaturalOils/1.jpg",
    "imagePath2": "NaturalOils/6.jpg",
    "content": "Our firm is involved in delivering a vast series of Natural Essential Oils to valued customers. " +
      "The offered items are made with the help of modern techniques and optimum grade ingredients in compliance" +
      " with the set market quality. In addition to this, the mentioned range is accessible in variety of packaging" +
      " according to the diverse necessities of respectable patrons. Features : Best quality No sides effect highly" +
      " effective"
  },
  {
    "id": 14,
    "title": "Candle fragrances",
    "imagePath1": "",
    "imagePath2": "",
    "content": "Candle Fragrances are no more only used for lighting-up your home or saying prayers, but to create" +
      " an ambience to warm your spirit and engulf you in aromatic treat. We create tailor-made fragrances for candles " +
      "as per its design or color to tranquilize you and give therapeutic experience. Whether you are looking for an" +
      " exclusive natural fragrance or want us to create unique & complex blend of essential oils, the vast knowledge" +
      " of our master perfumers will help achieve your goals. The ever-growing range of fragrances from J.K Aromatics" +
      " & Perfumers enlivens the senses and recharges the mind to create a mood to pray or play."
  }
]

Vue.prototype.primaryGradientColour = "linear-gradient(to top right, #F5F4FF 20%, #FFFFFF 70%)";
Vue.prototype.reversedPrimaryGradientColour = "linear-gradient(to bottom left, #FFFFFF 20%, #F5F4FF 90%)";

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
