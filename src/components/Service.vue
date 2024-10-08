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
    width: 20rem;
    height: 24.733;
    display: flex;
    justify-content: flex-start;
    align-items: start;
    flex-direction: column;
    gap: .5rem;
    padding: 1.5rem;
    border: 1px solid #3A3B3E;
    border-radius: .9rem;
}
.container-Serv h2 {
    color: #FFFFFF;
    font-family: 'poppins';
    font-weight: 700;
    font-size: 1rem;
    line-height: 2.25rem;
}

.container-Serv p {
    color: #FFFFFF;
    font-family: 'poppins';
    font-weight: 300;
    font-size: 1rem;
    line-height: 2.25rem;
}


</style>