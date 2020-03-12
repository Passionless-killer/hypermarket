<template>
    <div class="carbuy-view">
        <navBar>
            <div slot='nav-center'>购物车( {{buycarLenght()}} )</div>
        </navBar>
        <div class="content">
            <bscroll>
                <buyCar :buyCarinfo="buyCarinfo"></buyCar>
            </bscroll>
        </div>
        <carbuyBar></carbuyBar>
    </div>
</template>  
<script>
import navBar from 'components/common/NavBar/navBar'
import bscroll from 'components/common/scroll/scroll'
import buyCar from './carbuy/buyCar'
import carbuyBar from './carbuy/bottomBar'
export default {
    name:"buycar",
    components:{
        navBar ,bscroll,buyCar,carbuyBar
    },
    data(){
        return {
            buyCarinfo:null}
    },
    methods:{
        buycarLenght(){
            return this.$store.state.cartList.length
        }
    },
    activated(){
        this.buyCarinfo=this.$store.state.cartList
    }
}
</script>
<style>
.carbuy-view{
    height:100vh
}
.content{
    height:calc(100% - 140px)
}
</style>
