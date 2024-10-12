<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();

const navigateToPage = () => {
    router.push('/Planos');
}
</script>

<template>
    <div class="text-content">
        <button @click="navigateToPage" class="join-button">SEJA MEMBRO 
            <span>
                <img src="/src/assets/Icon.svg" alt="">
            </span>
        </button>
    </div>
</template>


<style scoped>

.join-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #ff6600;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    width: 18.141rem;
    height: 5.069rem;
    box-shadow: 10.82px 10.82px 0px 0px #FFFFFF;
    margin-top: 1.5rem;
}
.join-button img {
    margin-left: 1.5rem;
    padding-top: 0.5rem;
    font-weight: bold;
}
.join-button:hover {
    background-color: #e65500;
}

</style>