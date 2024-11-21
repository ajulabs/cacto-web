<script setup>
import { ref } from 'vue';
import ModalAgendamento from './ModalAgendamento.vue';


    const isVisible = ref(false);

    const openModal = () => {
        isVisible.value = true ;
    }
</script>


<template>
    <div class="div_ctaBtn">
        <button class="cta-button" @click="openModal">SEJA MEMBRO</button>
        <ModalAgendamento v-if="isVisible" @close="isVisible = false " />
    </div>
</template>

<style scoped>

.cta-button {
    background-color: #ff6600;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    width: 50%;
    max-width: 520px;
    height: 25%;
    max-height: 54px;
    border-radius: 10px;
    padding: 16px 18px 16px 18px;
    gap: 10px;
}
.div_ctaBtn button:hover {
    background-color: #e65500;
}
/* Smartphones pequenos */
@media(max-width: 590px){
    .cta-button {
        max-width: 200px;
        max-height: 20px;
        border-radius: 6px;
        font-size: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .div_ctaBtn {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

@media (max-width: 375px) {
    .cta-button {
        max-width: 130px;
        font-size: .9rem;
        font-weight: 600;
        text-align: center;
    }
}

@media(max-width: 320px) {
    .cta-button {
        display: flex;
        justify-content: center;
        text-align: center;
        padding: 2rem;
    }
}
</style>
