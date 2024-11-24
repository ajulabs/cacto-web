<script setup>

</script>

<template>
    <div class="feature-content-Check">
        <div class="check-list"> 
            <div class="itens">
                <img src="/src/assets/check-square.svg" alt="">
                <div class="itens-txt">
                    <h2>AVALIAÇÃO PERSONALIZADA</h2>
                    <h3>Analisamos seu perfil físico e hábitos, como sono e hidratação, para planejar o treino ideal.</h3>
                </div>
            </div>
            <div class="itens">
                <img src="/src/assets/check-square.svg" alt="">
                <div class="itens-txt">
                    <h2>ATIVAÇÃO MUSCULAR</h2>
                    <h3>Preparação do corpo com movimentos específicos para potencializar o desempenho.</h3>
                </div>
            </div>
            <div class="itens">
                <img src="/src/assets/check-square.svg" alt="">
                <div class="itens-txt">
                    <h2>TREINO DE FORÇA INTELIGENTE</h2>
                    <h3>Combinação de exercícios motivadores e de alta intensidade, ajustados às suas necessidades.</h3>
                </div>
            </div>
            <div class="itens">
                <img src="/src/assets/check-square.svg" alt="">
                <div class="itens-txt">
                    <h2>RECUPERAÇÃO ATIVA</h2>
                    <h3>Alongamentos para relaxar e otimizar sua recuperação muscular.</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.feature-content-Check {
    width: 100%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.feature-title {
    margin-top: 4rem;
}

.check-list {
    width: 100%;
    max-width: 605px;
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

.itens h2 {
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.1rem;
    color: #FFFFFF;
}
.itens h3 {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 3.1rem;
    color: #A0A3AA;
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

@media (max-width: 320px ) {
    .feature-content-Check {
        max-width: 300px;
        justify-content: space-between;
        padding: 0 1rem;
        gap: 3rem;
    }
}
</style>