<template>
<div class="list" :id="'type'+list.ID">
    <div class="showArea">
        <div class="top" >{{list.title}}</div>
        <div class="list-1" v-for="(item,index) in list.datas" :key="index" >
            <img :src="item.src">
            <div>{{item.name}}</div>
        </div>
  </div>
</div>
</template>
<script>
export default {
    name:"list",
    props:{
        list:{}
    }
}
</script>
<style scoped>
.list{
  width: 100%;
  display: inline-block;
}

.top{
  text-align: center;
  width:100%
}
.list-1{
  width:47%;
  margin: 3px 3px;
}
.list-1 img{
  width:100%;
  height:250px;
}
.list-1 div{
  text-align: center;
  height: 30px;
  line-height: 30px
}
.showArea{
    width:100%;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>