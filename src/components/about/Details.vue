<template>
    <div class="main">
        <v-container>
            <v-row>
                <v-col data-aos="fade-in" cols="12" sm="12" md="6" lg="6">
                    <v-img src="https://images.pexels.com/photos/1367270/pexels-photo-1367270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></v-img>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <h2 data-aos="fade-up">Our History</h2>
                    <p data-aos="fade-up" class="title">
                        How an idea became a business
                    </p>
                    <p data-aos="fade-up" class="subtitle text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam maiores deleniti quam aliquid rerum ratione itaque, repellat porro iure molestias, hic atque nam eveniet asperiores modi expedita impedit accusamus harum numquam voluptates. Eligendi animi impedit veritatis consequatur repudiandae pariatur.
                    </p>
                    <h2 data-aos="fade-up" data-aos-delay="300">Our Vision</h2>
                    <p data-aos="fade-up" data-aos-delay="300" class="subtitle text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam maiores deleniti quam aliquid rerum ratione itaque, repellat porro iure molestias, hic atque nam eveniet asperiores modi expedita impedit accusamus harum numquam voluptates. Eligendi animi impedit veritatis consequatur repudiandae pariatur.
                    </p>

                    <v-btn class="mr-3" color="#FF1644" rounded outlined icon>
                        <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn class="mr-3" color="#FF1644" rounded outlined icon>
                        <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn color="#FF1644" rounded outlined icon>
                        <v-icon>mdi-phone</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import aosMixin from "@/mixins/aos.js";

export default {
    name: "Details",
    mixins: [aosMixin],
}
</script>

<style scoped>
.main {
    margin: 22px 0;
}
</style>
