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
    width: 89rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.card-container {
    width: 33.75rem;
    height: 10.938rem;
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
    font-size: 1.9rem;
    margin-bottom: 1rem;
    line-height: 2.2rem;
    color: #1C1C1E;
}
.title p {
    font-family: 'Mulish';
    font-weight: 400;
    font-size: .875rem;
    line-height: 1.313rem;
    color: #1C1C1E;
}
.BG {
    width: 6.25rem;
    height: 6.25rem;
    background-color:#D9D9D9 ;
    border-radius: 0.625rem;
}
.BTN-Footer {
    z-index: 2;
    margin-left: 8rem;
    margin-top: .5rem;
}
</style>