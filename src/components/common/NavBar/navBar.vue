<template>
    <div class="navBar">
        <div class="nav-left"><slot name="nav-left"></slot></div>
        <div class="nav-center"><slot name="nav-center"></slot></div>
        <div class="nav-right"><slot name="nav-right"></slot></div>
    </div>
</template>
<script>
export default {
    name:'navBar'
    }
</script>
<style scoped>
.navBar{ 
    width:100%;
    height:44px;
    display: flex;
    line-height: 44px;
    text-align: center;
    background-color: var(--color-tint);
    color: #fff;
    font-size: 18px;
    position: relative;
    z-index: 9;
 }
 .nav-left ,.nav-right{
    width: 20%;
 }
 .nav-center{
     flex: 1;
 }
</style>