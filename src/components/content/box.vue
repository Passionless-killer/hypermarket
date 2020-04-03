<template>
    <div class="box">
        <div v-for="(item,index) in boxCon" :key="index">
            <img :src="item.src"/>
            <div>{{item.name}}</div>
        </div>
    </div>
</template>
<script>
export default{
        name:'box',
        props:{
            boxCon:{}
        }
    }
</script>
<style scope>
.box{
    width: 100%;
    display: flex;
    text-align: center;
    padding: 10px 0 15px 0;
    border-bottom: 9px #f6f6f6 solid;
    font-size: 18px
}
.box div{
    flex:1;
}
.box img{
    width: 65px;
    height:65px;
    border-radius: 50%;
}
</style>