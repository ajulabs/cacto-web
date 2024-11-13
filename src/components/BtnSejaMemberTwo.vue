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
    width: 100%;
    max-width: 290.26px;
    height: 87px;
    max-height: 87.1px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #ff6600;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.894rem;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    box-shadow: 10.82px 10.82px 0px 0px #FFFFFF;
    margin-top: 2.8rem;
}
.join-button img {
    margin-left: 1.5rem;
    padding-top: 0.5rem;
    font-weight: bold;
}
.join-button:hover {
    background-color: #e65500;
}

@media (max-width: 575px) {
    .join-button{
        max-width: 180px;
        max-height: 60px;
        font-weight: 600;
        margin-top: 4rem;
    }
}
</style>