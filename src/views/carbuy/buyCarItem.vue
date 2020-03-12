<template>
    <div class="shop">
        <div class="checkbox" @click="checkbox" >
          <img v-show="!checked" src='~assets/img/check.png'/>
          <img v-show="checked" src='~assets/img/checked.png'/>
        </div>
        <img src="~assets/img/shop.jpg" />
        <div class="infos">
            <span class="name">{{this.buyCariteminfo.aa}}</span> 
            <span class="info">m码；200g；粉色</span> 
            <span class="money">￥150</span>
        </div>
        <div class="number">
            <span class="num">x1</span>
            <div class="quantity">
              <span class="add" @click="add">+</span>
              <span class="amount">{{number}}</span>
              <span class="sub" @click="sub">-</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'buyCarItem',
    data(){
      return {checked:true,number:1}
    },
    props:{
        buyCariteminfo:{}
    },
    created(){
      this.checked=this.buyCariteminfo.checked
    },
    methods:{
      checkbox(){
        this.buyCariteminfo.checked=! this.buyCariteminfo.checked
        this.checked=this.buyCariteminfo.checked
      },
      add(){
          this.number++
      },
      sub(){
          this.number--
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
  vertical-align: middle;
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
</style>