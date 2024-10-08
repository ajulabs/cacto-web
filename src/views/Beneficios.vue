<script setup>
import Service from '@/components/Service.vue';


</script>

<template>
    <div class="title">
        <div class="container">
            <div class="DivTitle">
                <h1> Nossos Parceiros </h1>
            </div>
            <div class="Brand">
                <Service
                    imgSrc="src/assets/Luz.svg"
                    title="Titulo"
                    text="eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit"
                />

                <Service
                    imgSrc="src/assets/medala.svg"
                    title="Titulo"
                    text="eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit"
                />

                <Service
                    imgSrc="src/assets/adv.svg"
                    title="Titulo"
                    text="eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit"
                />

            </div>

            <div class="Brand">
                <Service
                    imgSrc="src/assets/DocBran.svg"
                    title="Titulo"
                    text="eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit"
                />

                <Service
                    imgSrc="src/assets/BranPC.svg"
                    title="Titulo"
                    text="eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit"
                />

                <Service
                    imgSrc="src/assets/BrandVoice.svg"
                    title="Titulo"
                    text="eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit"
                />

            </div>
        </div>
    </div>
</template>

<style scoped>

.DivTitle {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.Brand {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 2rem;
}

.title {
    padding: 4.8rem 0 2.8rem 0;
}

.title h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 2.9rem;
    align-items: center;
    color: #FFFFFF;
}
</style>