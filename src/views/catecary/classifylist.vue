<template>
 <div class="list">
          <ul>
            <li><a >推荐分类</a></li>
            <li><a href="#type2">母婴玩具</a></li>
            <li><a>时尚女装</a></li>
            <li><a>优雅男装</a></li>
            <li><a>母婴用品</a></li>
          </ul>
        </div>
</template>
<script>
export default {
    name:"classifylist"
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