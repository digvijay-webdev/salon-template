<template>
    <header>
        <v-app-bar fixed>
            <v-toolbar-title>
                <router-link class="logo ml-4" to="/">Precious Salon</router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <router-link class="nav-link mr-4" to="/">Home</router-link>
            <router-link class="nav-link mr-4" to="/about">About us</router-link>
            <router-link class="nav-link mr-4" to="/services">Services</router-link>
            <router-link class="nav-link mr-4" to="/contact">Contact us</router-link>
        </v-app-bar>
    </header>
</template>

<script>
export default {
    name: "NavDesktop"
}
</script>

<style scoped>
a {
    text-decoration: none;
}

.logo {
    color: #FF1644 !important;
}

.nav-link {
    color: #333;
}

.nav-link::after {
    content: "";
    width: 0px;
    height: 1px;
    background: #000;
    display: block;
    transition: all .3s ease;
}

.nav-link:hover::after {
    width: 100%;
}

.router-link-exact-active {
    color: #FF1644;
}
</style>
