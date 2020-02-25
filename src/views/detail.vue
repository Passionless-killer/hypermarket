<template>
    <div>
        <detailBar></detailBar>
        <div class="detail" @scrollPosition='scrollPosition'>
            <bscroll ref="scroll" @scrollPosition='scrollPosition'>
                <swiper></swiper>
                <p class="pro-detail">潮流女装潮流女装潮流女装潮流女装潮流流女装潮流女装潮流女装潮流女装潮流女装潮流女装潮流女装</p>
                <controdution></controdution>
            </bscroll>
        </div>
    </div>
</template>
<script>
import detailBar from './detail/detailbar'
import swiper from './detail/swiper'
import controdution from './detail/contrudution'
import bscroll from '../components/common/scroll/scroll'
export default {
    name:'detail',
    components:{
        detailBar, swiper,controdution,bscroll
    },
    methods:{
        imgLoad(){
            this.tabHeight=this.$refs.tabNav2.$el.offsetHeight
        },
        scrollPosition(position){
            window.console.log(position)
        }
    }
}
</script>
<style scoped>
.detail{
    position: relative;
    left: 0px;
    height: 200px;
}
</style>