<template>
    <div>
        <template v-if="country">
        <p>NAME : {{ country.name }}</p>
        <p>CODE: {{ country.code }}</p>
        <p>NATIVE NAME: {{ country.native }}</p>
        <p>PHONE CODE: {{ country.phone }}</p>
        <p>CONTINENT: {{ country.continent.name }}</p>
        <p>CURRENCY: {{ country.currency }}</p>
        <p v-for="langs in country.languages" :key="langs.code"> LANGUAGE: {{ langs.name }}</p>
        </template>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
    export default {
        data(){ return {}},
        computed: {
            ...mapState(['randNum', 'country']),
        },
        methods: {
          ...mapActions(['getRandNum', 'getCountry']),
        }  
    }
</script>

<style scoped>

</style>