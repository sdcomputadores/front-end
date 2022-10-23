<template>
    <div>
        <input  class="submit" id="submit" type="submit" :value="text" >
    </div>
</template>
<script>
export default {
name: "Submit",
props: {
    text: ""
},
data(){
    return{

    }
}

}
</script>
<style>
.submit{
        font-size: 20px;
        background-color: rgb(54, 54, 54);
        border: none;
        color: aliceblue;
        margin: 20px;
        padding: 0;
        width: 200px;
        height: 40px;
        border-radius: 5px;
        text-transform: uppercase;
    }
</style>