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
        width: 100%;
        height: auto;
        max-width: 1440px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items:center;
        margin: 0 auto;
}
    .imgOne {
        width: 100%;
        max-width: 1440px;
}
    .imgOne img {
        width: 100%;
        max-width: 1440px;
        position: relative;
        object-fit: cover;
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
    @media(max-width:1475px){
        .container {
            max-width: 1400px;
            padding: 0 1rem;
        }
    }

    @media (max-width:1440px) {
        .main-txt {
            bottom: 14.25rem;
        }
    }

    @media (max-width: 1420px){
        .container {
            max-width: 1420px;
        }
        .imgOne img{
            max-width: 1400px;
        }
    }

    @media (max-width: 1400px) {
        .main-txt {
            bottom: 10rem;
        }
    }

    @media (max-width: 1075px) {
        .container {
            max-width: 100%;
        }
        .imgOne {
            max-width: 100vw;
        }
        .imgOne img {
            max-width: 100vw;
        }
        .main-txt {
            bottom: 8rem;
        }
    }

    @media (max-width: 1024px ) {
        .main-txt {
            bottom: 6rem;
        }
    }

    @media (max-width:970px) {
        .main-txt {
            bottom: 4rem;
            padding: 0 4rem;
        }
    }

    @media(max-width:575px){

        .main-txt {
            max-width: 575px;
            bottom: 1rem;
        }

        .icon-logo {
            padding: 0;
        }

        h1 {
            max-width: 575px;
            padding: 0px 0px 3px 0px;
        }
    }

    @media (max-width: 425px) {
        .imgOne {
            margin-top: 4rem;
        }
        h1 {
            font-size: 2.7rem;
            line-height: 2.5rem;
        }
        h2 {
            font-size: 1.5rem;
            line-height: 2rem;
        }
    }

    @media (max-width: 375px) {
        .imgOne {
            margin-top: 6rem;
        }
        h1 {
            font-size: 2.3rem;
            line-height: 2rem;
        }
        h2 {
            font-size: 1.1rem;
            line-height: 2rem;
        }
    }

    @media (max-width: 375px) {
        .main-txt {
            max-width: 328px;
        }
        .imgOne {
            margin-top: 7rem;
        }
        h1 {
            font-size: 2rem;
            line-height: 2.4rem;
            font-weight: 600;
            text-align: center;
            margin-bottom: 1rem;
        }
        h2 {
            display: none;
        }
    }

</style> 