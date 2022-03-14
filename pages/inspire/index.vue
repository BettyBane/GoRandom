<template>
<div>
  <v-row>
    <v-col class="text-center">
      <!-- <img src="/v.png" alt="Vuetify.js" class="mb-5" /> -->
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>    
  </v-row>
<App-Country-Card></App-Country-Card>
</div>
  
</template>

<script>
import {mapState, mapActions} from 'vuex'
    export default {
      name: 'InspirePage',
        data(){ return {}},
        computed: mapState(['num1', 'countries']),
        methods: {
          ...mapActions(['RandomizeCode', 'getSth'])
        } 
    }

</script>
