<template>
    <div>
<!-- <v-app> -->
    <v-container>
        <v-btn class="randBtn" @click="RandomizeCode" >
            RANDOMIZE!  
        </v-btn>
        <v-btn class="getBtn" @click="getSth" >
            GET COUNTRY!  
        </v-btn>
    </v-container>
    <v-container v-if="Ccountry">
        <h3>you got.....{{ Cname }}</h3>
        <p>NAME : {{ Ccountry.name }}</p>
        <p>CODE: {{ Ccountry.code }}</p>
        <p>NATIVE NAME: {{ Ccountry.native }}</p>
        <p>PHONE CODE: {{ Ccountry.phone }}</p>
        <p>CONTINENT: {{ Ccountry.continent.name }}</p>
        <p>CURRENCY: {{ Ccountry.currency }}</p>
        <p v-for="langs in Ccountry.languages" :key="langs.code"> LANGUAGE: {{ langs.name }}</p>
    </v-container>
<!-- </v-app> -->
    <NuxtLink to="/inspire" >
        <v-container>
            <v-btn class="expBtn">Explore Country</v-btn>
        </v-container>
    </NuxtLink>
    
    </div>
</template>

<script>
// import axios from '@nuxtjs/axios'
    export default {
        asyncData(context){
            console.log(context);
        },
      
        data() {
            return {
                Ccountry: null ,
                Cname: null,
                num1: 0,

            }   
        }, 
        methods: {
            async getSth(){
                const {data} = await this.$axios.post('https://countries.trevorblades.com/graphql',
                    {
                        query: `
                            query Query {
                                countries {
                                    code
                                    name
                                    native
                                    phone
                                    continent {
                                        name
                                        }
                                    currency
                                    languages {
                                        code
                                        name
                                        native
                                        }
                                    emoji
                                    emojiU
                                }
                                }`
                    }
                );
                this.Cname = data.data.countries[this.num1].name;
                this.Ccountry = data.data.countries[this.num1];
                console.log(this.Cname);
                console.log(this.num1);
                console.log(data.data.countries[this.num1]);
            },
            RandomizeCode() {
                console.log("works");
                this.num1 = Math.floor(Math.random() * 250);
                console.log(this.num1);
            },
        }
    }
</script>

<style scoped>

</style>