<template>
<div id="Nav">
  <router-link  class="logo" to="/">
  <img class="img-logo" src="../../public/mL-03.png" alt=""/>
  <p class="title-logo"> Merkado Local</p></router-link>
<div class="btn-menu" @click="mostraNav">
  <span  ></span>
  <span  ></span>
  <span  ></span>
  <span  ></span>
</div>
  <p class="barraup"></p>
<div class="busca"> 
  <input class="seach" type="seach" placeholder="Desejo">
  <label class="btnseach" for="seach">Encontrar</label>
</div>
<nav  class="topnav" id="myTopnav">
  <ul>
  <li ><router-link to="/" id="produto" v-on:click="produto" >Produtos</router-link></li>
  <li ><router-link to="/Loja" id="Lojas" @click="Lojas">Lojas</router-link></li>
  <li ><router-link to="/login" id="Entrar" v-on:click="Entrar">Entrar</router-link></li>
  <li ><router-link to="/register" id="Cadastrar" v-on:click="Cadastrar">Cadastrar</router-link></li>
</ul>
</nav>
<nav  v-show="barra_nav" class="mobile" id="myTopnav">
  <ul>
  <li ><router-link to="/" id="produto" v-on:click="produto">Produtos</router-link></li>
  <li ><router-link to="/loja" id="Lojas" @click="Lojas">Lojas</router-link></li>
  <li ><router-link to="/login" id="Entrar" v-on:click="Entrar">Entrar</router-link></li>
  <li ><router-link to="/register"  id="Cadastrar" v-on:click="Cadastrar">Cadastrar</router-link></li>
</ul>
</nav>

</div>
</template>

<script>

   
    export default {
        name: "NavMenu",
       
        data(){
          return {
            barra_nav: false,
           
          }
        },
        methods: { 
         
          mostraNav(){
            this.barra_nav = !this.barra_nav  

          },
       

          produto(){
            document.querySelector('#produto').classList.add("ativo")
            document.querySelector('#Lojas').classList.remove("ativo")
            document.querySelector('#Entrar').classList.remove("ativo")
            document.querySelector('#Cadastrar').classList.remove("ativo")
        
        },
        Lojas(){
            document.querySelector('#Lojas').classList.add("ativo")
            document.querySelector('#produto').classList.remove("ativo")
            document.querySelector('#Entrar').classList.remove("ativo")
            document.querySelector('#Cadastrar').classList.remove("ativo")
            
        },
        Entrar(){
            document.querySelector('#Entrar').classList.add("ativo")
            document.querySelector('#produto').classList.remove("ativo")
            document.querySelector('#Lojas').classList.remove("ativo")
            document.querySelector('#Cadastrar').classList.remove("ativo")
            
        },
        Cadastrar(){
            document.querySelector('#Cadastrar').classList.add("ativo")
            document.querySelector('#produto').classList.remove("ativo")
            document.querySelector('#Lojas').classList.remove("ativo")
            document.querySelector('#Entrar').classList.remove("ativo")
            
        }

       
}
}
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .ativo{
    background-color: #b9b9b9;
    color: #3d3c3c;
    border-radius: 5px;
  }

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}ul{
  list-style: none;
}
.menu{
    display: block;
  }

.fa-bars{
 
  display: none;
}
.btnseach{
  background:  #b9b9b9;
  color: #3d3c3c;
  border: #3d3c3c solid 2px ;
  border-left: #3d3c3c solid 0 ;
  border-radius:0 5px 5px 0px;
  padding: 9.8px;
  margin-left: -2px;
}
.seach{
 
  color: #3d3c3c;
  border-radius:5px 0px 0px 5px;
  padding: 10px 11px;
}

.topnav, .barraup {
  position: absolute;
  background-color: rgb(75, 73, 73);
  height: 50px;
  width: 100%;
  top: 30px;
}

.topnav a{
  position: relative;
  float: left;
  color: #f2f2f2;
  padding: 12px 10px;
  text-decoration: none;
  font-size: 17px;
  text-transform: uppercase;
  left: 150px;
  margin: 4px;
  
}

a:hover {
  background-color: #b9b9b9;
  color: #3d3c3c;
  border-radius: 5px;
}
.busca{
  position: absolute;
  top: 35px;
  right: 50px;
  width: 300px;
  z-index: 1;
}


.logo{
  display: block;
  position:absolute;
  width: 100px;
  background-color: #b9b9b9;
  color: #3d3c3c;
  left: 30px;
  top:45px;
  font-size: 11px;
  padding: 0;
  z-index: 1;
}
.title-logo{
 position: absolute;
 width: 100px;
 background-color: #b9b9b9;
 left: 0px;
 top:46px;
 z-index: 1;
 font-size: 14px;
}
img{
  position:absolute;
  top: -40px;
  width: 100px;
  left: -.5px;
  background-color: #b9b9b9;
}
.mobile{
  display: none;
}
.btn-menu{
  display: none;
}
@media screen and (max-width: 789px){
  .topnav a{
 font-size: 11px;
  }
 
}
@media screen and (max-width: 750px){
  .topnav a{
 font-size: 11px;
  }

  .seach{
 padding: 8px 8px;
 width: 60px;
}
.btnseach{
  padding: 8px;
  font-size: 14px;
}
}
@media screen and (max-width: 660px) {
  .topnav a:not(:first-child) {display: none;}
.seach{
  padding: 10px 10px;
  width: 40px;
  font-size: 11px;
}
.btnseach{
  padding: 10px;
  margin-left: -2px;
  font-size: 11px;
  width: 20px;
}
.topnav{
  display: none;
}
.mobile{
  position: absolute;
  background-color: rgb(75, 73, 73);
  height: 180px;
  width: 120px;
  top: 85px;
  display: flex;
 right: 1px;
}
.mobile a{
  position: relative;
  float: right;
  color: #f2f2f2;
  padding: 12px 15px;
  text-decoration: none;
  font-size: 12px;
  text-transform: uppercase;
  left: 0px;
  margin: 4px;
  top: 0px;
  height: 10px;
  z-index: 1;
}



.logo{
 
  display: block;
  position:absolute;
  background-color: #b9b9b9;
  color: #3d3c3c;
  left: 0px;
  padding: 0;
  transition: 2s;
  scale: .7;
}

p {
  width: 100px;
  background-color: #b9b9b9;
  color: #3d3c3c;
  padding: 3px 0;
}
.btn-menu{
  display: block;
  width:  45px;
  height: 45px;
  position: absolute;
  margin: 50px auto;
  transition: .5s ease-in-out;
  cursor: pointer;

  z-index: 1;
  top: -10px;
  right: 5px;
  
  

  }
  .btn-menu span{
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: #b9b9b9;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25 ease-in-out;
  }
  .btn-menu span:nth-child(1){
  top: 0px;
  }
  .btn-menu span:nth-child(2),
  .btn-menu span:nth-child(3)
  {
  top: 15px;
  }
  .btn-menu span:nth-child(4){
  top: 30px;
  }
  


}

</style>
