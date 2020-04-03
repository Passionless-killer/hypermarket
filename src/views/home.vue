<template>
    <div class="homeView">
        <homeNavBar></homeNavBar>
        <tabNav @sected='sected' :titles="['精选','流行','热销']" ref="tabNav1" v-show="isFixed"></tabNav>
        <div class='home'>
            <bscroll ref="scroll" @scrollPosition='scrollPosition'>
                <swiper @imgLoad="imgLoad"></swiper>
                <active></active>
                <tabNav @sected='sected' :titles="['精选','流行','热销']" ref="tabNav2" v-show="!isFixed"></tabNav>
                <contextbox :goods="goods"></contextbox>
            </bscroll>
        </div>
        <gotop v-show="toTop"></gotop>
    </div>
</template>
<script>
import homeNavBar from 'views/home/homeNavBar'
import swiper from './home/swiper'
import active from './home/active'
import contextbox from './home/context'
import tabNav from '../components/content/tabNav'
import bscroll from '../components/common/scroll/scroll'
import gotop from '../components/content/gotop'
export default {
    name:"home",
    components:{
        swiper,active,tabNav,bscroll,contextbox,homeNavBar,gotop
    },
    data(){
        return {
            isFixed:false,
            tabHeight:0,
            saveY:0,
            curentIndex:0,
            products:[],
            popular:[],
            hot:[],
            goods:[],
            toTop:false
        }
    },
    created(){
        this.$axios
            .get('/mockdata')
            .then(res=>{res=res.data;this.goods=this.products=res.products;this.popular=res.popular;this.hot=res.hot;})
    },
    activated(){
        this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
        window.console.log(this.saveY)
    },
    deactivated(){
        this.saveY=this.$refs.scroll.scroll.startY
        window.console.log(this.saveY)
    },
    methods:{
        imgLoad(){
            this.tabHeight=this.$refs.tabNav2.$el.offsetTop
        },
        scrollPosition(position){
            this.toTop=-(position.y)>50
            this.isFixed=-(position.y)>this.tabHeight
        },
        sected(index){
            this.$refs.tabNav1.$data.currentIndex=index
            this.$refs.tabNav2.$data.currentIndex=index
            switch(index){
                case 0:
                    this.goods=this.products;
                    break;
                case 1:
                    this.goods=this.popular;
                    break;
                case 2:
                    this.goods=this.hot;
                    break;
                default:
                    this.goods=this.products;
            }
        }
    }
}
</script>
<style scoped>
.homeView{
    height:100vh;
}
.home{
    position: relative;
    left: 0px;
    height: calc(100% - 95px)
}
</style>