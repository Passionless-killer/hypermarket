<template>
    <div class="tabNav">
        <span v-for="(item,index) in titles" 
            :key="index" 
            :class="{active:currentIndex===index}"
            @click="sected(index)">{{item}}</span>
    </div>
</template>
<script>
export default {
    name:'tabNav',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        sected(index){
            this.currentIndex=index
            this.$emit('sected',index)
        }
    }
}
</script>
<style scoped>
.tabNav{
    height:50px;
    width: 100%;
    display: flex;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    position: relative;
    background-color: #fff ;
    z-index: 8;
}
.tabNav span{
    flex: 1
}
.active{
    color:pink;
    border-bottom: 2px pink solid;
}
</style>