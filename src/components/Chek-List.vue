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
    <div class="feature-content-Check">
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
.feature-content-Check {
    width: 100%;
    height: 400px;
    max-width: 605.05px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.feature-title {
    margin-top: 4rem;
}
.feature-description p {
    width: 100%;
    max-width: 605px;
    word-wrap: break-word;
    margin-top: 1.5rem;
    line-height: 2.9rem;
    font-family: 'Poppins', serif;
    font-weight: 400;
    font-size: 1.6rem;
    color: #A0A3AA;
}
.check-list {
    width: 100%;
    max-width: 605px;
    height: 119px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 11.71px;
    margin-top: 4rem;
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
    font-size: 4.294rem;
    line-height: 5.465rem;
}
.itens h2 {
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 1.22rem;
    line-height: 1.952rem;
    color: #FFFFFF;
}

@media (max-width: 375px) {
    .feature-content-Check {
        max-width: 344px;
        justify-content: space-between;
        padding: 0 1rem;
    }
    .feature-title {
        margin: 0;
    }
    .feature-title h1 {
        font-size: 3rem;
        line-height: 3rem;
        font-weight: 700;
    }
    .check-list {
        margin: 0;
    }
}
</style>