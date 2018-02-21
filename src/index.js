import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import { tours } from './data.json'
 
Vue.use(Vuetify)

const app = new Vue({
  el: '#app',
  data () {
    return {
      search: '',
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Price', value: 'price' },
        { text: 'Currency', value: 'currency' },
        { text: 'Rating', value: 'rating' },
        { text: 'Special Offer', value: 'isSpecialOffer' }
      ],
      items: tours
    }
  }
})
