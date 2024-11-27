<script setup>
import BtnSejaMemberTwo from '@/components/BtnSejaMemberTwo.vue';
import CardModallities from '@/components/CardModallities.vue';
import MenuModalities from '@/components/MenuModalities.vue';
import TitleTextTwo from '@/components/TitleTextTwo.vue';



</script>

<template>
    <div class="Production-Section-main">
        <div class="Produc-Section">
            <div class="text-container">
                <div class="text-content">
                    <div class="text-content-p">
                        <p> Nossas modalidades </p>
                    </div>
                    <TitleTextTwo
                        title="Uma cacto só para você!"
                        description="Evolua vivendo experiências únicas com nossos treinos personalizados."
                    />
                    <div class="btn">
                        <BtnSejaMemberTwo/>
                    </div>
                </div>
            </div>
            <div class="media-container">
                <div class="media-container-txt">
                    <h3>Texto</h3>
                    <h3>Texto</h3>
                    <h3>Texto</h3>
                </div>
            <img src="/src/assets/imvitordiniz.png" alt="">
            </div>
        </div>

        <div class="menu-container">
            <MenuModalities/>
            <div class="menu-content">
                <CardModallities
                    :CardOne="{
                        title:'Cacto Exclusivo',
                        description:'A combinação definitiva de força, resistência e flexibilidade para construir um corpo estético e saudável',
                        iconSrc:'/src/assets/Vector.svg',
                        imageSrc:'/src/assets/victorfreitas.png',
                    }"
                    :CardTwo="{
                        title:' Cacto MMT',
                        description:'A combinação definitiva de força, resistência e flexibilidade para construir um corpo estético e saudável',
                        iconSrc:'/src/assets/Vector.svg',
                        imageSrc: '/src/assets/leonardho.png',
                    }"
                />
                <CardModallities
                    :CardOne="{
                        title:' Cacto RUN ',
                        description:'sit amet, consectetur adipiscing elit, sed do eiusmod tempom dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                        iconSrc:'/src/assets/Vector.svg',
                        imageSrc:'/src/assets/ketut-subiyanto.png'
                    }"
                    :CardTwo="{
                        title:' Beach Tênis ',
                        description:'sit amet, consectetur adipiscing elit, sed do eiusmod tempom dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                        iconSrc: '/src/assets/Vector.svg',
                        imageSrc:'/src/assets/image 76.png'
                    }"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.Production-Section-main {
    margin: 0 2rem;
    height: auto;
}
.Produc-Section {
    width: 100%;
    max-width: 1300px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0 auto;
}
.media-container {
    position: relative;
    z-index: 1;
}
.media-container img {
    width: 100%;
    max-width: 579px;
    object-fit: cover;
    max-height: 100vh;
}
.media-container-txt {
    position: absolute;
    z-index: 2;
    width: 100%;
    max-width: 10.184rem;
    height: 8.012rem;
    background-color: #ff6400;
    padding: 0.724rem 0.25rem 0.724rem 0.724rem;
    gap: 9.65px;
    top: 32rem;
    bottom: 0;
    right: -1rem;
}
.media-container-txt h3 {
    font-size: 1.2rem;
    font-family: 'Sofia Sans', sans-serif;
    font-weight: 600;
    line-height: 2.25rem;
}
.menu-container {
    padding: 4rem 0;
}
.text-container {
    width: 100%;
    max-width: 694px;
    padding: 0 2rem;
    left: 0;
    margin-right: 2rem;
}
.text-content-p p{
    font-family: 'Poppins', sans-serif;
    color: #ff6400;
    font-size: 2.3rem;
    padding: 0 1rem;
    font-weight: 700;
    line-height: 3.4rem;
}
.btn {
    padding-left: 1rem;
}

@media (max-width: 480px ) {
    .Produc-Section {
        /* height: auto; */
        /* margin-top: 1rem; */
        /* max-width: 480px; */
        flex-direction: column;
    }
    .text-content-p p {
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 2rem;
    }
    .media-container {
        max-width: 480px;
        margin: 0 auto;
    }
    .media-container-txt {
        top: 25rem;
    }
}


</style>