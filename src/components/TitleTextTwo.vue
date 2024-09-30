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
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #FFFFFF;
    line-height: 2rem;
    width: 39.438rem;
}

.text-image-layout h2 {
    position: relative;
    font-size: 3rem;
    font-weight: 600;
    font-family: 'Sofia Sans', sans-serif;
    margin-bottom: 1.5rem;
    line-height: 3rem;
}

.text-image-layout p {
    margin-top: 1rem;
}
</style>
