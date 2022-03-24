<template>
    <div>
    <v-container>
        <!-- <v-btn class="randBtn" @click="getRandNum" >
            RANDOMIZE!  
        </v-btn> -->
        <p v-if="randNum"> You got the lucky number: {{ randNum }}! </p>
        <v-btn v-if="randNum" class="randBtn" @click="getCountry(randNum)" >
            GET COUNTRY {{ randNum }}  
        </v-btn>
        <p v-if="country"> {{ country.name }}</p>
    </v-container>
    <NuxtLink to="/inspire" >
        <v-container>
            <v-btn v-if="country" class="expBtn">Explore Country</v-btn>
        </v-container>
    </NuxtLink>   
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
    export default {
        data() {
            return {
            }   
        },
        computed: mapState(['randNum', 'country']),       
        methods: {
            ...mapActions(['getRandNum', 'getCountry'])
        }
    }
</script>

<style scoped>

</style>