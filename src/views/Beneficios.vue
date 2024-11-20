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

.container {
    max-width: 1360px;
    margin: 0 auto;
    padding: 2rem;
}
.DivTitle {
    margin-top: 2.3rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Brand {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 15px;
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

@media (max-width: 768px ) {
    .Brand {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (max-width: 568px ) {
    .Brand {
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>