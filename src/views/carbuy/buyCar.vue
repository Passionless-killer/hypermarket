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
    props:{buyCarinfo:{}}
}
</script>