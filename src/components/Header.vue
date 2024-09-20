<script setup>
import {ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faBars);

const isMenuopen = ref(false);

const handleMenuClick = () => {
    isMenuopen.value = !isMenuopen.value;

};

</script>

<template>
    <div class="container">
        <header>
            <div class="content">
                <nav>
                    <div class="logo">
                        <img src="@/assets/cacto_logo.svg" alt="Logo"/>
                    </div>
                    <ul :class="{'ul': true, 'ul-open': isMenuopen }">
                        <li class="Home"><a href="#">Início</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Benefícios</a></li>
                        <li><a href="#">Atendimento Especializado</a></li>
                        <li><a href="#">Planos</a></li>
                    </ul>
                    <div class="menu-ic" @click="handleMenuClick">
                        <font-awesome-icon icon="bars" size="2x" />
                    </div>
                </nav>
            </div>
        </header>
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    .container{
        background:#1A1A1A;
        box-shadow: 0px 4px 18px 0px #00000014;
        width: 100%;
    }

    .li {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.5rem;
    }

    .content {
        max-width: 90rem;
        height: 4.875rem;
        padding: 0 5%;
        margin: 0 auto;
        gap: 0px;
        opacity: 0px;
    }

    nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 1rem;
    }

    .logo {
        width: 7.913rem;
        height: 2.29rem;
        gap: 0px;
        opacity: 0px;
    }

    .ul {
        display: flex;
        align-items: center;
        opacity: 0px;
    }
    .ul li {
        margin: 0 1.188rem;
        font-size: 1rem;
    }

    .ul li a {
        color: #FF6400;
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