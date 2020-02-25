<template>
    <div class="contextitem" @click="detailid(11)">
        <div><img src='~assets/img/home/swiper-2.jpg'></div>
        <p class="item">潮流女装体恤</p>
    </div>
</template>
<script>
export default {
    name:'contextitem',
    methods:{
        detailid(id){
            window.console.log(id)
            this.$router.push({path:'/detail',query:{type:id}})
        }
    }
}
</script>
<style scoped>
.contextitem{
    width: 50%;
    position: relative;
    display: inline-block;
    padding: auto
}
.contextitem div{
    border:1px red solid;
    height: 50;
    
    margin: auto
}
.contextitem img{
    width:100%;
    height: 200px;
}
</style>