<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>
<script>
export default{
    name:'tabbar'
}
</script>
<style>
.tabbar{
    display:flex;
    height:49px;
    bottom:0;
    position: fixed;
    left:0;
    align-content:center;
    background-color: aliceblue;
    width:100%;
    box-shadow:0 3px 2px rgb(8,8,8,.8)
}
</style>