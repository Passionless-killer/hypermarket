<template>
    <div class="tabbar-item" @click="pathClick" :style="activedStyle">
        <slot name="tabbar-img-actived" v-if="isActived"></slot>
        <slot name="tabbar-img" v-else></slot>
        <slot name="tabbar-text"></slot>
    </div>
</template>
<script>
export default {
    name:'tabbar-item',
    props:{
        path:String,
        activedColor:{
            type:String,
            default:'green'
        }
    },
    data(){
        return {
        }
    },
    methods:{
        pathClick(){
            this.$router.push(this.path)
        }
    },
    computed:{
        isActived(){
           return this.$route.path.indexOf(this.path)==0
        },
        activedStyle(){
            return this.isActived?{color:this.activedColor}:{}
        }
    }
}
</script>
<style>
.tabbar-item{
    flex:1;
    text-align:center
}
.tabbar-item img{
    width:24px;
    height:24px;
    vertical-align: middle;
}
</style>