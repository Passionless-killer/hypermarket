<template>
    <div class="shop">
        <div class="checkbox" @click="checkbox" >
          <img v-show="!this.buyCariteminfo.checked" src='~assets/img/check.png'/>
          <img v-show="this.buyCariteminfo.checked" src='~assets/img/checked.png'/>
        </div>
        <img src="~assets/img/shop.jpg" />
        <div class="infos">
            <span class="name">{{this.buyCariteminfo.aa}}</span> 
            <span class="info">m码；200g；粉色</span> 
            <span class="money">￥{{this.buyCariteminfo.price}}</span>
        </div>
        <div class="number">
            <span class="num">x {{this.buyCariteminfo.number}}</span>
            <div class="quantity">
              <span class="add" @click="add">+</span>
              <span class="amount">{{this.buyCariteminfo.number}}</span>
              <span class="sub" @click="sub">-</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'buyCarItem',
    props:{
        buyCariteminfo:{}
    },
    methods:{
      checkbox(){
        this.buyCariteminfo.checked=! this.buyCariteminfo.checked
      },
      add(){
          this.buyCariteminfo.number++
      },
      sub(){
          this.buyCariteminfo.number>1?this.buyCariteminfo.number--:this.buyCariteminfo.number
      }
    }
}
</script>
<style scoped>
.choseALL{
  width: 90%;
  margin: 20rpx 5%
}
.shop{
  width: 100vw;
  padding: 10px 5%;
}
.shop img{
  width:100px;
  height:60%;
  margin: 5% auto;
  vertical-align: middle
}
.infos{
  width:35%;
  display: inline-block;
  margin: 0 2%;
  vertical-align: middle;
}
.name{
  width:100%;
  height:30%;
  display: inline-block;
}
.info{
  width:100%;
  height:30%;
  display: inline-block;
}
.money{
  width: 100%;
  height: 40%;
  display:inline-block;
  color:chartreuse;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
}
.number{
  width:22%;
  display: inline-block;
}
.number .num{
  display: inline-block;
  width: 100%;
}
.number .fuhao{
  border: 1px solid skyblue;
  border-radius: 50%;
  span-align: center;
  width:20%;
  float: left;
}
.number input{
  border: 1px solid skyblue;
  width:40%;
  float: left;
}
.shop div.checkbox{
    display: inline-block;
    }
.shop div.checkbox img{
  width:30px
}
.shop .number .num{
  margin:4px auto
}
.shop .number .add,.sub,.amount{
  border:1px solid #bfadad;
  padding:2px 4px
}
</style>