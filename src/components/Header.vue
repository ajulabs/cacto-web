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
/* Responsividade */
    @media (max-width: 768px) {
    nav {
        max-width: 768px;
        padding: 1rem;
    }
    .ul {
        justify-content: space-evenly;
    }
    }

    @media (max-width: 720px) {
        .content {
            max-height: 68px;
        }
        nav {
            padding: 0 4rem;
        }
    }

    @media(max-width:575px){

    .content {
        max-width: 575vw;
        max-height: 68px;
        padding: 0;
    }

    nav {
        max-width: 575px;
        padding: 2rem;
        justify-content: flex-start;
    }

    .logo {
        width: 100%;
        max-width: 130px;
        max-height: 50px;
    }

    .logo img {
        width: 100%;
        max-width: 575px;
    }

    .ul {
        justify-content: space-evenly;
        align-items: center;
    }

    .ul li {
        justify-content: space-evenly;
        align-items: center;
    }
    }

    @media (max-width: 500px){
    .logo {
        max-width: 110px;
    }
    }

    @media (max-width: 480px ) {
    .content {
        max-height: 58px;
    }
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .logo img {
        max-width: 100%;
    }
    }

    @media (max-width: 455px ) {
    nav {
        padding: 1rem;
    }
    }

    @media(max-width: 425px){
    .content {  
        max-width: 575vw;
        max-height: 48px;
        padding: 0;
    }

    nav {
        max-width: 375px;
        justify-content: space-between;
        align-items: center;
        padding-left: 6rem;
    }

    .logo {
        max-width: 120px;
    }

    .logo img {
        width: 100%;
    }

    .menu-ic {
        display: block;
        font-size: 2.5em;
    }

    .ul {
        position: fixed;
        top: 0%;
        left: 62%;
        width: 100%;
        height: 100%;
        padding-left: 4%;
        padding-top: 1rem;
        background: #1A1A1A;
        flex-direction: column;
        justify-content: space-around;
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
    
    @media (max-width: 384px) {
        .menu-ic {
            margin-right: 4rem;
            margin-left: 2rem;
        }
    }

</style>