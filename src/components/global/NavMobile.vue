<template>
    <header>
        <v-app-bar fixed>
            <v-toolbar-title>
                <router-link to="/">Precious Salon</router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        </v-app-bar>

        <!-- drawer -->
        <v-navigation-drawer v-model="drawer" fixed>
            <!-- frame -->
            <div class="frame">
                <div class="overlay">
                    <h3>Welcome to Precious <br> <small style="font-weight: normal;">The house of fashion</small></h3>
                </div>
            </div>

            <!-- list/links -->
            <v-list list dense>
                <v-list-item-group v-model="group" active-class="red--text text--accent-3">
                    <router-link to="/">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/about">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-account</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>About us</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/services">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-store</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Services</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/contact">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-map</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Contact us</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </header>
</template>

<script>
export default {
    name: "NavMobile",
    data() {
        return {
            group: null,
            drawer: false
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: #FF1644 !important;
}

.frame {
    background: url(https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2) no-repeat;
    background-position: center;
    background-size: cover;
    height: 220px;
    width: 100%;
    position: relative;
}

.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #0000007d;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: end;
}

.overlay h3 {
    color: #fefefe;
    padding: 12px 6px;
}
</style>
