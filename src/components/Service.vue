<script setup>
const props = defineProps({
    imgSrc: String,
    title: String,
    text: String
})
</script>

<template>
    <div class="container-Serv">
        <div class="content-Icon">
            <img :src="imgSrc" alt="Icon">
        </div>
        <div class="content-Title">
            <h2> {{ title }}</h2>
        </div>
        <div class="content-txt">
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<style scoped>
.container-Serv {
    width: 100%;
    max-width: 1360px;
    display: flex;
    justify-content: flex-start;
    align-items: start;
    flex-direction: column;
    gap: .5rem;
    padding: 1.5rem;
    border: 1px solid #3A3B3E;
    border-radius: .9rem;
}
.content-Icon {
    font-size: 2rem;
    padding: 1rem 1rem 1rem 0 ;
}
.container-Serv h2 {
    color: #FFFFFF;
    font-family: 'poppins';
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3.8rem;
}

.container-Serv p {
    color: #FFFFFF;
    font-family: 'poppins';
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 3.6rem;
}


</style>