<script setup>
import CardPlanos from '@/components/CardPlanos.vue';
import LineDIv from '@/components/Line.vue';
import { ref } from 'vue';

const selectedCard =ref(null);

const selectCard = (cardId) => {
    selectedCard.value = cardId;
};
</script>

<template>
    <div class="Container-main">
        <div class="imgPlan">
            <img src="/src/assets/imgPlan.png" alt="">
        </div>
        <div class="containerPlan">
            <div class="contentPlan">
                <div class="text">
                    <h2>Titulo</h2>
                    <p>eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit</p>
                </div>

                <div class="card">
                    <div class="plaOne">
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
                    </div>

                    <div class="planTwo">
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
                    </div>

                    <div class="planThree">
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
            </div>
        </div>
    </div>
</template>

<style scoped>
.Container-main {
    max-width: 100vw;
}
.imgPlan img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.containerPlan {
    max-width: 1350px;
    width: 100%;
    margin: 0 auto;
}
.contentPlan {
    width: 100%;
    align-items: center;
    margin-top: 2.5rem;
    margin: 0 auto;
}
.text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 4rem 0;
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
    width: 100%;
    max-width: 1350px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: space-between;
    gap: 2rem;
    padding: 0 2rem;
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

@media (max-width: 809px ) {
    .card {
        grid-template-columns: repeat(2, auto);
    }
    .text {
        padding: 1rem;
        margin: 2rem 0;
    }
}

@media (max-width: 561px ) {
    .card {
        grid-template-columns: repeat(1, auto);
        justify-content: center;
        margin-top: 2rem;
    }
    .text {
        padding: 1rem;
        margin: 1rem 0;
    }
}


</style>
