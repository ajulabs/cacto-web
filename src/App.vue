<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
    <div class="mainLayout">
        <Header class="header"/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<style scoped>
    .header {
        position: fixed;
        z-index: 1000;
    }

</style>
