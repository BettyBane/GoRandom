<template>
    <div>
        <p> </p>
        <v-container v-if="countries">
        <p>NAME : {{ countries.name }}</p>
        <p>CODE: {{ countries.code }}</p>
        <p>NATIVE NAME: {{ countries.native }}</p>
        <p>PHONE CODE: {{ countries.phone }}</p>
        <p>CONTINENT: {{ countries.continent.name }}</p>
        <p>CURRENCY: {{ countries.currency }}</p>
        <p v-for="langs in countries.languages" :key="langs.code"> LANGUAGE: {{ langs.name }}</p>
    </v-container>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
    export default {
        data(){ return {}},
        computed: mapState(['num1', 'countries']),
        methods: {
          ...mapActions(['RandomizeCode', 'getSth'])
        } 
    }
</script>

<style scoped>

</style>