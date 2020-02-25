<template>
    <navBar>
        <div slot="nav-left" class="left"><div ></div></div>
        <div slot="nav-center">
            <div class="center">
                <span>精选</span>
                <span>商铺</span>
                <span>详情</span>
                <span>推荐</span>
            </div>
        </div>
    </navBar>
</template>
<script>
import navBar from 'components/common/NavBar/navBar'
export default {
    name:'homeNavBar',
    components:{
        navBar
    }
}
</script>
<style scoped>
.left{
    width:20px;
    height:20px;
    border-top:2px solid #000;
    border-right:2px solid #000;
    border-left: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transform: rotate(45deg);
    margin-top: 10px
}
.center{
    display: flex;
}
.center span{
    flex: 1
}
</style>