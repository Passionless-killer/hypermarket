<template>
    <div class="wapper" ref="wapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:'bscroll',
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        this.scroll= new BScroll(this.$refs.wapper,{
            probeType:2,
            pullUpLoad:true,
            click:true
        })
        this.scroll.on('scroll',(position)=>{this.$emit('scrollPosition',position)})
    }
}
</script>
<style scoped>
.wapper{
    height: 300px;
    position: relative;
}
</style>