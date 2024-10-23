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
        z-index: 1000;
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


/* Smartphones pequenos */
    @media(max-width:575px){

    .content {
        height: 1.5rem;
        padding: 0;
    }

    nav {
        padding: 0;
    }

    .logo {
        width: 6rem;
        padding: 0.3rem ;
        margin-left: 1rem;
        height: auto;
    }

    .logo img {
        width: 50%;
        height: auto;
    }

    .menu-ic {
        display: block;
        font-size: 0.5em;
    }

    .ul {
        position: fixed;
        top: 0%;
        left: 62%;
        width: 50%;
        height: 100%;
        padding-left: 4%;
        padding-top: 1rem;
        background: #1A1A1A;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        transform:translateX(100%);
        transition: 0.3s ease;
    }

    .ul-open {
        transform: translateX(0);
    }

    .ul li {
        padding-top: 0.2rem;
        margin-top: 1.3rem;
        font-size: 0.5rem;
    }

    }

</style>