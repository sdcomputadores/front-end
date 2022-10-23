<template>
    <div class="register">
        <h2>Criar Conta</h2>
       <Formulario :user="{}" page="register" btnText="Cadastrar"/>
    </div>
</template>
<script>
import Formulario from '../components/formulario.vue';

export default {
    name: "register",
    components: { Formulario },
    data(){
        return {
           
            btntext: "Entrar"
        }
    }
}
</script>
<style scoped>
.register{
   text-align: center;
   padding-top: 70px;
}

</style>