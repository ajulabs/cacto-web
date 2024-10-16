<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="feature-content">
        <div class="feature-title">
            <h1 v-html="title"></h1>
        </div>
        <div class="feature-description"> 
            <p>{{ description }}</p>
        </div>
        <div class="check-list"> 
            <div class="itens">
                <img src="/src/assets/check-square.svg" alt="">
                <h2>AVALIAÇÕES PERIÓDICAS</h2>
            </div>
            <div class="itens">
                <img src="/src/assets/check-square.svg" alt="">
                <h2>MONITORAMENTO DE PROGRESSO</h2>
            </div>
            <div class="itens">
                <img src="/src/assets/check-square.svg" alt="">
                <h2>SOCIAL FITNESS</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');


.feature-title {
    margin-top: 4rem;
}
.feature-description p {
    word-wrap: break-word;
    margin-top: 1.5rem;
    line-height: 1.9rem;
    font-family: 'Poppins', serif;
    font-weight: 400;
    font-size: 1rem;
    color: #A0A3AA;
}
.check-list {
    margin-top: 2rem;
}
.itens {
    display: flex;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    gap: 0.932rem;
    color: #FFFFFF;
}
.feature-title h1 {
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 2.684rem;
    line-height: 3.416rem;
}
.itens h2 {
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 1.22rem;
    line-height: 1.952rem;
    color: #FFFFFF;
}
</style>