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
    height: 25%;
    border-radius: 10px;
    padding: 16px 18px 16px 18px;
    gap: 10px;
}
.div_ctaBtn button:hover {
    background-color: #e65500;
}
/* Smartphones pequenos */
@media(max-width:575px){
    .cta-button {
        max-width: 177px;
        max-height: 40px;
        margin-bottom: 1rem;
        border-radius: 4px;
    }
}
</style>
