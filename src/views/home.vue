<template>
    <div>
    <homeNavBar></homeNavBar>
    <tabNav @sected='sected' :titles="['精选','流行','热销']" ref="tabNav1" v-show="isFixed"></tabNav>
    <div class='home'>
        <bscroll ref="scroll" @scrollPosition='scrollPosition'>
            <swiper @imgLoad="imgLoad"></swiper>
            <active></active>
            <tabNav @sected='sected' :titles="['精选','流行','热销']" ref="tabNav2" v-show="!isFixed"></tabNav>
            <contextbox></contextbox>
        </bscroll>
    </div>
    </div>
</template>
<script>
import homeNavBar from 'views/home/homeNavBar'
import swiper from './home/swiper'
import active from './home/active'
import contextbox from './home/context'
import tabNav from '../components/content/tabNav'
import bscroll from '../components/common/scroll/scroll'
export default {
    name:"home",
    components:{
        swiper,active,tabNav,bscroll,contextbox,homeNavBar
    },
    data(){
        return {
            isFixed:false,
            tabHeight:0,
            saveY:0,
            curentIndex:0
        }
    },
    activated(){
        this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
        window.console.log(this.saveY)
    },
    deactivated(){
        this.saveY=this.$refs.scroll.scroll.startY
        window.console.log(this.$refs.scroll.scroll.y)
    },
    methods:{
        imgLoad(){
             window.console.log(this.$refs.tabNav2.$el.offsetHeight,this.$refs.tabNav2)
            this.tabHeight=400
        },
        scrollPosition(position){
            this.isFixed=-(position.y)>this.tabHeight
        },
        sected(index){
            this.$refs.tabNav1.$data.currentIndex=index
            this.$refs.tabNav2.$data.currentIndex=index
        }
    }
}
</script>
<style scoped>
.home{
    position: relative;
    left: 0px
}
</style>