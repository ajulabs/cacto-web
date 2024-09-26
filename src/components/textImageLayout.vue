<script setup>
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
    padding-left: 1.5rem;
    line-height: 3rem;
}

.text-image-layout h2::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background-color: #ff6600;
}
</style>
