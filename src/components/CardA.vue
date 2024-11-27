<script setup>
import Button from './Button.vue';
</script>

<template>
    <div class="Card-wrapper">
        <div class="card-container">
            <div class="card-content">
                <div 
                    class="BG">
                </div>
                <div class="title">
                    <h1>Vamos conversar sobre os seus objetivos?</h1>
                    <p>
                        Entre em contato e descubra como a Cacto pode ajudar você a chegar mais longe.
                    </p>
                </div>
            </div>
            <div class="BTN-Footer">
                <Button
                buttonIcon="/src/assets/Aparelo-Tele.svg"
                separator="|"
                buttonLabel=" Fale conosco"
            />
            </div>
        </div>

        <div class="card-container">
            <div class="card-content">
                <div 
                    class="BG">
                </div>
                <div class="title">
                    <h1> Escolha o plano perfeito para <br>você!</h1>
                    <p>
                        Seja você iniciante ou atleta, temos o plano ideal para acompanhar a sua transformação.
                    </p>
                </div>
            </div>
            <div class="BTN-Footer">
                <Button
                buttonIcon="/src/assets/IconHome.svg"
                separator="|"
                buttonLabel=" Nossos planos "
            />
            </div>
        </div>
    </div>
</template>

<style scoped>

.Card-wrapper {
    width: 100%;
    max-width: 1433px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    padding: 0 8px 0 8px;
    gap: 30px;
}
.card-container {
    width: 100%;
    max-width: 540px;
    height: 100%;
    max-height: 175px;
    background-color: #FFF5E0;
    border-radius: 0.9rem;
    padding: 2.5rem;
}
.card-content {
    display: flex;
    gap: 2rem;
}
.title h1 {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    color: #1C1C1E;
}
.title p {
    font-family: 'Mulish';
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: #1C1C1E;
}
.BG {
    width: 100%;
    max-width: 100px;
    height: 100px;
    background-color:#D9D9D9 ;
    border-radius: 0.625rem;
    margin-bottom: 1rem;
}
.BTN-Footer {
    width: 100%;
    max-width: 540px;
    height: 100%;
    max-height: 54px;
    z-index: 2;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 16px 18px 16px 18px;
}

@media (max-width: 1323px ) {
    .BTN-Footer {
        padding: 0;
    }
}

@media (max-width: 984px ) {
    .card-container {
        padding: 1.5rem;
    }
}

@media (max-width: 943px ) {
    .card-container {
        padding: 1rem;
    }
    .title h1 {
        font-size: 1.5rem;
    }
    .BG {
        max-width: 85px;
        height: 85px;
    }
    .card-content {
        margin-top: 1.5rem;
    }
}

@media (max-width: 879px ) {
    .card-content {
        margin-top: 2.5rem;
    }
    .title h1 {
        line-height: 2rem;
    }
    .title p {
        line-height: 2rem;
    }
    .card-container {
        padding: .8rem;
    }
}

@media (max-width: 874px ) {
    .card-content {
        margin-top: 2rem;
    }
}

/* @media (max-width: 1066px ) {
    .card-container {
        padding: 2rem;
    }
}

@media (max-width: 1066px ) {
    .card-container {
        padding: 1.5rem;
    }
}

@media (max-width: 1023px ) {
    .card-container {
        padding: 1.5rem;
    }
}

@media (max-width: 808px ) {
    .card-container {
        padding: 1rem 2rem;
    }
}

@media (max-width: 769px) {
    .BTN-Footer {
        padding: 0;
    }
    .card-content {
        justify-content: center;
        align-items: center;
    }
    .card-container {
        max-height: 150px;
        padding: 1rem 0 0 0;
    }
    .BG {
        margin-left: 1rem;
        max-height: 80px;
        max-width: 80px;
    }
}

@media (max-width: 668px) {
    .Card-wrapper {
        flex-direction: column;
        gap: 60px;
    }
    .BTN-Footer {
        margin-top: 1rem;
    }
}

@media (max-width: 450px ) {
    .title h1 {
        font-size: 1.8rem;
        line-height: 2.5rem;
    }
} */

@media (max-width: 405px) {
    .BTN-Footer {
        max-width: 180px;
        height: 100px;
    }
    .Card-wrapper {
        max-width: 511px;
        padding: 0;
        margin: 0;
    }
}

@media (max-width: 387px) {
    .card-container {
        height: 111px;
        padding: 1rem;
    }
    .card-content {
        align-items: center;
    }
    .BTN-Footer {
        margin: 1rem auto;
    }
    .BG {
        width: 100%;
        max-width: 60px;
        height: 60px;
        margin: 0;
    }
    .title h1 {
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.8rem;
    }
    .title p {
        font-family: 'Mulish';
        font-size: 1rem;
        line-height: 1.3rem;
        font-weight: 400;
        padding-top: .5rem;
    }
}

</style>