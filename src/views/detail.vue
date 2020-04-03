<template>
    <div class='detail-view'>
        <detailBar :title="['精选','商铺','详情','推荐']"
                    @titleTop="themeTop"></detailBar>
        <div class="detail">
            <bscroll ref="scroll">
                <swiper></swiper>
                <p class="pro-detail">潮流女装潮流女装潮流女装潮流女装潮流流女装潮流女装潮流女装潮流女装潮流女装潮流女装潮流女装</p>
                
                    <shop ref="shop"></shop>
                    <goods ref="goods"></goods>
            </bscroll>
        </div>
        <navBar class="bottom-bar">
            <div slot="nav-left"><img src="~assets/img/profile.png"/>收藏</div>
            <div slot="nav-center" @click="cartList"><img src="~assets/img/profile.png" >加入购物车</div>
            <div slot="nav-right"><img src="~assets/img/profile.png">收藏</div>
        </navBar>
    </div>
</template>
<script>
import detailBar from './detail/detailbar'
import swiper from './detail/swiper'
import bscroll from '../components/common/scroll/scroll'
import shop from './detail/shop'
import goods from './detail/goods'
import navBar from 'components/common/NavBar/navBar'
export default {
    name:'detail',
    data(){
        return {titleTop:[0]}
    },
    components:{
        detailBar, swiper,bscroll,shop,goods,navBar 
    },
    methods:{
        imgLoad(){
            this.tabHeight=this.$refs.tabNav2.$el.offsetHeight
        },
        themeTop(index){
            this.$refs.scroll.scroll.scrollTo(0,-this.titleTop[index],1000)
        },
        cartList(){
            this.$store.dispatch('cartList',111).then((data)=>{window.console.log(data)})
        }
    },
    mounted(){
        this.titleTop.push(this.$refs.shop.$el.offsetTop);
        this.titleTop.push(this.$refs.goods.$el.offsetTop)
    }
}
</script>
<style scoped>
.detail-view{
    height: 100vh;
}
.detail{
    position: relative;
    left: 0px;
    height: calc(100% - 95px);
}
.bottom-bar{
    width:100%;
    height:50px;
    position: relative;
    bottom: 0;
    left: 0;
}
.bottom-bar img{
    
    width: 24px;
    height: 24px;
    vertical-align: middle;
}
.pro-detail{
    font-size:15pt;
    fot-weight:100
}
.box{
    width:100%
}
</style>