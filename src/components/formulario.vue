<template>
  
    <main>
    
        <form id="user-form" @submit="page === 'register' ? register($event) : update($event)">
    <!-- dados do cliente-->
        
        <fieldset class="informacoes-pessoais">
                <legend class="formulario__legenda" >INFORMAÇÕES PESSOAIS</legend>
                <Mensage />
                <div class="input-container">
                    <input name="cpf" id="cpf" class="input" v-model="cpf"   type="text"  placeholder="CPF" data-tipo="cpf"  >
                    <label class="input-label" for="cpf">CPF ou CNPJ</label>
                    <span class="input-mensagem-erro">Este campo não está válido</span>
                </div>
              
                
                
            </fieldset>
    <!-- dados do cliente-->
   <!--seção endereço--v-model="nome_loja"-->

        <fieldset class="informacoes-pessoais">
                <legend class="formulario__legenda">ENDEREÇO DA LOJA</legend>
                <div class="input-container" >
                    <input name="nome_loja" id="nome_loja"   class="input"   v-model="nome_loja"   type="text" placeholder="Nome" data-tipo="nome"  >
                    <label class="input-label" for="nome_loja">Nome da Loja</label>
                    <span class="input-mensagem-erro">Este campo não está válido</span>
                </div>
    
      <div class="input-container" >
                    <input name="cep" id="cep"   class="input" v-model="cep" type="text" placeholder="CEP" data-tipo="cep" pattern="[\d]{5}-?[\d]{3}" >

                    <label class="input-label" for="cep">CEP</label>
                    <span class="input-mensagem-erro">Este campo não está válido</span>
                </div>
      
      <div class="input-container" >
                    <input name="bairro" id="bairro"   class="input" v-model="bairro"  type="text" placeholder="Bairro" data-tipo="bairro"  >
                    <label class="input-label" for="bairro">Bairro</label>
                    <span class="input-mensagem-erro">Este campo não está válido</span>
                </div>
              

                <div class="input-container">
                    <input name="logradouro" id="logradouro"   class="input" v-model="logradouro"   type="text" placeholder="Rua" date-tipo="logradouro"  >

                    <label class="input-label" for="logradouro">Rua</label>
                    <span class="input-mensagem-erro">Este campo não está válido</span>
                </div>
                <div class="input-container">
                    <input name="num-casa" id="num-casa" class="input" v-model="num_casa"  type="text" placeholder="num-casa" date-tipo="num-casa"  >
                    <label class="input-label" for="Número da Casa">Número</label>
                    <span class="input-mensagem-erro">Este campo não está válido</span>
                </div>

                <div class="input-container">
                    <input name="cidade" id="cidade" class="input"  v-model="cidade"  type="text" placeholder="Cidade" data-tipo="cidade"  >
                    <label class="input-label" for="cidade">Cidade</label>
                    <span class="input-mensagem-erro">Este campo não está válido</span>
                </div>
                <div class="input-container">
                    <input name="estado" id="estado" class="input"  v-model="estado"  type="text" placeholder="Estado" data-tipo="estado"  >
                    <label class="input-label" for="estado">Estado</label>
                    <span class="input-mensagem-erro">Este campo não está válido</span>
                </div>
                <div class="input-container">
                    <textarea id="complemento"  name="complemento" rows="5" cols="60"  class="input" type="text" placeholder="Abservaçoes da localização" data-tipo="complemento" value="" ></textarea>
                    <label class="input-label" for="complemento">Complemento</label>
                    <span class="input-mensagem-erro">Este campo não está válido</span>
                </div>


            
    
</fieldset>
 <!--seção endereço-->

<!--dados de login-->
        
<fieldset class="informacoes-pessoais">
                <legend class="formulario__legenda">IMFORMAÇÕES BÁSICAS</legend>
                <div class="input-container" >
                    <input name="nome" id="nome" class="input"  v-model="nome"   type="text" placeholder="Nome" data-tipo="nome"  >

                    <label class="input-label" for="nome">Nome</label>
                    <span class="input-mensagem-erro">Este campo não está válido</span>
                </div>
                <div class="input-container">
                    <input name="email" id="email" class="input" v-model="email" type="email" placeholder="Email" data-tipo="email" >
                    <label class="input-label" for="email">Email</label>
                    <span class="input-mensagem-erro">Este campo não está válido</span>
                </div>
                <div class="input-container">                                             <!-- O que esta desntro dod parenteses sao os conjuntos de regras, a interrogaçao seguido do igual significa o que é permitido, o "." diz exceto quebra de linha  o "*" diz que precisa ter ao menos um desses caracteres, entre colchetes determinanos quais carateres será permitido o fica depois de "?!" significa que nao é permitido -->
                    <input name="senha" id="senha" class="input"  v-model="senha"  type="password" pattern="^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,10}$" title="A senha deve conter entre 6-8 caracteres, numeros de 0-9 , letras maiusculas e letras minuscaulas" placeholder="Senha" data-tipo="senha" >
                    <label class="input-label" for="senha">Nova Senha</label>

                    <span class="input-mensagem-erro">Senha invalida</span>

                </div>
                <div class="input-container">                                             <!-- O que esta desntro dod parenteses sao os conjuntos de regras, a interrogaçao seguido do igual significa o que é permitido, o "." diz exceto quebra de linha  o "*" diz que precisa ter ao menos um desses caracteres, entre colchetes determinanos quais carateres será permitido o fica depois de "?!" significa que nao é permitido -->
                    <input name="confirm_senha" id="confirm_senha" class="input"  v-model="confirm_senhacd"  type="password" pattern="^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,10}$" title="A senha deve conter entre 6-8 caracteres, numeros de 0-9 , letras maiusculas e letras minuscaulas" placeholder="Senha" data-tipo="senha" >
                    <label class="input-label" for="confirm_senha">Confirme a Senha</label>

                    <span class="input-mensagem-erro">Senha invalida</span>
