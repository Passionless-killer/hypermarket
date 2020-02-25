<template>
    <div class="swiper">
        <mt-swipe :show-indicators="false">
            <mt-swipe-item><img src='~assets/img/home/swiper-1.jpeg' @load="imgLoad()"></mt-swipe-item>
            <mt-swipe-item><img src='~assets/img/home/swiper-2.jpg'></mt-swipe-item>
            <mt-swipe-item><img src='~assets/img/home/swiper-3.jpg'></mt-swipe-item>
            <mt-swipe-item><img src='~assets/img/home/swiper-4.jpeg' ></mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css' 
Vue.use(Swipe, SwipeItem )
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
    name:'swiper',
    methods:{
        imgLoad(){
            this.$emit('imgLoad');
        }
    }
}
</script>
<style scoped>
.swiper{
    width: 100%;
    height: 300px;
}
</style>