<template>
   <form  class="login" action="">
       
       <Mensage/>
       
        <fieldset class="informacoes-pessoais">
					<legend class="formulario__legenda">Entrar</legend>
					
					<div class="input-container">
						<input name="email" id="email" class="input"  @:click="validadores" type="email" placeholder="Email" data-tipo="email" required>
						<label class="input-label" for="email">Email</label>
						<span class="input-mensagem-erro">Este campo não está válido</span>
					</div>
					<div class="input-container">                                             <!-- O que esta desntro dod parenteses sao os conjuntos de regras, a interrogaçao seguido do igual significa o que é permitido, o "." diz exceto quebra de linha  o "*" diz que precisa ter ao menos um desses caracteres, entre colchetes determinanos quais carateres será permitido o fica depois de "?!" significa que nao é permitido -->
						<input name="senha" id="senha" class="input"  @:click="validadores" type="password" pattern="^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,10}$" title="A senha deve conter entre 6-8 caracteres, numeros de 0-9 , letras maiusculas e letras minuscaulas" placeholder="Senha" data-tipo="senha" required>
						<label class="input-label" for="senha">Nova Senha</label>

						<span class="input-mensagem-erro">Senha invalida</span>

					</div>
					<BtnSubmit text="Entrar"/>
				</fieldset>
            </form>
    
