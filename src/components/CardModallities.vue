<script setup>
import LineVertical from './LineVertical.vue';

const props = defineProps({
    CardOne:{
        type: Object,
        required: true
    },
    CardTwo:{
        type: Object,
        required: true
    },
})

</script>

<template>
    <div class="Main-CardModal">
        <div class="cardModal-container">
            <div class="cardModal-content">
                <div class="txt-Modal">
                    <h1> {{ CardOne.title }} </h1>
                    <p> {{ CardOne.description }} </p>
                    <img :src="CardOne.iconSrc" alt="">
                </div>
                <div class="img-Modal">
                    <div class="lineVertical">
                        <LineVertical/>
                    </div>
                    <div class="imgProps">
                        <img :src="CardOne.imageSrc" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="cardModal-container">
            <div class="cardModal-content">
                <div class="img-Modal">
                    <div class="imgProps">
                        <img :src="CardTwo.imageSrc" alt="">
                    </div>
                    <div class="lineVertical">
                        <LineVertical/>
                    </div>
                </div>
                <div class="txt-Modal">
                    <h1> {{ CardTwo.title }} </h1>
                    <p> {{ CardTwo.description }} </p>
                    <span class="arrow-reverse">
                        <img :src="CardTwo.iconSrc" alt="">
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cardModal-container {
    width: 82rem;
    margin: 0 auto;
    margin-top: 6rem;
}
.cardModal-content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.img-Modal {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.txt-Modal {
    width: 29.17rem;
}
.lineVertical {
    padding-left: 4rem;
    padding-right: 4rem;
    display: flex;
    opacity: 7%;
}
.arrow-reverse img {
    transform: rotate(180deg);
}
.txt-Modal h1{
    font-family: 'Sofia sans';
    font-weight: 900;
    font-size: 2.25rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
    color: #FFFFFF;
}
.txt-Modal p  {
    font-family: 'Poppins' sans-serif;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 2rem;
    color: #FFFFFF;
}
.txt-Modal img {
    width: 5.834rem;
    height: 3.2rem;
    border: none;
    cursor: pointer;
    margin-top: 3rem;
}

</style>