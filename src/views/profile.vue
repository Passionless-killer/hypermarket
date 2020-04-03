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
         boxCon1:[
                {"src":"~assets/img/profile/home.png","name":"待付款"},
                {"src":"~assets/img/profile/plant.png","name":"待发货"},
                {"src":"~assets/img/profile/diamond.png","name":"待收货"},
                {"src":"~assets/img/profile/crystal-ball.png","name":"退货"}
            ],
          boxCon2:[
                {"src":"src/assets/img/profile/champ.png","name":"优惠券"},
                {"src":"~assets/img/profile/jifen.png","name":"积分"},
                {"src":"~assets/img/profile/yue.png","name":"余额"},
                {"src":"~assets/img/profile/mywallet.png","name":"我的订单"}
            ],
            list:{
              title:"人气推荐",
              datas:[
                {"src":"~assets/img/profile/wedding.jpg",name:"婚纱"},
                {src:"~assets/img/profile/wedding.jpg",name:"婚纱"},
                {src:"~assets/img/profile/wedding.jpg",name:"婚纱"},
                {src:"~assets/img/profile/wedding.jpg",name:"婚纱"}
              ]
            }
      }
    }
}
</script>
<style scoped>

</style>