<a :href="localizacaoLoja">Loja</a>
                </div>
            </fieldset>

        <!--dados de login-->

        <BtnSubmit :text="btntext"/>

    </form >
</main>
</template>
<script>
import BtnSubmit from "./btnSubmit.vue"
import Mensage from "./Mensage.vue"
export default {
name: "formulario",
data() {
    return {
       

        localizacao2: null,
        localizacaoLoja: "https://maps.google.com/maps?q=-12.256874, -38.941770&um=1&ie=UTF-8&sa=X&ved=2ahUKEwju46mdwfT6AhW1AtQKHVAKDroQ_AUoAHoECAIQCg",
        cpf: null,
        nome_loja: null,
        bairro: null,
        logradouro: null,
        num_casa: null,
        cidade: null,
        estado: null,
        complemento: null,
        nome: null,
        email: null,
        senha: null,
        confirm_senha: null,
        btntext: "Cadastrar",

        msg: "erro",
        msgClass: "error"
    }
},
props:  ["user", "page", " btntext"],

components: {
    BtnSubmit,
    Mensage
},
methods: {
   async register(e) {
        e.preventDefault()
        const data = {
           cpf: this.cpf,
           nome_loja: this.nome_loja,
           bairro: this.bairro,
           logradouro: this.logradouro,
           num_casa: this.num_casa,
           cidade: this.cidade,
           estado: this.estado,
           complemento: this.complemento,
           nome: this.nome,
           email: this.email,
           senha: this.senha,
           confirm_senha: this.confirm_senha

        }
        const jsonData = JSON.stringify(data)
        
        await fetch("http://127.0.0.1:3000/api/auth/register", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: jsonData
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            let auth = false

            if(data.error){
                this.msg = data.error 
                this.msgClass = "error"
               
            }
        })
        .catch((err)=> {
            
           alert(err)
        })
    }
    
   

}
}


</script>
<style scoped>
*{
margin: 0;
padding: 0;

}
fieldset{
width: 400px;
padding: 15px;

}


.formulario__legenda {
font-size: var(--fonte-tamanho-formulario-fieldset);
border-radius: 7px;
margin-bottom: 1rem;
}

.input-container {
font-weight: var(--fonte-peso-input);
position: relative;
margin-bottom: 1rem;
display: flex;
flex-direction: column;
justify-content: flex-end;
box-sizing: border-box;



}

.input {
box-sizing: border-box;
border-bottom: 1px solid var(--cor-secundaria);
padding: 1.375rem 0.5rem 0.5rem;
height: 2.65rem;
width: 100%;


}

.input::placeholder {
visibility: hidden;
color: #e7181800;
}

.input:focus {
outline: none;
}

.input-label {
position: absolute;
top: 1.375rem;
left: 0.5rem;
font-size: var(--fonte-tamanho-input-label);

transition: all .25s;
}

.input:not(:placeholder-shown) + .input-label, .input:focus + .input-label {
font-size: 0.875rem;
top: 0.25rem;
transition: all .25s;
}

.input-container--invalido {
margin-bottom: 0.5rem;
}

.input-container--invalido .input {
border: 1px solid red;
border-radius: 7px;
}

.input-container--invalido .input-label {
color: red;
}

.input-mensagem-erro {
display: none;
}

.input-container--invalido .input-mensagem-erro {
color: var(--cor-aviso);
display: block;
margin-top: 0.5rem;
padding-left: 0.5rem;

}

.textarea {
box-sizing: border-box;
border: 1px solid var(--cor-secundaria);
padding: 0.5rem;    
border-radius: 7px;
width: 100%;
min-height: 3rem;
}

.textarea-container {
position: relative;
margin-top: 2rem;
margin-bottom: 1rem;
font-weight: var(--fonte-peso-input);
}

.textarea::placeholder {
visibility: hidden;
}

.textarea:focus {
outline: none;
}

.textarea-label {
position: absolute;
top: 0.5rem;
left: 0.5rem;
font-size: var(--fonte-tamanho-input-label);
transition: all 0.25s;
}

.textarea:not(:placeholder-shown) + .textarea-label, .textarea:focus + .textarea-label {
font-size: 0.875rem;
top: -1.25rem;
transition: all 0.25s;
}

.textarea-container--invalido {
margin-bottom: 0.5rem;
}

.textarea-container--invalido .textarea {
border: 1px solid red;
}

.textarea-container--invalido .textarea-label {
color: var(--cor-aviso);
}

.textarea-mensagem-erro {
display: none;
}

.textarea-container--invalido .textarea-mensagem-erro {
display: block;
color: red;
margin-top: 0.5rem;
padding-left: 0.5rem;
}





form{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 500px;
width:100%;
padding: 20px;
background-color: rgb(179, 177, 175);
border-radius: 10px;
position: absolute;
left: 50%;
top: 700px;
transform: translate(-50%,-50%);


}
input{
padding: 1rem;
height: 25px;
border-radius: 5px;
border: none;
}
svg{
  width: 20px;
}
.localizacao{
margin:   4px 4px;
padding: 2px;

}
.localizacao:hover{
border: 2px solid  #f50505;
margin: 2px 2px;
padding: 2px;
color:#f50505 ;
background-color: #06b106;
border-radius: 5px;
}

textarea{
    border-radius: 10px 10px;
}
</style>