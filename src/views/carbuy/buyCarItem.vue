<template>
    <div class="item">
        <div class="check"></div>
        <div class="goods">
            <img src="~assets/img/home.png"/>
            <span>{{buyCariteminfo.type}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'buyCarItem',
    props:{
        buyCariteminfo:{}
    }
}
</script>
<style scoped>
.item{
    height: 40px;
    width: 100%;
    position: relative;
}
.check{
    height:100%;
    border-right: 2px solid #f6f6f6;
    width: 30%;
}
.goods{
    width: 70%;
    
}
</style>