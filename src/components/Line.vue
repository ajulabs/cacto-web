<script setup>
</script>

<template>
    <div class="Line-divisória">
        <hr class="divisoria">
    </div>
</template>

<style scoped>
.Line-divisória {
    display: flex;
    justify-content: center;
}
.divisoria {
    border: 0;
    height: 1px;
    width: 100%;
    background-color: #FFFFFF;
    margin: 0;
    opacity: 10%;
}

@media (max-width: 575px) {
    .divisoria {
        margin-bottom: 2rem;
    }
}

@media (max-width: 375px) {
    .divisoria {
        margin-bottom: 1.2rem;
    }
}
</style>