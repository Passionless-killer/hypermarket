<template>
    <div>
        <buyCarItem v-for='(item,index) in buyCarinfo' :key="index" :buyCariteminfo="item"></buyCarItem>
    </div>
</template>
<script>
import buyCarItem from './buyCarItem'
export default {
    name:'buyCar',
    components:{
        buyCarItem
    },
    data(){
        return {buyCarinfo:null}
    },
    prop:{
        buyCarinfo:{}
    },
    mounted(){
        window.console.log(this.buyCarinfo)
    }
}
</script>