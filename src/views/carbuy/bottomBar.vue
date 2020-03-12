<template>
    <navBar class="carbuy-bar">
        <div slot="nav-left"><img src='~assets/img/check.png'/></div>
        <div slot="nav-center">去结算( {{ this.$store.state.cartList.length}})</div>
        <div slot="nav-right">总计</div>
    </navBar>
</template>
<script>
import navBar from 'components/common/NavBar/navBar'
export default {
    name:'carbuyBar',
    components:{
        navBar
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