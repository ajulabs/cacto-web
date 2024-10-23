<script setup>
import BtnSejaMember from './BtnSejaMember.vue';

</script>


<template>
    <main>
        <div class="container">
            <div class="imgOne">
                <img src="/src/assets/people-dumbbells 1.png" alt="">
            </div>
            <div class="main-txt">
                <h1>SEUS RESULTADOS, NOSSO COMPROMISSO!</h1>
                <h2>Na <img class="icon-logo" src="/src/assets/cacto_logo.svg" alt=""> você descobre o prazer se exercitar. <br>Venha transformar os seus objetivos de boa forma e saúde em realidade.</h2>
                <BtnSejaMember/>
            </div>
        </div>
    </main>
</template>

<style scoped>

    .container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items:center;
        width: 100%;
}
    .imgOne {
        width: 100%;
        height: 902px;
        max-width: 1440px;
        position: relative;
}
    .imgOne img {
        width: 100%;
        height: 902px;
        max-width: 1440px;
        margin-top: 7rem;
        object-fit: cover;
}
    .main-txt {
        position: absolute;
        bottom: 1.25rem;
        left: 50%;
        transform: translate(-50%);
        text-align: center;
        color: #FFFFFF;
}
    h1, h2 {
        margin: 0;
        font-family: 'Poppins',sans-serif;
}
    h1 {
        width: 1038px;
        font-size: 4.8rem;
        font-weight: 700;
        line-height: 5.7rem;
        text-align: left;
}
    h2 {
        font-family: Poppins;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.6rem;
        padding-bottom: 1.5rem;
}
    .icon-logo {
        vertical-align: middle;
        padding: 0.3rem;
        height: 2.1rem;
        width: auto;
}
    @media(max-width:1440px){
    }

    /* Smartphones pequenos */
    @media(max-width:575px){
        .imgOne {
            max-height: 100vh;
        }

        .imgOne img {
            height: auto;
        }

        .main-txt {
            width: 100vw;
            bottom: 0.2rem;
            transform: translate(-50%);
        }

        .icon-logo {
            padding: 0;
            height: 0.5rem;
        }

        h1 {
            /* font-size: 0.7rem; */
            line-height: 0.6rem;
            text-align: center;
            padding: 0px 0px 3px 0px;
        }

        h2 {
            /* font-size: 0.45rem; */
            padding: 0;
            line-height: 0.7rem;
        }
    }
</style> 