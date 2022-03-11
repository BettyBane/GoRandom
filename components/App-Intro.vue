<template>
    <div>   
    <!-- <v-app> -->
        <!-- Must have the app property -->
        <v-app-bar app></v-app-bar>
    <v-card>
        <v-container>
            <v-row>
                <v-col cols="8">
            <v-card-title>
                <h1 class="welcome ">Welcome to GoRandom</h1>
            </v-card-title>
            <v-card-text>
                <p class="welcomeText"> Don't know where to go for Vacation? Rich enough to go anywhere? Then why not? Random pick a country to vacation in using GoRandom</p>
            </v-card-text>
        </v-col>
        <v-col cols="4">
                <v-btn x-large text rounded class='green white--text'>
                GO GO!
                <v-icon>mdi-airplane</v-icon>
            </v-btn> 
        </v-col>
            </v-row>
            
        </v-container>
        
    </v-card>
    <!-- </v-app> -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>