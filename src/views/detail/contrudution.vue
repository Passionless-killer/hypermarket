<template>
    <div class="detail">
        <div class="store">
            <h4>店铺</h4>
            <div class="store-name">
                <img src="~assets/img/buycar.png"/>
                <p>女装店</p>
            </div>
            <div class="store-rink">
                <p>w物流</p>
                <p>卖家</p>
                <p>宝贝</p>
            </div>
        </div>
        <div class="pro-detail">
            <h4>宝贝详情</h4>
            <img src='~assets/img/home/swiper-2.jpg'>
            <p class="pro-detail">潮流女装潮流女装潮流女装潮流女装潮流流女装潮流女装潮流女装潮流女装潮流女装潮流女装潮流女装</p>
            <img src='~assets/img/home/swiper-2.jpg'>
            <p class="pro-detail">潮流女装潮流女装潮流女装潮流女装潮流流女装潮流女装潮流女装潮流女装潮流女装潮流女装潮流女装</p>
            <img src='~assets/img/home/swiper-2.jpg'>
            <p class="pro-detail">潮流女装潮流女装潮流女装潮流女装潮流流女装潮流女装潮流女装潮流女装潮流女装潮流女装潮流女装</p>
            <img src='~assets/img/home/swiper-2.jpg'>
            <p class="pro-detail">潮流女装潮流女装潮流女装潮流女装潮流流女装潮流女装潮流女装潮流女装潮流女装潮流女装潮流女装</p>
        
        </div>
    </div>
</template>
<script>
export default {
    name:'controdution'
}
</script>
<style scoped>
.store{
    width:100%;
    text-align: center;
    top:10px;
    position: relative;
    border-top: #f6f6f6 solid 15px;
    
    border-bottom: #f6f6f6 solid 6px
}
.store-name{
    width: 40%;
    margin: auto 5px;
    border-right: 2px solid #f6f6f6;
    display: inline-block;
    
}
.store-name img{
    width:50px;
    height: auto;
}
.store-rink{
    width: 55%;
    display: inline-block;
}
.pro-detail{
    position: relative;
    top:10px
}
.store h4{
    text-align: left;
    position: relative;
    margin: 4px auto 4px 10px;
}
</style>