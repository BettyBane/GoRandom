<template>
    <div>
    <v-container>
        <v-btn class="randBtn" @click="RandomizeCode" >
            RANDOMIZE!  
        </v-btn>
        <p v-if="num1"> {{ num1 }} </p>
        <v-btn class="randBtn" @click="getSth(num1)" >
            GET GET GET!  
        </v-btn>
        <p> {{ countries.name }}</p>
    </v-container>
    <NuxtLink to="/inspire" >
        <v-container>
            <v-btn class="expBtn">Explore Country</v-btn>
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
        computed: mapState(['num1', 'countries']),       
        methods: {
            ...mapActions(['RandomizeCode', 'getSth'])
        }
    }
</script>

<style scoped>

</style>