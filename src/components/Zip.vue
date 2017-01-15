<template>
  <div class="Zip">
    <input type="text" placeholder="Starting Zip" v-model="startZip">
    <span class="city span">{{startCity}}</span>
    <input type="text" placeholder="Ending Zip">
    <span class="city span"></span>
    <button v-on:click="triggered" id="submit-form">Submit</button>
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>
  import debounce from 'lodash/debounce'
import axios from 'axios'

export default {
  name: 'Zip',
  mounted() {
    console.log('welcome!')
  },
  data() {
    return {
      startZip: '',
      startCity: '',
      endZip: '',
      endCity: ''
    }
  },
  watch: {
    startZip: function () {
      this.startCity = ''
      if (this.startZip.length == 5) {
        this.lookupZip()
      }
    }
  },
  methods: {
    triggered: function (event) {
      console.log('Triggered')
    },
    lookupZip: debounce(function() {
      this.startCity = "Searching..."
      axios.get('http://ziptasticapi.com/' + this.startZip)
        .then((response) => {
          this.startCity = response.data.city + ', ' + response.data.state
        })
        .catch((error) => {
          this.startCity = 'Invalid Zipcode'
        })
    }, 500)
  }
}
  </script>

  <style scoped>
  .Zip {
    text-align: center;
  }
  </style>
