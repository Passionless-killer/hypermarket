<template>
    <div>
        <navBar>
            <div slot='nav-center'>购物车( {{buycarLenght()}} )</div>
        </navBar>
        <div class="content">
            <bscroll>
                <buyCar></buyCar>
            </bscroll>
        </div>
    </div>
</template>  
<script>
import navBar from 'components/common/NavBar/navBar'
import bscroll from 'components/common/scroll/scroll'
import buyCar from './carbuy/buyCar'
export default {
    name:"buycar",
    components:{
        navBar ,bscroll,buyCar
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
        window.console.log(this.buyCarinfo)
    }
}
</script>