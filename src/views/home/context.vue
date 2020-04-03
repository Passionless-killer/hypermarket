<template>
    <div class="xuanz">
        <contextitem v-for="(item,index) in goods" :key="index" :goodsItem="item">{{item}}</contextitem>
    </div>
</template>
<script>
import contextitem from './contextitem'
export default {
    name:'contextbox',
    props:{goods:{}},
    components:{contextitem},
}
</script>
<style scoped>
.xuanz{
    width: 100%; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>