</template>
<script>
import Mensage from '@/components/Mensage.vue'
import BtnSubmit from '@/components/btnSubmit.vue';

    export default {
    name: "login",
    data() {
        return {
            email: null,
            name: null,
            btntext: "Entrar"
        }
    },
    components:{
       Mensage,
       BtnSubmit
    },
    methods: {
        validadores(input) {
            const inputs = document.querySelectorAll("input");
            inputs.forEach(input => {
                if (input.dataset.tipo === "preco") {
                    SimpleMaskMoney.setMask(input, {
                        prefix: "R$ ",
                        fixed: true,
                        fractionDigits: 2,
                        decimalSeparator: ",",
                        thousandsSeparator: ".",
                        cursor: "end"
                    });
                }
                input.addEventListener("blur", (evento) => {
                    valida(evento.target);
                });
            });
            function valida(input) {
                const tipoDeInput = input.dataset.tipo;
                if (validadores[tipoDeInput]) {
                    validadores[tipoDeInput](input);
                }
                if (input.validity.valid) {
                    input.parentElement.classList.remove("input-container--invalido");
                    input.parentElement.querySelector(".input-mensagem-erro").innerHTML = "";
                }
                else {
                    input.parentElement.classList.add("input-container--invalido");
                    input.parentElement.querySelector("input-mensagem-erro").innerHTML = mostraMensagemDeErro(tipoDeInput, input);
                }
                console.log(input.validity.valid);
            }
            const tiposDeErro = [
                "valueMissing",
                "typeMismatch",
                "patternMismatch",
                "customError"
            ];
            const mensagensDeErro = {
                nome: {
                    valueMissing: " O campo de nome não pode ser vasio."
                },
                email: {
                    valueMissing: " O campo não pode estar vazio.",
                    typeMismatch: " O Email digitado não é valido"
                },
                senha: {
                    valueMissing: " O campo  não pode estar vazio.",
                    patternMismatch: " A senha deve conter entre 6-8 caracteres, numeros de 0-9 , letras maiusculas e letras minuscaulas."
                },
                dataNascimento: {
                    valueMissing: " O campo não pode estar vasio.",
                    patternMismatch: "Você precisa ter mais que 18 anos"
                },
                cpf: {
                    valueMissing: " O campo não pode estar vasio.",
                    patternMismatch: "O CPF digitado não é valido."
                },
                cep: {
                    valueMissing: " O campo não pode estar vasio.",
                    patternMismatch: "O CEP digitado não é valido.",
                    customError: "Não foi possivel encontrar o CEP."
                },
                logradouro: {
                    valueMissing: " O campo não pode estar vasio."
                },
                cidade: {
                    valueMissing: " O campo não pode estar vasio."
                },
                estado: {
                    valueMissing: " O campo não pode estar vasio."
                },
                nome: {
                    valueMissing: " O campo não pode estar vasio."
                },
                preco: {
                    valueMissing: " O campo não pode estar vasio."
                }
            };
            const validadores = {
                dataNascimento: input => validaNascimento(input),
                cpf: input => validaCPF(input),
                cep: input => buscarCEP(input)
            };
            function mostraMensagemDeErro(tipoDeInput, input) {
                let mensagem = "";
                tiposDeErro.forEach(erro => {
                    if (input.validity[erro]) {
                        mensagem = mensagensDeErro[tipoDeInput][erro];
                    }
                });
                return mensagem;
            }
            function validaNascimento(input) {
                const dataRecebida = new Date(input.value);
                let mensagem = "";
                //aqui chama a função
                if (!maiorQue18(dataRecebida)) {
                    mensagem = "Você deve ter mais que 18 anos";
                }
                input.setCustomValidity(mensagem);
            }
            function maiorQue18(data) {
                const dataAtual = new Date();
                const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
                return dataMais18 <= dataAtual;
            }
            function validaCPF(input) {
                const cpfFormatado = input.value.replace(/\D/g, "");
                let mensagem = "";
                if (!checaCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)) {
                    mensagem = "O CPF digitado não é valido.";
                }
                input.setCustomValidity(mensagem);
                console.log(cpf);
            }
            function checaCPFRepetido(cpf) {
                const valoresRepetidos = [
                    "00000000000",
                    "11111111111",
                    "22222222222",
                    "33333333333",
                    "44444444444",
                    "55555555555",
                    "66666666666",
                    "77777777777",
                    "88888888888",
                    "99999999999"
                ];
                let cpfValido = true;
                valoresRepetidos.forEach(valor => {
                    if (valor == cpf) {
                        cpfValido = false;
                    }
                });
                return cpfValido;
            }
            function checaEstruturaCPF(cpf) {
                const multiplicador = 10;
                return checaDigitoVerificador(cpf, multiplicador);
            }
            function checaDigitoVerificador(cpf, multiplicador) {
                if (multiplicador >= 12) {
                    return true;
                }
                let multiplicadorInicail = multiplicador;
                let soma = 0;
                const cpfSemDigito = cpf.substr(0, multiplicador - 1).split("");
                const digitoVerificador = cpf.charAt(multiplicador - 1);
                for (let contador = 0; multiplicadorInicail > 1; multiplicadorInicail--) {
                    soma = soma + cpfSemDigito[contador] * multiplicadorInicail;
                    contador++;
                }
                if (digitoVerificador == confirmaDigito(soma)) {
                    return checaDigitoVerificador(cpf, multiplicador + 1);
                }
                return false;
            }
            function confirmaDigito(soma) {
                return 11 - (soma % 11);
            }
            //aqui começa o codigo do cep
            function buscarCEP(input) {
                const cep = input.value.replace(/\D/g, "");
                const url = `https://viacep.com.br/ws/${cep}/json/`;
                const options = {
                    method: "GET",
                    mode: "cors",
                    headers: {
                        "content-type": "application/json;charset=utf-8"
                    }
                };
                if (!input.validity.patternMismatch && !input.validity.valueMissing) {
                    fetch(url, options).then(response => response.json()).then(data => {
                        if (data.erro) {
                            input.setCustomValidity("CEP não encontrado.");
                            return;
                        }
                        input.setCustomValidity("");
                        preencheCamposViaCep(data);
                        return;
                    });
                }
            }
            function preencheCamposViaCep(data) {
                const bairro = document.querySelector("#bairro");
                const rua = document.querySelector("#logradouro");
                const cidade = document.querySelector("#cidade");
                const estado = document.querySelector("#estado");
                bairro.value = data.bairro;
                rua.value = data.logradouro;
                cidade.value = data.localidade;
                estado.value = data.uf;
            }
        }
    },
    components: { Mensage, BtnSubmit }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;

}
.login{
  margin-top: -400px;
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
.submit{
        font-size: 20px;
        background-color: rgb(54, 54, 54);
        border: none;
        color: aliceblue;
        margin: 20px;
        padding: 0;
        width: 200px;
        height: 40px;
    }
textarea{
        border-radius: 10px 10px;
    }
</style>