<script setup>
import {ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { RouterLink } from 'vue-router';

library.add(faBars);

const isMenuopen = ref(false);

const handleMenuClick = () => {
    isMenuopen.value = !isMenuopen.value;

};

</script>

<template>
    <div class="container">
            <div class="content">
                <nav>
                    <div class="logo">
                        <img src="@/assets/cacto_logo.svg" alt="Logo"/>
                    </div>
                    <ul :class="{'ul': true, 'ul-open': isMenuopen }">
                        <li class="Home"><router-link to="/">Início</router-link></li>
                        <li><router-link to="/Produtos">Produtos</router-link></li>
                        <li><router-link to="/Beneficios">Benefícios</router-link></li>
                        <li><router-link to="/AtendimentoEspecializado">Atendimento Especializado</router-link></li>
                        <li><router-link to="/Planos">Planos</router-link></li>
                    </ul>
                    <div class="menu-ic" @click="handleMenuClick">
                        <font-awesome-icon icon="bars" size="2x" />
                    </div>
                </nav>
            </div>
    </div>
</template>

<style scoped>

    .content {
        width: 100%;
        height: 78px;
        max-width: 100vw;
        padding-top: 2rem;
        position: fixed;
        z-index: 100;
        background:#1A1A1A;
        box-shadow: 0px 4px 18px 0px #00000014;
    }
    .ul {
        width: 100%;
        height: 24px;
        max-width: 584px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .ul li a {
        font-family: 'DM+Sans', sans-serif;
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 2.4rem;
        color: #FF6400;
    }
    nav {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .logo {
        width: 100%;
        max-width: 126.6px;
        height: 36.64px;
    }
    .menu-ic {
        display: none;
        position: relative;
        z-index: 1000;
        color: #FF6400;
    }

    @media(max-width: 480px){
    .content {  
        max-width: 575vw;
        max-height: 70px;
        margin: 0 auto;
        padding: 1rem;
    }

    .logo img {
        width: 100%;
    }

    .menu-ic {
        display: block;
        font-size: 2rem;
    }

    .ul {
        position: fixed;
        top: 5%;
        left: 52%;
        flex-direction: column;
        justify-content: flex-start;
        gap: 5rem;
        align-items: flex-start;
        transform:translateX(100%);
        transition: 0.3s ease;
    }   

    .ul-open {
        width: 100%;
        max-width: 250px;
        height: 100vh;
        transform: translateX(0);
        margin: 0 auto;
        background: #1A1A1A;
    }

    .ul li {
        width: 100%;
        max-width: 130px;
        margin-top: 2rem;
        padding: 1rem;
    }

    .ul li a {
        font-size: 1.5rem;
    }
    }

</style>