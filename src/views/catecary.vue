<template>
    <div>
       <classifylist @jump='jump'></classifylist>
        <div class="classify">
             <bscroll ref="scroll">
              <list v-for="(list,index) in lists" :key="index" :list="list" class="listTip"></list>
             </bscroll>
        </div>
    </div>
</template>
<script>

import bscroll from '../components/common/scroll/scroll'
import list from '@/components/content/list'
import classifylist from './catecary/classifylist'
export default {
    name:"catecary",
    components:{list,classifylist,bscroll},
     data(){
        return {
          lists:[
            {
              ID:"1",
              title:"女装",
              datas:[]
            },
            {
              ID:"2",
              title:"母婴玩具",
              datas:[]
            },
             {
              ID:"3",
              title:"时尚女装",
              datas:[]
            }
          ],
          jumpHeight:[]
            }
     },
     created(){
       this.$axios.get('/mockdata').
                  then(res=>{res=res.data.active;this.lists[0].datas=res;this.lists[1].datas=res;this.lists[2].datas=res;})
     
     },
      mounted(){
        for(let i=0;i<this.lists.length;i++){
          let hei=this.$refs.scroll.$children[i].$el.offsetTop
          this.jumpHeight.push(-hei)
          window.console.log(hei)
          }
     },
     methods:{
       jump(num){
         this.$refs.scroll.scroll.scrollTo(0,this.jumpHeight[num])
       }
     }
}
</script>
<style  scoped>

.classify{
  width:78%;
  float:right
}
</style>