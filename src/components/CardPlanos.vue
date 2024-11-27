<script setup>
import LineDIv from './Line.vue';

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
    <div class="container-card" >
        <div class="contentCard" :class="{selected: isSelected }">
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
    max-width: 410px;
    height: 500px;
    display: flex;
    align-items: center;
}
.contentCard {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0;
    border-radius: 2.3rem;
    background-color: #171717;
    border: solid 0.96px rgba(255, 255, 255, 0.1)
}
.contentCard h2 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700;
    font-size: 1.919rem;
    line-height: 3rem;
    color: #FFFFFF;
}
.contentCard h1 {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700;
    font-size: 4.2rem;
    line-height: 5.3rem;
    padding: 1.5rem;
    color: #FFFFFF;
}
.contentCard p {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 1.7rem;
    line-height: 2.8rem;
    margin-bottom: 1rem;
    color: #A0A3AA;
}
.LinDiv {
    border: 0;
    height: 10px;
    width: 90%;
    margin: .7rem;
    border-top: 0.96px solid #E6E6E6
}
.btn button {
    width: 100%;
    max-width: 182.06px;
    height: 46.06px;
    margin: 1.2rem auto;
    padding: 0 2rem;
    border: none;
    border-radius: 59.97rem;
    background-color: #FFFFFF;
    color: #171717;
    font-family: 'DM Sans', sans-serif;
    font-size: 1.5rem;
    line-height: 2.4rem;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
}
.selected {
    width: 100%;
    border-radius: 2.3rem;
    border: 0.96px solid transparent;
    background: linear-gradient(320deg, #FF6400, #FFD3B7);
    padding: 0.96px;
}
.selected button{
    background: linear-gradient(45deg, #FF6400, #FFD3B7);
    color: #FFFFFF;
    border: none;
}

@media (max-width: 480px ) {
    .container-card {
        height: auto;
    }
}

</style>