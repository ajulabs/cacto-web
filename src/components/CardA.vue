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
                    <h1>Texto</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum <br> dolor sit amet, consectetur </p>
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
                    <h1>Texto</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum <br> dolor sit amet, consectetur </p>
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
    font-size: 3rem;
    line-height: 4.5rem;
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
    max-width: 250px;
    height: 100%;
    max-height: 54px;
    z-index: 2;
    margin-left: 10rem;
    margin-top: 1rem;
    padding: 16px 18px 16px 18px;
}


@media (max-width: 882px) {
    .BTN-Footer {
        padding: 0;
    }
    .card-container {
        max-height: 130px;
    }
    .BG {
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
        margin-top: .5rem;
    }

}
@media (max-width: 515px) {
    .BTN-Footer {
        max-width: 120px;
        margin-top: 1rem;
        margin-left: 2rem;
    }
}

</style>