<template >
    <div>
        <p class="msg" :class="msgClass" v-if="msg">{{msg}}</p>
    </div>
</template>
<script>
export default { 
    name: "Mensage", 
        data(){
        return {

        msg: null,
        msgClass: null
    }}
}

</script>
<style scoped>
.msg{
    padding: 10px;
    padding-left: 60px;
    padding-right: 60px;
    border: .8px solid rgb(36, 35, 35);
    border-radius: 5px;
    color: rgb(54, 54, 54);
}
.success{
    color: rgb(2, 117, 2);
    border: .8px solid rgb(2, 117, 2);
}
.error{
    color: rgb(248, 10, 10);
    border: .8px solid rgb(248, 10, 10);
}
</style>