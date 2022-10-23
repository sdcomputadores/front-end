<template>
    <main>
      <section class="container"> <!--seção que mostra os produtos em tamanho grande-->
   <ul id="produto" class="produto" >
      <div class="botoes" >
           <div  @click="fechar" class="close"> </div>
           <div @click="passa_rigth" class="passa_rigth" ></div>
           <div  @click="passa" class="passa_left"> </div> 
        </div>
      <li>
        <img class="img" :src="img_produto1" :alt="title_produto">
      </li>
      <li><h3  class="title">{{title_produto}}</h3>
        <p class="preco">{{preco_produto}}</p>
        <p id="desc" class="desc" >Descrição:{{descricao_produto}}</p>
        <p id="link" class=""> <a :href="link_loja">
            <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 24 24" width="18px" fill="#6a34ff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg> {{Nome_loja}}</a></p>
          <p id="local" class="local ">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#e72b09"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>          
            <a :href="link_localizacao">{{localizacao_loja}}</a></p>
          <p id="whatsapp" class=""><a :href="whatsapp"> 
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve">
<g>
	<path style="fill:#2CB742;" d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5
		S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"/>
	<path style="fill:#FFFFFF;" d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42
		c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242
		c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169
		c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097
		c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
          </svg>
          {{contato_loja}}</a></p>
                  
          </li>
        </ul>
    
  </section> <!--seção que mostra os produtos em tamanho grande-->
  

</main>
</template>
<script>

 

    export default {
      name: 'ExibirProdutos',
      data(){
        return { 
         
          mostra_pequeno: true ,
          produto: true,

          img_produto1: '/mL-03.png',
          img_produto2: '/mL-03.png',
          img_produto3: '/mL-03.png',
          img_produto4: '/mL-03.png',
          img_produto5: '/mL-03.png',
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