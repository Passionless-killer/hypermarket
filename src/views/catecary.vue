<template>
    <div>
       <classifylist></classifylist>
        <div class="classify">
            <list v-for="(list,index) in lists" :key="index" :list="list"></list>
        </div>
    </div>
</template>
<script>
import list from '@/components/content/list'
import classifylist from './catecary/classifylist'
export default {
    name:"catecary",
    components:{list,classifylist},
     data(){
        return {
          lists:[
            {
              ID:"1",
              title:"女装",
              datas:[
                {src:"~assets/img/profile/wedding.jpg",name:"婚纱"},
                {src:"~assets/img/profile/wedding.jpg",name:"婚纱"},
                {src:"~assets/img/profile/wedding.jpg",name:"婚纱"},
                {src:"~assets/img/profile/wedding.jpg",name:"婚纱"}
              ]
            },
            {
              ID:"2",
              title:"男装",
              datas:[
                {src:"~assets/img/profile/wedding.jpg",name:"婚纱"},
                {src:"~assets/img/profile/wedding.jpg",name:"婚纱"},
                {src:"~assets/img/profile/wedding.jpg",name:"婚纱"},
                {src:"~assets/img/profile/wedding.jpg",name:"婚纱"}
              ]
            }
          ]
          
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