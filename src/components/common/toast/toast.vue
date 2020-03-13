<template>
    <div class="toast"><P>{{message}}</P></div>
</template>
<script>
export deafult {
    name:"toast",
    data(){
        return {message:''
    }
}
</script>
<style scoped>
.toast{
    position:fixed;
    background-color:#111;
    top:50%;
    left:40%;
    padding:6px;
    color:#fff;
    border-radius:20%
}
</style>