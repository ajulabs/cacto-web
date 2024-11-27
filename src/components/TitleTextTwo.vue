<script setup>
import Line from './Line.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="text-image-layout">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
    </div>
</template>

<style scoped>
.text-image-layout {
    width: 100%;
    padding: 0 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: #FFFFFF;
    line-height: 2.4rem;
}

.text-image-layout h2 {
    position: relative;
    font-size: 7rem;
    font-weight: 600;
    font-family: 'Sofia Sans', sans-serif;
    margin-bottom: 1.5rem;
    line-height: 8rem;
}

.text-image-layout p {
    font-family: 'Sofia Sans', sans-serif;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 3.6rem;
    margin-top: 1rem;
    padding: 1rem;
}


@media (max-width: 480px ) {
    .text-image-layout h2 {
        font-size: 3.5rem;
        line-height: 5rem;
        margin-bottom: 0;
    }
    .text-image-layout p {
        font-size: 1.5rem;
        line-height: 2.5rem;
        /* margin: 0; */
        padding: 0;
    }
}
</style>
