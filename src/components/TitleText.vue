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
        <Line/>
        <p>{{ description }}</p>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@400;600;700&display=swap');
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
    font-family: "Sofia Sans";
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    line-height: 3rem;
}
.text-image-layout h2::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 4rem;
    width: 4px;
    background-color: #ff6600;
}
.text-image-layout p {
    margin-top: 1rem;
}
</style>
