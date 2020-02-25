<template>
       <tabbar>
        <tabbaritem path="/home" activedColor="red">
          <img src="~assets/img/home-actived.png" slot="tabbar-img-actived"/>
          <img src="~assets/img/home.png" slot="tabbar-img"/>
          <div slot="tabbar-text">首页</div>
        </tabbaritem>
        
        <tabbaritem path="/catecary" activedColor="blue">
          <img src="~assets/img/catecary-actived.png" slot="tabbar-img-actived"/>
          <img src="~assets/img/catecary.png" slot="tabbar-img"/>
          <div slot="tabbar-text">分类</div>
        </tabbaritem>
        
        <tabbaritem path="/buycar">
          <img src="~assets/img/buycar-actived.png" slot="tabbar-img-actived"/>
          <img src="~assets/img/buycar.png" slot="tabbar-img"/>
          <div slot="tabbar-text">购物车</div>
        </tabbaritem>
        
        <tabbaritem path="/profile">
          <img src="~assets/img/profile-actived.png" slot="tabbar-img-actived"/>
          <img src="~assets/img/profile.png" slot="tabbar-img"/>
          <div slot="tabbar-text">我的</div>
        </tabbaritem>
      </tabbar>
</template>
<script>
import tabbar from '../common/tabbar/tabbar'

import tabbaritem from '../common/tabbar/tabbar-item'
export default {
    name:"mainTabbar",
    components:{
        tabbar,tabbaritem
    }
}
</script>