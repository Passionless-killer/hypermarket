<template>
    <navBar class="carbuy-bar">
        <div slot="nav-left" @click="checkAll">
          <img v-show="!checkBut()" src='~assets/img/check.png'/>
          <img v-show="checkBut()" src='~assets/img/checked.png'/>
        </div>
        <div slot="nav-center">总计({{total()}})</div>
        <div slot="nav-right">去结算</div>
    </navBar>
</template>
<script>
import navBar from 'components/common/NavBar/navBar'
export default {
    name:'carbuyBar',
    data(){
        return {checked:true}
    },
    props:{cartList:{}},
    components:{
        navBar
    },
    methods:{
        checkAll(){
            this.checked=!this.checked;
           this.cartList.map(e=>{e.checked=this.checked});
           window.console.log(this.cartList)
        },
        checkBut(){
            if(!this.cartList||this.cartList.length==0){
                return  this.checked
            }else{
           return  this.checked=this.cartList.every(e=>e.checked==true);
            }
        },
        total(){   
            var sum = 0
            if(!this.cartList||this.cartList.length==0){
                return sum=0;
            }else{
                var a=this.cartList.filter(e=>{return e.checked==true});
                var b=a.map(e=>{return e.price*e.number});
                for(let i of b){sum+=i}
             }
                return sum
        }
    }
}
</script>
<style scoped>
img{
    width:30px;
    vertical-align: middle;
}
.carbuy-bar{
    bottom:0;
    left:0;
}
</style>