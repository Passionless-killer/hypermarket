<template>
    <div class='activemodu'>
        <div><img src='~assets/img/buycar.png'/><div>倒计时</div></div>
        <div><img src='~assets/img/buycar.png'/><div>倒计时</div></div>
        <div><img src='~assets/img/buycar.png'/><div>倒计时</div></div>
        <div><img src='~assets/img/buycar.png'/><div>倒计时</div></div>
    </div>
</template>
<script>
export default {
    name:'active'
}
</script>
<style scoped>
.activemodu{
    width: 100%;
    display: flex;
    text-align: center;
    padding: 10px 0 15px 0;
    border-bottom: 9px #f6f6f6 solid;
    font-size: 18px
}
.activemodu div{
    flex:1;
}
.activemodu img{
    width: 65px;
    height:65px;
    border-radius: 50%;
}
</style>