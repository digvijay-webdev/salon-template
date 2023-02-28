<template>
    <div class="main">
        <div class="wrapper">
            <v-container class="text-center">
                <h3 style="color:#FF1644">Beauty</h3>
                <h1 style="color: #34495e">WITHIN REACH</h1>
                <v-btn href="/services" link color="#ef264e" class="mt-2 white--text" rounded>View all services</v-btn>
            </v-container>

            <v-container>
                <v-divider></v-divider>

                <v-row class="my-4">
                    <v-col cols="12" sm="12" md="6" lg="4">
                        <v-card data-aos="fade-up">
                            <v-img class="align-end" height="200" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" src="https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
                                <v-card-title class="white--text mt-8">Nails</v-card-title>
                            </v-img>

                            <v-card-text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt ad modi dolorem nemo quis doloremque debitis, quas consectetur sequi!
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="4">
                        <v-card data-aos="fade-up" data-aos-delay="300">
                            <v-img class="align-end" height="200" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
                                <v-card-title class="white--text mt-8">Hair</v-card-title>
                            </v-img>

                            <v-card-text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt ad modi dolorem nemo quis doloremque debitis, quas consectetur sequi!
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="4">
                        <v-card data-aos="fade-up" data-aos-delay="500">
                            <v-img class="align-end" height="200" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" src="https://images.pexels.com/photos/6954005/pexels-photo-6954005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
                                <v-card-title class="white--text mt-8">Facials</v-card-title>
                            </v-img>

                            <v-card-text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt ad modi dolorem nemo quis doloremque debitis, quas consectetur sequi!
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
import aosMixin from "@/mixins/aos.js";

export default {
    name: "highlights",
    mixins: [aosMixin],
}
</script>

<style scoped>
.main {
    padding: 16px 0;
}
</style>
