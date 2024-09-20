<script setup>
</script>


<template>
    <div class="div_ctaBtn">
        <button class="cta-button">SEJA MEMBRO</button>
    </div>
</template>

<style scoped>

.cta-button {
    background-color: #ff6600;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    width: 32.5rem;
    height: 3.375rem;
    border-radius: 10px;
    padding: 16px 18px 16px 18px;
    gap: 10px;
    opacity: 0px;
}

.div_ctaBtn button:hover {
    background-color: #e65500;
}

/* Smartphones pequenos */
@media(max-width:575px){
    .cta-button {
        font-size: 0.6rem;
        width: 8rem;
        height: 1rem;
        padding: 0px;
        text-align: center;
        border-radius: 4px;
    }
}

</style>
