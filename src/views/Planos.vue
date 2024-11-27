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
                    <h2>Planos exclusivos para você que é único</h2>
                    <p>Transforme seu corpo e mente com planos que se adptam ao seu estilo de vida.</p>
                </div>

                <div class="card">
                    <div class="plan">
                        <CardPlanos 
                            :class="{selected: selectedCard === 'planoX'}"
                            :is-selected="selectCard === 'planoX'"
                                tipo="CACTO ESSENCIAL" 
                                valor="R$XXX" 
                                text="a partir de"
                                @click="selectCard('planoX')">
                            <div class="card-content">
                                <div class="checkbox-container">
                                    <input type="checkbox" id="option1" class="round-checkbox" />
                                    <label for="option1">
                                        <h3 class="checkmark">
                                            Acesso a todas as modalidades básicas.
                                        </h3>
                                    </label>
                                </div>
                                <div class="checkbox-container">
                                    <input type="checkbox" id="option2" class="round-checkbox" />
                                    <label for="option2">
                                        <h3 class="checkmark">
                                            Sessões semanais de acompanhamento com treinador.
                                        </h3>
                                    </label>
                                </div>
                                <div class="checkbox-container">
                                    <input type="checkbox" id="option3" class="round-checkbox" />
                                    <label for="option3">
                                        <h3 class="checkmark">
                                            Avaliação física trimestral.
                                        </h3>
                                    </label>
                                </div>
                                <div class="checkbox-container">
                                    <input type="checkbox" id="option4" class="round-checkbox" />
                                    <label for="option4">
                                        <h3 class="checkmark check">
                                            Flexibilidade de horários.
                                        </h3>
                                    </label>
                                </div>
                            </div>
                        </CardPlanos>
                    </div>

                    <div class="plan">
                        <CardPlanos 
                            :class="{selected: selectedCard === 'planoY'}"
                            :is-selected="selectCard === 'planoY'"
                                tipo="CACTO PERFORMANCE" 
                                valor="R$XXX" 
                                text="a partir de"
                                @click="selectCard('planoY')">
                            <div class="card-content">
                                <div class="checkbox-container">
                                    <input type="checkbox" id="option5" class="round-checkbox" />
                                    <label for="option5">
                                        <h3 class="checkmark">
                                            Acesso a todas as modalidades básicas e exlcusivas.
                                        </h3>
                                    </label>
                                </div>
                                <div class="checkbox-container">
                                    <input type="checkbox" id="option6" class="round-checkbox" />
                                    <label for="option6">
                                        <h3 class="checkmark">
                                            Sessões de coaching personalizadas duas vezes por semana.
                                        </h3>
                                    </label>
                                </div>
                                <div class="checkbox-container">
                                    <input type="checkbox" id="option5" class="round-checkbox" />
                                    <label for="option5">
                                        <h3 class="checkmark">Avaliação física e nutricional mensal.</h3>
                                    </label>
                                </div>
                                <div class="checkbox-container">
                                    <input type="checkbox" id="option6" class="round-checkbox" />
                                    <label for="option6">
                                        <h3 class="checkmark">Acesso a eventos exclusivos da academia.</h3>
                                    </label>
                                </div>
                            </div>
                        </CardPlanos>
                    </div>

                    <div class="plan">
                        <CardPlanos 
                            :class="{selected: selectedCard === 'planoZ'}"
                            :is-selected="selectCard === 'planoZ'"
                                tipo="CACTO ELITE" 
                                valor="R$XXX" 
                                text="a partir de"
                                @click="selectCard('planoZ')">
                            <div class="card-content">
                                <div class="checkbox-container">
                                    <input type="checkbox" id="option7" class="round-checkbox" />
                                    <label for="option7">
                                        <h3 class="checkmark">Acesso ilimitado a todas as modalidades.</h3> 
                                    </label>
                                </div>
                                <div class="checkbox-container">
                                    <input type="checkbox" id="option8" class="round-checkbox" />
                                    <label for="option8">
                                        <h3 class="checkmark">Avaliação física, nutricional e mental mensal.</h3> 
                                    </label>
                                </div>
                                <div class="checkbox-container">
                                    <input type="checkbox" id="option5" class="round-checkbox" />
                                    <label for="option5">
                                        <h3 class="checkmark">Consultoria de estilo de vida com especialistas.</h3> 
                                    </label>
                                </div>
                                <div class="checkbox-container">
                                    <input type="checkbox" id="option6" class="round-checkbox" />
                                    <label for="option6">
                                        <h3 class="checkmark">Sessões de coaching personalizadas ilimitadas.</h3> 
                                    </label>
                                </div>
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
    font-family: "PlusJakarta", sans-serif;
    font-weight: 700;
    font-size: 4.2rem;
    line-height: 5.3rem;
    text-align: center;
    color: #FFFFFF;
}
.text p {
    width: 100%;
    max-width: 849px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 3.6rem;
    text-align: center;
    color: #FFFFFF;
    opacity: 78%;
}
.card {
    width: 100%;
    max-width: 1440px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 4rem;
    padding: 0 2rem;
}
.card-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
}
.checkbox-container {
    width: 100%;
    max-width: 900px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.checkbox-container label {
    margin: 1rem;
    color: #FFFFFF;
}
.checkmark {
    width: 100%;
    max-width: 321px;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    font-weight: 300;
    line-height: 2.1rem;
}

.round-checkbox {
    appearance: none; 
    width: 100%;
    height: 20px;
    max-width: 20px;
    background-color: #FFFFFF;
    border-radius: 50%;
    cursor: pointer; 
    outline: none;
    position: relative; 
    transition: border-color 0.3s;
}
/* .round-checkbox:checked {
    background-color: #FF6400;
} */

@media (max-width: 1289px ) {
    .card {
        grid-template-columns: repeat(2, auto);
        justify-content: space-evenly;
    }
}

@media (max-width: 851px ) {
    .card {
        grid-template-columns: repeat(1, auto);
    }
}

@media (max-width: 809px ) {
    .text {
        max-width: 750px;
        padding: 2rem;
        margin: 2rem 0;
    }
    .text p {
        max-width: 700px;
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

@media (max-width: 480px ) {
    .Container-main {
        padding-top: 7rem;
    }
    .text {
        padding: 1.7rem;
        font-size: 2rem;
    }
    .text h2 {
        font-size: 2.2rem;
        line-height: 3rem;
    }
    .text p {
        max-width: 380px;
        font-size: 1.5rem;
        line-height: 2.5rem;
    }
}

</style>
