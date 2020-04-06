<template>
    <div>
        <top></top>
        <box :boxCon=" boxCon1"></box>
        <box :boxCon=" boxCon2"></box>
        <list :list="list"></list>
    </div>
</template>
<script>
import box from '@/components/content/box'
import list from '@/components/content/list'
import top from './profile/header'
export default {
    name:"profile",
    components:{box,list,top},
    data(){
      return {
         boxCon1:[],
          boxCon2:[],
            list:{
              title:"人气推荐",
              datas:[ ]
            }
      }
    },
    created(){
        
        this.$axios.get('/mockdata').then(res=>{this.boxCon1=this.boxCon2=res.data.active;this.list.datas=res=res.data.active})
    }
}
</script>
<style scoped>

</style>