<script setup>
</script>

<template>
    <section class="HeroSectionTwo">
        <div class="Hero-Container">
            <div class="CxTxtContainer">
                <div class="CxTxtContent">
                    <h1>Lorem Ipsum</h1>
                    <h2>sit amet, consectetur adipiscing elit, sed do eiusmod tempom dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporr sit amet, consectetur adipiscing elit, sed do eiusmod tempom dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporr sit amet, consectetur adipiscing elit, sed do eiusmod tempom dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporm</h2>
                    <button>SEJA MEMBRO <span><img src="/Users/cekeaudio/Desktop/AjuLabs/Projeto-Cacto/src/assets/Icon.svg" alt=""></span></button>
                </div>
            </div>

            <div class="ImgVideo">
                <img src="/Users/cekeaudio/Desktop/AjuLabs/Projeto-Cacto/src/assets/Property.png" alt="">
            </div>
        </div>

        <div class="Hero-ContainerTwo">
            <h2>adipiscing elit, sed do eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporr</h2>
            <div class="Counter">
                <div class="Counter-1">
                    <h1>
                        <span class="symbol">+</span>
                        <span class="number">12.000</span>
                    </h1>
                    <h3>
                        <span class="number"> Alunos </span>
                    </h3>
                </div>
                <div class="Counter-2">
                    <h1>
                        <span class="symbol">+</span>
                        <span class="number">10</span>
                    </h1>
                    <h3> Modalidades </h3>
                </div>
                <div class="Counter-3">
                    <h1>
                        <span class="symbol">+</span>
                        <span class="number">68</span>
                    </h1>
                    <h3> Eventos </h3>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans:wght@400;600;700&display=swap');


.HeroSectionTwo{
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    align-items: center;
}


.Hero-Container {
    display: flex;
    align-items: center;
    height: 100vh;
    margin-top: 4rem;
}

.Hero-ContainerTwo{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    max-width: 70rem;
    margin-top: 2rem;
    gap: 1.25rem;
    color: #FFFFFF;
    font-family: 'Poppins';
    padding: 0px 0px 60px 0px;
    border-color: #3A3B3E;
}

.ImgVideo img {
    max-width: 100vw;
    max-height: 100vh;
    object-fit: cover;
}

.CxTxtContent button {
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

.CxTxtContent button img {
    margin-left: 1.5rem;
    padding-top: 0.5rem;
    font-weight: bold;
}

.CxTxtContent button:hover {
    background-color: #e65500;
}

.CxTxtContainer {
    left: 0;
    margin-right: 2rem;
}

.CxTxtContent {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: #FFFFFF;
    line-height: 2rem;
    width: 39.438rem;
}

.CxTxtContent h1 {
    position: relative;
    font-size: 3rem;
    font-weight: 600;
    font-family: 'Sofia Sans',sans-serif;
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    line-height: 3rem;
}

.CxTxtContent h1::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    background-color: #ff6600;
}

.CxTxtContent h2 {
    width: 39.438rem;
    height: 21.688rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    line-height: 1.8rem;
    text-align: left;
    color:#FFFFFF;
}


.Hero-ContainerTwo h2 {
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 2rem;
    line-height: 3rem;
    align-items: center;
}

.Counter{
    display: flex;
    justify-content: space-evenly;
}

.Counter h1 {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 4rem;
    line-height: 4rem;
}

.Counter h3 {
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 1.25rem;
    color:#A0A3AA;
    line-height: 2rem;
}

.symbol {
    color: #e65500;
}

</style>
