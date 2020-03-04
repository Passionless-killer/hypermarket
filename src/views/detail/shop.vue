<template>
        <div class="shop" ref="shops">
            <h4>店铺</h4>
            <div class="shop-name">
                <img src="~assets/img/buycar.png"/>
                <p>女装店</p>
            </div>
            <div class="shop-rink">
                <p>w物流</p>
                <p>卖家</p>
                <p>宝贝</p>
            </div>
        </div>

</template>
<script>
export default {
    name:'shop'
}
</script>
<style scoped>
.shop{
    width:100%;
    text-align: center;
    top:10px;
    position: relative;
    border-top: #f6f6f6 solid 15px;
    
    border-bottom: #f6f6f6 solid 6px
}
.shop-name{
    width: 40%;
    margin: auto 5px;
    border-right: 2px solid #f6f6f6;
    display: inline-block;
    
}
.shop-name img{
    width:50px;
    height: auto;
}
.shop-rink{
    width: 55%;
    display: inline-block;
}
.shop h4{
    text-align: left;
    position: relative;
    margin: 4px auto 4px 10px;
}
</style>