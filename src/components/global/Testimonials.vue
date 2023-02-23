<template>
    <div class="main my-4">
        <v-container>
            <h1 class="text-center">Testimonials</h1>
            <v-divider></v-divider>

            <v-carousel class="mt-4" height="360" cycle delimiter-icon="mdi-minus" hide-delimiter-background>
                <v-carousel-item>
                    <v-card class="text-center mx-auto pa-4" width="350px">
                        <v-avatar size="100" color="grey">
                            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                        </v-avatar>
                        <h3>John Doe</h3>
                        <v-rating :value="5" color="#FF1644" background-color="grey" half-increments readonly></v-rating>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos unde possimus error explicabo accusantium quam perferendis, dolores, laudantium ratione laborum id?
                        </v-card-text>
                    </v-card>
                </v-carousel-item>
                <v-carousel-item>
                    <v-card class="text-center mx-auto pa-4" width="350px">
                        <v-avatar size="100" color="grey">
                            <v-img src="https://leonie.qodeinteractive.com/wp-content/uploads/2021/04/h2-testimonials-img-1.png"></v-img>
                        </v-avatar>
                        <h3>Jane Doe</h3>
                        <v-rating :value="4.5" color="#FF1644" background-color="grey" half-increments readonly></v-rating>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos unde possimus error explicabo accusantium quam perferendis, dolores, laudantium ratione laborum id?
                        </v-card-text>
                    </v-card>
                </v-carousel-item>
                <v-carousel-item>
                    <v-card class="text-center mx-auto pa-4" width="350px">
                        <v-avatar size="100" color="grey">
                            <v-img src="https://leonie.qodeinteractive.com/wp-content/uploads/2021/04/h2-testimonials-img-3.png"></v-img>
                        </v-avatar>
                        <h3>Jamma Doe</h3>
                        <v-rating :value="5" color="#FF1644" background-color="grey" half-increments readonly></v-rating>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quos unde possimus error explicabo accusantium quam perferendis, dolores, laudantium ratione laborum id?
                        </v-card-text>
                    </v-card>
                </v-carousel-item>
            </v-carousel>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Testimonials"
}
</script>

<style scoped>

</style>
