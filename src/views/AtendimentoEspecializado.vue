<script setup>

</script>

<template>
    <div class="container">
        <span class="BGimg">
            <img src="/src/assets/BGAtend.png" alt="">
        </span>
        <div class="Heading">
            <div class="log-container">
                <h2>TEAM</h2>
                <img src="/src/assets/logoTeam.svg" alt="">
            </div>
            <h3>eiusmod temporm dolor sit amet, <br/> consectetur adipiscing elit, sed do eiusmod </h3>
        </div>
        <div class="container-bloc">
            <div class="content-left">
                <div class="left-top">
                    <div class="midiaPlay">
                        <span class="play-button"></span>
                        <span class="selo"><h2>VOCÊ EM 1 LUGAR</h2></span>
                    </div>
                    <h4> LOREM IPSUM </h4>
                    <p>eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                </div>
                <div class="left-bottom">
                    <div class="midia"> </div>
                    <h4> LOREM IPSUM </h4>
                    <p>eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                </div>
            </div>
            <div class="content-rigth">
                <div class="rigth-top">
                    <div class="midia"> </div>
                    <h4> LOREM IPSUM </h4>
                    <p>eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                </div>
                <div class="rigth-top">
                    <div class="midiaPlayRigth">
                        <span class="play-buttonRigth"></span>
                    </div>
                    <h4> LOREM IPSUM </h4>
                    <p>eiusmod temporm dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');

.container{
    position: relative;
    z-index: 1;
    padding-top: 4.8rem;
}
.BGimg {
    width: 120.063rem;
    height: 67.5rem;
    position: absolute;
    z-index: 0;
    opacity: 30%;
}
.Heading {
    width: 70%;
    height: 6.625rem;
    padding: 4rem 0rem 4rem 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.Heading h2 {
    font-family: 'Poppins';
    font-size: 2.75rem;
    font-weight: 700;
    line-height: 3.5rem;
    color: #FFFFFF;
}
.Heading h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.25rem;
    text-align: justify;
    color: #FFFFFF;
}
.log-container img{
    padding-left: 4rem;
}
.container-bloc {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    margin-top: 4rem;
}
h4 {
    font-family: 'Sofia Sans';
    font-weight: 500;
    color: #FFFFFF;
    font-size: 2rem;
    line-height: 2.25rem;
    padding-top: 2rem;
}
p{
    width: 34.063rem;
    height: 3.75rem;
    font-family: 'Poppins';
    font-weight: 400;
    color: #FFFFFF;
    font-size: 1rem;
    line-height: 1.875rem;
    word-wrap: break-word;
    padding-bottom: 6rem;
}
.left-top {
    margin-top: 8rem;
}
.midia{
    width: 34.063rem;
    height: 22.709rem;
    background-color: #A0A3AA;
}
.midiaPlay {
    width: 34.063;
    height: 34.063rem;
    background-color: #A0A3AA;
}
.midiaPlayRigth{
    width: 34.063rem;
    height: 45.418rem;
    background-color: #A0A3AA;
}
.play-button {
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    margin-top: 14.439rem;
    margin-left: 14.43rem;
}

.play-button::before {
    content: '';
    position: absolute;
    left: 35%;
    top: 30%;
    width: 0;
    height: 0;
    border-left: 25px solid #171717;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    cursor: pointer;
}
.selo{
    width: 6.25rem;
    height: 6.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 50%;
    background-color: #FF6400;
    left: 32rem;
    top: 33rem;
}
.selo h2 {
    color: #FFFFFF;
    font-family: 'Space Grotesk', sans-serif;
    text-align: center;
    font-weight: 500;
    font-size: 1.29rem;
    line-height: 1.5rem;
    word-break: break-word;
}
.play-buttonRigth {
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    margin-top: 19.575rem;
    margin-left: 14.023rem;
}

.play-buttonRigth::before {
    content: '';
    position: absolute;
    left: 35%;
    top: 30%;
    width: 0;
    height: 0;
    border-left: 25px solid #171717;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    cursor: pointer;
}

</style>