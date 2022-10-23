<template>
  <div class="home">
<h1>Encontre tudo perto de você!</h1>
<main  class="conteudoPrincipal " >
        <Produtos id="produtos" v-show="produtos"/>
</main>

 
</div>
</template>
<div/>
<script>

 import Produtos from "@/components/Produtos.vue"

 export default {
  name: "HomeView",
  components: {

    Produtos
}, 
data(){
        return { 
         
          produtos: true,
         
 }
}, 
methods: {
   
 }

}
</script>
<style >

nav a {
  font-weight: bold;
  color: #2c3e50;
}


.home{
  position: absolute;
  top: 200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}


h1{
   position: absolute;
   top: -100px;
   align-content: center;
   text-align: center;
   margin-bottom: 150px;
  }
</style>