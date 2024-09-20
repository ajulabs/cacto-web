<script setup>
</script>

<template>
    <section class="HeroSectionTwo">
        <div class="Hero-Container">

            <div class="CxTxtContainer">
                <div class="CxTxtContent">
                    <h1>LOREM IPSUM</h1>
                    <p>sit amet, consectetur adipiscing elit, sed do eiusmod tempom dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporr Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a odit, molestiae excepturi voluptatum alias adipisci aliquam repudiandae animi odio quo, totam quisquam suscipit! Pariatur iure nisi quasi quidem aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dignissimos, quod ad nesciunt asperiores tempora quos animi voluptas hic ut quisquam ipsum et illo sequi blanditiis porro libero quae. Deserunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta nihil non omnis dolores optio odio, exercitationem distinctio cupiditate quasi natus aliquam iusto doloremque adipisci blanditiis a molestiae laboriosam officiis! A.</p>
                    <button>SEJA MEMBRO</button>
                </div>
            </div>
            
            <div class="ImgVideo">
                <img src="/Users/cekeaudio/Desktop/AjuLabs/Projeto-Cacto/src/assets/Property.png" alt="">
            </div>
        </div>
    </section>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.Hero-Container {
    width: 100vw;
    height: 100vh;
    display: flex;
    padding: 1.5rem;
    justify-content: space-evenly;
    align-items: center;
}

.CxTxtContainer {
    flex: 0.9;
}

.CxTxtContent {
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
}

.CxTxtContent h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.CxTxtContent p {
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 400;
}

.CxTxtContent button {
    background-color: #ff6600;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    width: 18.141rem;
    height: 5.069rem;
    box-shadow: 10.82px 10.82px 0px 0px #FFFFFF;
}

.CxTxtContent button:hover {
    background-color: #e65500;
}

.ImgVideo {
    flex: 1;
    display: flex;
    justify-content: center; 
    align-items: center; 
}

.ImgVideo img {
    max-width: 80%;
    height: auto;
    object-fit: cover;
}
</style>