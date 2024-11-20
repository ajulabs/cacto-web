<script setup>
import LineDIv from './Line.vue';
import Line from './Line.vue';
import LineVertical from './LineVertical.vue';

const props=defineProps ({
    tipo: {
        type: String,
        required: true
    },
    valor:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    isSelected: {
        type: Boolean,
        default: false
    }
});

</script>

<template>
    <div class="container-card" :class="{selected: isSelected }">
        <div class="contentCard">
            <h2>{{ tipo }}</h2>
            <h1> {{ valor }}</h1>
            <p>{{ text }}</p>
            <div class="LinDiv">
                <LineDIv/>
            </div>
            <slot class="slots"></slot>
            <div class="btn">
                <button  
                    :class="{selected: isSelected }">
                    COMEÇAR AGORA
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-card {
    width: 100%;
    max-width: 300px;
    display: flex;
    align-items: center;
}
.contentCard {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border-radius: 1rem;
    background-color: #171717;
    border: solid 0.96px rgba(255, 255, 255, 0.1)
}
.contentCard h2 {
    font-family: 'poppins', sans-serif;
    font-weight: 300;
    font-size: 1rem;
    line-height: 2rem;
    color: #FFFFFF;
}
.contentCard h1 {
    font-family: 'poppins';
    font-weight: 600;
    font-size: 2.639rem;
    line-height: 3.358rem;
    color: #FFFFFF;
}
.contentCard p {
    font-family: 'Poppins';
    font-weight: 200;
    font-size: .8rem;
    line-height: 2rem;
    color: #A0A3AA;
}
.LinDiv {
    border: 0;
    height: 1px;
    width: 96%;
    background-color: #FFFFFF;
    margin: .7rem;
    opacity: 40%;
}
.btn button {
    width: 11.379rem;
    height: 2.879rem;
    margin: 1.2rem;
    padding: .6rem;
    border: none;
    border-radius: 59.97rem;
    background-color: #FFFFFF;
    color: #171717;
    font-family: 'Poppins';
    font-size: .9rem;
    line-height: 1.5rem;
    font-weight: 600;
    cursor: pointer;
}
.selected {
    width: 100%;
    border-radius: 1rem;
    border: 0.96px solid transparent;
    background: linear-gradient(320deg, #FF6400, #FFD3B7);
    padding: 0.96px;
}

.selected button{
    background: linear-gradient(45deg, #FF6400, #FFD3B7);
    color: #FFFFFF;
    border: none;
}

</style>