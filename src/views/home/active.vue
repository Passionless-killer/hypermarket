<template>
    <div>
        <box :boxCon="boxCon"></box>
    </div>
</template>
<script>
import box from '@/components/content/box'
export default {
    name:'active',
    components:{box},
    data(){
        return {
            boxCon:[ ]
        }
    },
    created(){
        this.$axios.get('/mockdata').then(res=>{this.boxCon=res.data.active})
    }
}
</script>
<style scoped>
</style>