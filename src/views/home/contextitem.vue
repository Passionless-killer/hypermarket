<template>
    <div class="contextitem" @click="detailid(goodsItem.ID)">
        <div><img :src='goodsItem.ImageFile'></div>
        <p class="item">{{goodsItem.Name}}</p>
    </div>
</template>
<script>
export default {
    name:'contextitem',
    props:['goodsItem'],
    methods:{
        detailid(id){
            this.$router.push({path:'/detail',query:{ID:id}})
        }
    }
}
</script>
<style scoped>
.contextitem{
    width: 45%;
    display: inline-block;
}
.contextitem div{
    height: 50;
    
    margin: auto
}
.contextitem img{
    width:100%;
    height: 200px;
}
</style>