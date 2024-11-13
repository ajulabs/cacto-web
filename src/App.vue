<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
    <div>
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

@media (max-width:1420px){
    html {
        font-size: 58%;
    }
}
@media (max-width: 1024px) {
    html {
        font-size: 58%;
    }
}
@media (max-width: 970px ){
    html {
        font-size: 54%;
    }
}
@media (max-width: 963px ) {
    html {
        font-size: 51%;
    }
}
@media (max-width: 909px ) {
    html {
        font-size: 49%;
    }
}
@media (max-width: 890px) {
    html {
        font-size: 47%;
    }
}
@media (max-width: 873px ) {
    html {
        font-size: 45%;
    }
}
@media (max-width: 855px ) {
    html {
        font-size: 45%;
    }
}
@media (max-width: 802px ) {
    html {
        font-size: 44%;
    }
}
@media (max-width: 784px ) {
    html {
        font-size: 43%;
    }
}
@media (max-width: 768px) {
    html {
        font-size: 41%;
    }
}
@media (max-width: 730px ) {
    html {
        font-size: 40%;
    }
}
@media (max-width: 713px ) {
    html {
        font-size: 45%;
    }
}
@media (max-width: 623px ) {
    html {
        font-size: 44%;
    }
}
@media (max-width: 606px ) {
    html {
        font-size: 38%;
    }
}
@media (max-width: 575px) {
    html {
        font-size: 40%;
    }
}

@media (max-width: 515px ) {
    html {
        font-size: 27%;
    }
}
@media (max-width: 498px ) {
    html {
        font-size: 34%;
    }
}
@media (max-width: 462px ) {
    html {
        font-size: 40%;
    }
}

@media (max-width: 357px) {
    html {
        font-size: 37%;
    }
}
</style>
