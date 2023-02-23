<template>
    <div class="main">
        <v-container>
            <v-divider></v-divider>
            
            <p class="text-center mt-2">
                <a href="tel:+447831358032">
                    <v-icon>mdi-phone</v-icon>
                </a>
                <a href="mailto:connecttodigvijay@gmail.com">
                    <v-icon>mdi-email</v-icon>
                </a>
                <a href="https://api.whatsapp.com/send?phone=447831358032">
                    <v-icon>mdi-whatsapp</v-icon>
                </a>
                <a href="https://goo.gl/maps/yh3VRJvMzdKhvtgE6" target="_blank">
                    <v-icon>mdi-map</v-icon>
                </a>
            </p>

            <v-row>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <p class="p-left caption">Copyrights &copy; Precious Salon, 2023</p>
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="6">
                    <p class="p-right caption">Created at by: <a href="https://digvijay.tech" target="_blank">Digvijay</a></p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.main {
    margin-top: 18px;
    background: #fefefe;
}

p a {
    text-decoration: none;
    margin: 0 12px;
}

.p-right {
    text-align: right;
}

@media screen and (max-width: 960px) {
    .p-right, .p-left {
        text-align: center;
    }
}
</style>
