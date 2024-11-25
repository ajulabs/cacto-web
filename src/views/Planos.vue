<script setup>
import CardPlanos from '../components/CardPlanos.vue';
import LineDIv from '../components/Line.vue';
import { ref } from 'vue';

const selectedCard =ref(null);

const selectCard = (cardId) => {
    selectedCard.value = cardId;
};
</script>

<template>
    <div class="containerPlan">
        <div class="imgPlan">
            <img src="/src/assets/imgPlan.png" alt="">
        </div>
        <div class="text">
            <h2>Titulo</h2>
            <p>eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit</p>
        </div>
        <div class="card">
            <CardPlanos 
                :class="{selected: selectedCard === 'planoX'}"
                :is-selected="selectCard === 'planoX'"
                tipo="Plano X" 
                valor="R$XXX" 
                text="Por dolor sit amet"
                @click="selectCard('planoX')">
                <div class="checkbox-container">
                    <input type="checkbox" id="option1" class="round-checkbox" />
                    <label for="option1">
                        <span class="checkmark"></span>eiusmod temporm dolor 1
                    </label>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" id="option2" class="round-checkbox" />
                    <label for="option2">
                        <span class="checkmark"></span>eiusmod temporm dolor 2
                    </label>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" id="option3" class="round-checkbox" />
                    <label for="option3">
                        <span class="checkmark"></span>eiusmod temporm dolor 3
                    </label>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" id="option4" class="round-checkbox" />
                    <label for="option4">
                        <span class="checkmark"></span>eiusmod temporm dolor 4
                    </label>
                </div>
            </CardPlanos>

            <CardPlanos 
                :class="{selected: selectedCard === 'planoY'}"
                :is-selected="selectCard === 'planoY'"
                tipo="Plano Y" 
                valor="R$XXX" 
                text="Por dolor sit amet"
                @click="selectCard('planoY')">
                <div class="checkbox-container">
                    <input type="checkbox" id="option5" class="round-checkbox" />
                    <label for="option5">
                        <span class="checkmark"></span>eiusmod temporm dolor 5
                    </label>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" id="option6" class="round-checkbox" />
                    <label for="option6">
                        <span class="checkmark"></span>eiusmod temporm dolor 6
                    </label>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" id="option5" class="round-checkbox" />
                    <label for="option5">
                        <span class="checkmark"></span>eiusmod temporm dolor 5
                    </label>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" id="option6" class="round-checkbox" />
                    <label for="option6">
                        <span class="checkmark"></span>eiusmod temporm dolor 6
                    </label>
                </div>
            </CardPlanos>

            <CardPlanos 
                :class="{selected: selectedCard === 'planoZ'}"
                :is-selected="selectCard === 'planoZ'"
                tipo="Plano Z" 
                valor="R$XXX" 
                text="Por dolor sit amet"
                @click="selectCard('planoZ')">
                <div class="checkbox-container">
                    <input type="checkbox" id="option7" class="round-checkbox" />
                    <label for="option7">
                        <span class="checkmark"></span>eiusmod temporm dolor 7
                    </label>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" id="option8" class="round-checkbox" />
                    <label for="option8">
                        <span class="checkmark"></span>eiusmod temporm dolor 8
                    </label>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" id="option5" class="round-checkbox" />
                    <label for="option5">
                        <span class="checkmark"></span>eiusmod temporm dolor 5
                    </label>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" id="option6" class="round-checkbox" />
                    <label for="option6">
                        <span class="checkmark"></span>eiusmod temporm dolor 6
                    </label>
                </div>
            </CardPlanos>
        </div>
    </div>
</template>

<style scoped>
.containerPlan {
    padding-top: 4.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.imgPlan img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0 auto;

}

.text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.text h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 2.5rem;
    line-height: 4rem;
    text-align: center;
    color: #FFFFFF;
}

.text p {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 2rem;
    text-align: center;
    color: #FFFFFF;
}

.card {
    width: 90rem;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-top: 2.5rem;
}

.checkbox-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: 5.2rem;
    margin: 0.5rem; 
}

.checkbox-container label {
    margin-left: 1rem;
    color: #FFFFFF;
}

.round-checkbox {
    appearance: none; 
    width: 20px;
    height: 20px;
    background-color: #CCCCCC;
    border-radius: 50%;
    cursor: pointer; 
    outline: none;
    position: relative; 
    transition: border-color 0.3s;
}

.round-checkbox:checked {
    background-color: #FF6400;
}

@media (max-width: 1440px) {
    .containerPlan {
        padding: 0 4rem;
    }
}

/* Todo revisar responsividade */

@media (max-width:463px){
    .card {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
}


</style>
