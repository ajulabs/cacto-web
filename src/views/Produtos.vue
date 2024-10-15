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
                    <h3>Lorem Ipsum Dolor</h3>
                <div class="text-content">
                    <TitleTextTwo
                        title="Lorem Ipsun"
                        description="eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit"
                    />
                </div>
                <BtnSejaMemberTwo/>
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
                        iconSrc:'/src/assets/Icon.svg',
                        imageSrc:'/src/assets/victorfreitas.png',
                    }"
                    :CardTwo="{
                        title:' Cacto MMT',
                        description:'A combinação definitiva de força, resistência e flexibilidade para construir um corpo estético e saudável',
                        iconSrc:'/src/assets/Icon.svg',
                        imageSrc: '/src/assets/leonardho.png',
                    }"
                />
                <CardModallities
                    :CardOne="{
                        title:' Cacto RUN ',
                        description:'sit amet, consectetur adipiscing elit, sed do eiusmod tempom dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                        iconSrc:'/src/assets/Icon.svg',
                        imageSrc:'/src/assets/ketut-subiyanto.png'
                    }"
                    :CardTwo="{
                        title:' Beach Tênis ',
                        description:'sit amet, consectetur adipiscing elit, sed do eiusmod tempom dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
                        iconSrc: '/src/assets/Icon.svg',
                        imageSrc:'/src/assets/image 76.png'
                    }"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.Produc-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding-top: 4rem;
}
.media-container {
    position: relative;
    z-index: 1;
}
.media-container img {
    max-width: 100vw;
    object-fit: cover;
    max-height: 100vh;
}
.media-container-txt {
    position: absolute;
    z-index: 2;
    width: 10.184rem;
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
.text-container {
    left: 0;
    margin-right: 2rem;
}
.text-content {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #FFFFFF;
    line-height: 2rem;
    width: 39.438rem;
}
.text-container h3 {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2.25rem;
    margin-bottom: .8rem;
    color: #ff6400;
}
.menu-container {
    
}
</style>