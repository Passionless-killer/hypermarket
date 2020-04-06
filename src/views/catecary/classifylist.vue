<template>
 <div class="list">
          <ul>
            <li><a >推荐分类</a></li>
            <li><a @click="jump(1)">母婴玩具</a></li>
            <li><a @click="jump(2)">时尚女装</a></li>
            <li><a @click="jump(3)">优雅男装</a></li>
            <li><a @click="jump(4)">母婴用品</a></li>
          </ul>
        </div>
</template>
<script>
export default {
    name:"classifylist",
    methods:{
      jump(num){
          this.$emit('jump',num)
      }
    }
}
</script>
<style scoped>
.list{
  width: 22%;
  display: inline-block;
  background-color:var(--color-tint);
  position: fixed;
  height:100%
}
.list ul{
  width: 100%;
  height: auto;
  top:25%
}
.list ul li{
  display: block;
  width: 100%;
  margin: 45px  2px;
  text-align: center
}
</style>