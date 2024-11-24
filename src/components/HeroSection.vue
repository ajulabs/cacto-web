<script setup>
import BtnSejaMember from './BtnSejaMember.vue';

</script>


<template>
    <main>
        <div class="container-main">
            <div class="imgOne">
                <img src="/src/assets/people-dumbbells 1.png" alt="">
            </div>
            <div class="container">
                <div class="main-txt">
                    <h1>SEU CORPO EM SUA MELHOR VERSÃO</h1>
                    <span class="subTitle">
                        <h2>Na <img class="icon-logo" src="/src/assets/cacto_logo.svg" alt=""> você supera limites e faz parte de uma comunidade que valoriza resultados.
                        Alcance o melhor de você com acompanhamento integral e uma experiência única.</h2>
                    </span>
                    <BtnSejaMember/>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

    .container-main {
        max-width: 100vw;
}
    .imgOne {
        width: 100%;
        height: 902px;
        position: relative;
}
    .imgOne img {
        width: 100%;
        height: 100%;
        object-fit: cover;
}
    .container {
        width: 100%;
        max-width: 1440px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items:center;
        margin: 0 auto;
}
    .main-txt {
        position: absolute;
        width: 100%;
        max-width:1440px ;
        margin: 0 auto;
        bottom: 5.25rem;
        z-index: 2;
        text-align: center;
        color: #FFFFFF;
}
    h1, h2 {
        width: 100%;
        max-width:1440px;
        margin: 0;
        font-family: 'Poppins',sans-serif;
}
    h1 {
        font-size: 4.8rem;
        font-weight: 700;
        line-height: 5.7rem;
        text-align: center;
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

    @media (max-width: 480px) {
        .container-main {
            max-width: 480px;
        }
        .main-txt {
            margin: 0 auto;
            bottom: 8rem;
        }
        .subTitle {
            display: none;
        }
        .main-txt h1 {
            font-size: 2.5rem;
            line-height: 3rem;
        }
    }

    @media (max-width: 380px ) {
        .container {
            max-width: 328px;
            height: 90px;
        }
        .main-txt {
            margin: 12rem 0;
        }
    }

    @media (max-width: 375px ) {
        .main-txt {
            margin: 26rem 0;
        }
    }

</style> 