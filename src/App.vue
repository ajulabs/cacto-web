<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
    <div class="mainLayout">
        <Header/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

    :root {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: 0;
    }
    html {
        font-size: 62.5%;
    }
</style>
