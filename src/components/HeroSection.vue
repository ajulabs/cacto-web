<script setup>
</script>


<template>
    <section class="hero-section"> 
        <div class="content-container"> 
            <div class="content-block"> 
                <div class="text-contente"> 
                    <h1>SEUS RESULTADOS, NOSSO COMPROMISSO!</h1>
                    <p>Na <img class="logoText" src="@/assets/cacto_logo.svg" alt="Logo"/> você descobre o prazer de exercitar.<br>
                    Venha transformar os seus objetivos de boa forma e saúde em realidade.</p>
                </div>
                <button class="cta-button">SEJA MEMBRO</button>
            </div>
            <img class="fotoFundo" src="/Users/cekeaudio/Desktop/AjuLabs/Projeto-Cacto/src/assets/people-dumbbells 1.png" alt="Logo"/>
        </div>
    </section>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.hero-section {
    position: relative;
    width: 1440px;
    height: 980px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    top: 0px;
    gap: 8px;
    opacity: 0px;
    overflow: hidden;
}

.content-container {
    position: relative;
    width: 1440px;
    height: 980px;
    opacity: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 2;
}

.fotoFundo{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
}

.content-block {
    width: 1238px;
    height: 208px;
    max-width: 1238px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
    margin-top: 27%;
    z-index: 2;
}

.text-contente {
    position: relative;
    font-family: 'Poppins', sans-serif;
    width: 1038px;
    height: 138px;
    opacity: 0px;
}

.text-contente h1 {
    position: relative;
    width: 1038px;
    height: 58px;
    opacity: 0px;
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    font-weight: 700;
    line-height: 57.6px;
    text-align: left;
    color: #FFFFFF;
    margin-bottom: 4px;
}

.text-contente p {
    width: 1034px;
    height: 72px;
    gap: 0px;
    opacity: 0px;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    text-align: center;
    color: #FFFFFF;
}

.cta-button {
    position: relative;
    width: 520px;
    height: 54px;
    background-color: #FF6400;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    line-height: 22.5px;
    padding: 16px 18px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

.cta-button:hover {
    background-color: #e55a00;
}

.logoText {
    width: 81px;
    vertical-align: middle;
}
</style> 