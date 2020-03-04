<template>
    <navBar>
        <div slot="nav-left" class="left"><div ></div></div>
        <div slot="nav-center">
            <div class="center">
                <span :class="{isActived:currentIndex==index}" 
                        v-for="(item,index) in title" :key="item"
                        @click="titleTop(index)">{{item}}</span>
            </div>
        </div>
    </navBar>
</template>
<script>
import navBar from 'components/common/NavBar/navBar'
export default {
    name:'homeNavBar',
    data(){
        return {currentIndex:0}
    },
    props:{
        title:Array
    },
    components:{
        navBar
    },
    mouted(){
        window.console.log(this.title)
    },
    methods:{
        titleTop(index){
            this.$emit('titleTop',index)
        }
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
.isActived{
    color: seagreen;
}
</style>