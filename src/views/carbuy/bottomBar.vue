<template>
    <navBar class="carbuy-bar">
        <div slot="nav-left" @click="checkAll">
          <img v-show="!checked" src='~assets/img/check.png'/>
          <img v-show="checked" src='~assets/img/checked.png'/>
        </div>
        <div slot="nav-center">去结算( {{ this.$store.state.cartList.length}})</div>
        <div slot="nav-right">总计( {{ }} )</div>
    </navBar>
</template>
<script>
import navBar from 'components/common/NavBar/navBar'
export default {
    name:'carbuyBar',
    data(){
        return {checked:true}
    },
    components:{
        navBar
    },
    methods:{
        checkAll(){
            this.checked=!this.checked;
            this.$store.state.cartList.map(e=>{e.checked=this.checked});
            window.console.log(this.$store.state.cartList)
        },
        totle(){
            
        }
    }
}
</script>
<style scoped>
img{
    width:30px;
    vertical-align: middle;
}
.carbuy-bar{
    bottom:0;
    left:0;
}
</style>