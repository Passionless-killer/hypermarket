<template>
<div class="gotop" @click="gotop">
    <img src="../../assets/img/home/top.png">
</div>
</template>
<script>
export default {
        name:"gotop",
        methods:{
            gotop(){
                window.console.log('111')
            }
        }
    }
</script>
<style scope>
.gotop{
    position:fixed;
    bottom: 80px;
    right: 20px;
}
.gotop img{
    width:80px
}
</style>