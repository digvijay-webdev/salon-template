<template>
    <div class="main">
        <v-container>
            <v-row>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <v-card elevation="0">
                        <v-card-title>
                            Get In Touch With Us
                        </v-card-title>
                        <v-card-text>
                            <p class="subtitle">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis deserunt adipisci dicta doloribus quaerat obcaecati eligendi reiciendis.
                            </p>

                            <div class="buttons">
                                <div>
                                    <v-btn width="220" link href="tel:+447831358032" color="primary" large rounded outlined>
                                        <v-icon class="mr-2">mdi-phone</v-icon> +44 7831358XXX
                                    </v-btn>
                                </div>
                                <div class="my-2">
                                    <v-btn width="220" link href="https://api.whatsapp.com/send?phone=447831358032" color="green" large rounded outlined>
                                        <v-icon class="mr-2">mdi-whatsapp</v-icon> +44 7831358XXX
                                    </v-btn>
                                </div>
                                <div>
                                    <v-btn width="220" link href="mailto:connecttodigvijay@gmail.com" color="warning" large rounded outlined>
                                        <v-icon class="mr-2">mdi-email</v-icon> Send Us Email
                                    </v-btn>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <!-- Map -->
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.6123365941567!2d-0.1056698842810969!3d51.37342302831115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760730ca08da91%3A0xdaac95760387126e!2sChurch%20St%2C%20Croydon!5e0!3m2!1sen!2suk!4v1677592398157!5m2!1sen!2suk" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Details",

}
</script>

<style scoped>

</style>
