<template>
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
</template>
<script>
export default {
    name:"top"
}
    </script>
 <style scope>
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
.info .top{
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
 </style>