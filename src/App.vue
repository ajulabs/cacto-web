<script setup>
import BtnSejaMember from './components/Buttons/BtnSejaMember.vue';
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import HeroSectionTwo from './components/HeroSectionTwo.vue';

</script>

<template>
    <div class="mainLayout">
        <Header class="header"/>
        <HeroSection/>
        <!-- <HeroSectionTwo/> -->
    </div>
</template>

<style scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
    }
</style>
