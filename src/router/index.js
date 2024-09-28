import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import Produtos from "@/views/Produtos.vue";
import Beneficios from "@/views/Beneficios.vue";
import AtendimentoEspecializado from "@/views/AtendimentoEspecializado.vue";
import Planos from "@/views/Planos.vue";

const routes = [
    {
        path:'/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path:'/Produtos',
        name: 'Produtos',
        component: Produtos,
    },
    {
        path:'/Beneficios',
        name: 'Beneficios',
        component: Beneficios,
    },
    {
        path:'/AtendimentoEspecializado',
        name: 'AtendimentoEspecializado',
        component: AtendimentoEspecializado,
    },
    {
        path:'/Planos',
        name: 'Planos',
        component: Planos,
    },
]


const router =createRouter({
    history:createWebHistory(),
    routes,
});


export default router;
