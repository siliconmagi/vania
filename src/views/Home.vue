<template>
  <div>
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


  export default {
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
      }, 1000)
    }
  }
  </script>

  <style>
  body {
    text-align: center;
    font-family: Helvetica, sans-serif;
  }
  </style>
