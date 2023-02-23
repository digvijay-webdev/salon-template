<template>
    <div class="main">
        <NavMobile class="mobile-sc" />
        <NavDesktop class="desktop-sc" />
    </div>
</template>

<script>
import NavMobile from './NavMobile.vue';
import NavDesktop from './NavDesktop.vue';

export default {
    name: "Navbar",
    components: {
        NavMobile,
        NavDesktop
    }
}
</script>

<style scoped>
.desktop-sc {
    display: block;
}

.mobile-sc {
    display: none;
}

@media screen and (max-width: 820px) {
    .mobile-sc {
        display: block;
    }
    .desktop-sc {
        display: none;
    }
}
</style>
