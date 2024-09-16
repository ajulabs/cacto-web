<script setup>
</script>

<template>
    <div>
        <header class="header">
            <div class="menu">
                <div class="logo">
                    <img src="@/assets/cacto_logo.svg" alt="Logo"/>
                </div>
                <nav class="nav-menu">
                    <ul>
                        <li class="Home"><a href="#">Início</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Benefícios</a></li>
                        <li><a href="#">Atendimento Especializado</a></li>
                        <li><a href="#">Planos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
    
    .header {
        width: 100%;
        height: 80px;
        background-color: #1A1A1A;
        box-shadow: 0px 4px 18px 0px #00000014;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000; 
    }

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1440px; 
        height: 100%;
        padding: 0 20px;
    }
    .logo {
        width: 126.6px;
        height: 36.64px;
        top: 24px;
        left: 119.42px;
        opacity: 1;
    }

    .logo img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    .nav-menu {
        width: 584px; 
        height: 24px;
        display: flex;
        gap: 30px; 
        display: flex;
        justify-content: center;
        flex: 1;
        top: 27px;
        left: 428px;
        opacity: 1; 
    }

    .nav-menu ul {
        list-style: none;
        display: flex;
        gap: 26px; 
        margin: 0;
        padding: 0;
    }

    .nav-menu a {
        text-decoration: none;
        color: #FF6400;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
    }

    .nav-menu a:hover {
        color: #FFFFFF;
    }

    .nav-menu .Home a {
        color: #FFFFFF;
    }


</style>