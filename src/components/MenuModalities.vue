<script setup>

</script>

<template>
    <div class="modal-container">
        <div class="modal-content">
            <div class="Title-Menu">
                <h1> MODALIDADES </h1>
            </div>
            <div class="itens">
                <li> <h2> CACTO EXCLUSIVE </h2> </li>
                <li> <h2> CACTO MMT </h2> </li>
                <li> <h2> CACTO RUN </h2> </li>
                <li> <h2> BEACH TENIS </h2> </li>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-container {
    position: relative;
    width: 100%;
    max-width: 1316px;
    margin: 0 auto;
    padding: 0 2.5rem;
}

.modal-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.modal-content h1 {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 3.2rem;
    color: #FFFFFF;
}

.itens {
    display: flex;
    align-items: center;
    gap: 5rem;
}

.itens h2 {
    font-family: 'Sofia sans';
    font-weight: 800;
    font-size: 1rem;
    letter-spacing: 10%;
    color: #FFFFFF;
}

</style>