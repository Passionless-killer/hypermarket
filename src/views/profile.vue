<template>
    <div>
        <div class="toper">
 <img src="~assets/img/profile/touxiang.jpg">
 <div class="info">
 <span class="header">商城</span>
 <span>成为服务中心</span>
 <a>普通会员</a>
 <a>打卡签到</a>
 </div>
 <img src="~assets/img/profile/erweima.jpg" />
</div>
<div class="status">
<div><a><img src="~assets/img/profile/home.png"/><span>待付款</span></a> </div>
<div><a><img src="~assets/img/profile/plant.png"/><span>待发货</span></a> </div>
<div><a><img src="~assets/img/profile/diamond.png"/><span>待收货</span></a> </div>
<div><a><img src="~assets/img/profile/crystal-ball.png"/><span>我的订单</span></a> </div>
</div>
<div class="status">
<div><a><img src="~assets/img/profile/champ.png"/><span>优惠券</span></a> </div>
<div><a><img src="~assets/img/profile/jifen.png"/><span>积分</span></a> </div>
<div><a><img src="~assets/img/profile/yue.png"/><span>余额</span></a> </div>
<div><a><img src="~assets/img/profile/mywallet.png"/><span>我的订单</span></a> </div>
</div>
<div class="intruduction">
<div class="title">人气推荐<img src="~assets/img/profile/chuan.png"/></div>
  <div class="body">  
    <img src="~assets/img/profile/wedding.jpg"/>
    <div class="infoo"> 婚纱礼服</div>
    <div class="infoo">￥13000</div>
    </div>
    <div class="body">  
    <img src="~assets/img/profile/wedding.jpg"/>
    <div class="infoo"> 婚纱礼服</div>
    <div class="infoo">￥13000</div>
    </div>
</div>
    </div>
</template>
<script>
export default {
    name:"profile"
}
</script>
<style scoped>
.toper{
  background: linear-gradient(pink,#fff);
  width: 100%;
}
.toper>img{
  width:30%;
  border-radius: 50%;
  margin: 10px 5px 10px 10px;
  vertical-align: middle;
}
.info{
  display: inline-block;
  width:45%;
  height: auto;
}
.info .header{
  font-weight: bolder;
}
.info span{
  margin: 10px 8px
}
.info a{
  float: left;
  margin: auto 10px;
  border: 1px solid #f5d38a;
}
.info+img{
  width:15%;
  border-radius: 0;
  float: right;
  margin-top: 40px
}
.status{
  width: 100%;
  height:auto;
  border-top:1px #f5d38a solid;
  border-bottom:1px #f5d38a solid;
}
.status div{
  display: inline-block;
  width:25%;
  height: auto;
  margin: 15px auto
}
.status div img{
  width:70%;
  margin: auto 15%;
}
.status div a span{
  text-align: center;
  padding:2px 15%
}
.intruduction{
  width:100%;
  height:auto;
  margin: 20px auto;
}
.intruduction .title{
  width:100%;
  text-align: center;
}
.intruduction .title img{
  width: 50px;
  height:50px;
  vertical-align:middle;
}
.intruduction .body{
  width: 48%;
  height: auto;
  float: left
}
.intruduction .body img{
  width: 96%;
   margin: 20px 2% 2px;
}
.intruduction .body .infoo{
  width:90%;
  text-align: center
}

</style>