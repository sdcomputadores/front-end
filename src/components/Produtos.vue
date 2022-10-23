<template>
<main>
  <section id="container" class="container " ><!--seção que mostra os produtos em miniatura-->
    <ul id="produtos" class="produtos "   >
					<li>
            <img class="img" :src="img_produto1" :alt="title_produto">
          </li>
          <h3  class="title">{{title_produto}}</h3>
          <p class="preco">{{preco_produto}}</p>
          <p class="local">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#e72b09"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>          
            {{localizacao_loja}}</p>
         
  
    </ul>
  
  </section><!--seção que mostra os produtos em miniatura-->

</main>
</template>
<script>

 

    export default {
      name: 'produtos',
      data(){
        return { 
         
        

          img_produto1: '/mL-03.png',
       
          title_produto: "Merkado Local",
          preco_produto: "100,00",
          Nome_loja: "Merkado Local",
          localizacao_loja: "Adenil falcao",
          contato_loja: "75981115937 " ,
          whatsapp: "https://wa.me/+5575981115937" ,
          link_loja: "http://www.merkadolocal.online",
          link_localizacao: "https://maps.google.com/maps?q=mangabeira&sa=X&ved=2ahUKEwjek8DElrr6AhVIvJUCHV2lB_QQ0pQJegQICBAB" ,
          descricao_produto: "encontre tudo perto de você! Alguns minutos de estudo por dia valem a pena. Pesquisas mostram que os alunos que fazem do estudo um hábito têm maior probabilidade de alcançar suas metas. Reserve um tempo para estudar e receba lembretes usando seu programador de aprendizado."
          }
      },
      methods: {
        abrir(){
            
            document.querySelector('#whatsapp').classList.remove("invisivel")
            document.querySelector('#local').classList.remove("invisivel")
            document.querySelector('#link').classList.remove("invisivel")
            document.querySelector('#desc').classList.remove("invisivel")
            document.querySelector('#img').classList.remove("img")
            document.querySelector('#produtos').classList.remove("produtos")
            document.querySelector('#produtos').classList.add("produto")
           
        }
      
      }
    }
    </script>
    <style scoped>
      *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
   
  main{
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}  


.produtos{
  background-color: rgb(240, 247, 243);
  padding: 2px;
  width:120px;
  height: 200px;
  display: block;
}

.produtos:hover{
 border: 2px solid rgba(148, 148, 148, 0.616);
 padding: 0px;
}

ul{
  list-style: none;
}

svg{
      width: 20px;
    }
    a{
      text-decoration: none;
      color: rgb(75, 74, 74);
      font-size: 13px;
    }
   

.produtos .img{
  width: 110px;
  margin: 4px;
}
 /*aqui inicia CSS de descição dos produtos */


.produto{
  position: absolute;
  top: 200px;
  display: flex;
  background-color: rgb(240, 247, 243);
  border: 2px solid rgba(173, 173, 173, 0.616);
  padding: 0px;
  margin-left: -450px;
  margin-bottom: 150px;
  
  width:80%;
  height: 320px; 
  text-align: left;
  
}
.produto .img{
width: 330px;
margin: 0;
}


li p {
  margin-top: 5px;
}
ul{
  list-style: none;
  display: flex;
}
.invisivel{
        display: none;
      }
          /*seçao de botões*/
        
.close {
  position: absolute;
  right: 22px;
  top: 12px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: rgb(85, 84, 84);
}
.close:before {
  transform: rotate(45deg);
}


.close:after {
  transform: rotate(-45deg);
}
.passa_left{
  position: absolute;
  right: 472px;
  top: 122px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  margin: 0px;
}
.passa_left:hover {
  opacity: 1;
}
.passa_left:before{
  position: absolute;
  left: 15px;
  top: 13px;
  content: ' ';
  height: 20px;
  width: 2px;
  background-color: rgb(85, 84, 84);
}
.passa_left:after {
  position: absolute;
  
  left: 15px;
  content: ' ';
  height: 20px;
  width: 2px;
  background-color: rgb(85, 84, 84);
}
.passa_left:before {
  transform: rotate(45deg);
}
.passa_left:after {
  transform: rotate(-45deg);
}


.passa_rigth {
  position: absolute;
  right: 452px;
  top: 122px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  margin: 3px;
}
.passa_rigth:hover {
  opacity: 1;
}
.passa_rigth:before{
  position: absolute;
  left: -305px;
  
  content: ' ';
  height: 20px;
  width: 2px;
  background-color: rgb(85, 84, 84);
}
.passa_rigth:after {
  position: absolute;
  top: 13px;
  left: -305px;
  content: ' ';
  height: 20px;
  width: 2px;
  background-color: rgb(85, 84, 84);
}
.passa_rigth:before {
  transform: rotate(45deg);
}
.passa_rigth:after {
  transform: rotate(-45deg);
}

@media only screen and (max-width: 600px) {

  .close {
  
  right: 62px;
  top: 202px;
 
}

}
@media only screen and (max-width: 400px) {

  .close {
  
  right: 62px;
  top: 242px;
 
}

}

@media screen and (max-width : 600px) {
  .close {
  
  right: 12px;
  top: 12px;
 
}
.passa_left{

  right: -8px;
  top: 122px;

}
.passa_rigth {
 
  right: -38px;
  top: 122px;
 
}
 ul{
  display: flex;
  flex-wrap: wrap;
 }
  li img{
  width: 100%;
 
}
li{
  width: 100%;
}


.produto{
  
  background-color: rgb(240, 247, 243);
  margin: 2px;
  margin-left: -220px;
 
  width:80%;
  height: 860px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 600px;
  border: 2px solid rgba(173, 173, 173, 0.616);

}
.produto .img{
  width: 300px;
}
.produto p,.produto h3{
margin: 10px;
}
}





@media screen and (max-width: 660px) {
  .produtos{
  margin: 3px 3px 3px 3px;
 
  
}
}

    </style>