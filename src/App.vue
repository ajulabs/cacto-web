<script setup>
import BtnSejaMember from './components/BtnSejaMember.vue';
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import HeroSectionTwo from './components/HeroSectionTwo.vue';

</script>

<template>
    <div class="mainLayout">
        <Header class="header"/>
        <HeroSection/>
        <HeroSectionTwo/>
    </div>
</template>

<style scoped>
    .header {
        position: fixed;
        z-index: 1000;
    }
</style>
