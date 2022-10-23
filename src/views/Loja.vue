<template>
    <div id="Loja" >
    <h1>{{nome_loja}}</h1>

    <ExibirProduto/>
      <div class="container">
        <ul class="produtos" id="produtos" >
              <li  class="conteudoPrincipal-produtos-link">
                <img :src="img_produto" :alt="title_produto">
              </li>
              <li>
              <h3  class="title">{{title_produto}}</h3>
              <p class="preco">{{preco_produto}}</p>
              <p class="local">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#e72b09"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>          
            <a :href="link_localizacao">{{localizacao_loja}}</a></p>
             
             
              <p id="status" @click="ativar_desativar">{{status}}</p>
            </li>

        </ul>
        
      </div>
    
    
    </div>
    </template>
    <script>
import ExibirProduto from '@/components/ExibirProduto.vue'
    
    
        export default {
    name: "Loja",
    data() {
        return {
            nome: "mangabeira",
            nome_loja: "nome da loja",
            img_produto: "/mL-03.png",
            title_produto: "Merkado Local",
            preco_produto: "100,00",
            localizacao_loja: "https://www.google.com/maps/place/Feira+de+Santana+-+Maria+Quitéria,+Feira+de+Santana+-+State+of+Bahia/@-12.2439016,-39.002277,12z/data=!3m1!4b1!4m5!3m4!1s0x0:0xedcb5910e54a3e44!8m2!3d-7.169297!4d-34.81169",
            link_loja: "http://www.merkadolocal.online",
            descricao_produto: "encontre tudo perto de você! Alguns minutos de estudo por dia valem a pena. Pesquisas mostram que os alunos que fazem do estudo um hábito têm maior probabilidade de alcançar suas metas. Reserve um tempo para estudar e receba lembretes usando seu programador de aprendizado.",
            status: "ativo"
        };
    },
    methods: {
        localizacao_loja: "https://maps.google.com/maps?q=mangabeira=X&ved=2ahUKEwjek8DElrr6AhVIvJUCHV2lB_QQ0pQJegQICBAB",
        ativar_desativar() {
            this.status = !this.status;
            this.status = this.status;
            if (this.status == true) {
                document.getElementById("status").style.backgroundColor = "#1cbe07";
                this.status = "ativo";
            }
            else {
                document.getElementById("status").style.backgroundColor = "red";
                this.status = "inativo";
            }
        }
    },
    components: { ExibirProduto }
}
        </script>
        <style scoped>
          *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          } 
  li, li img{
      width: 100px;
    }
    .container{
        margin-top: 150px;
    }
    #status{
      background-color: #1cbe07;
    }
    .produtos{
      background-color: rgb(240, 247, 243);
      border: 2px solid rgba(173, 173, 173, 0.616);
      margin: 0px;
      width: 220px;
    }
   
    ul{
      display: flex;
      list-style: none;
    }
   
    @media screen and (max-width: 660px) {
      .produtos{
      margin: 3px 3px 3px 3px;
   
    }
    }
    </style>