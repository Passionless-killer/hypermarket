<template>
    <div>
        <box :boxCon="boxCon"></box>
    </div>
</template>
<script>
import box from '@/components/content/box'
export default {
    name:'active',
    components:{box},
    data(){
        return {
            boxCon:[
                {"src":"@/assets/img/buycar.png","name":"倒计时"},
                {"src":"@/assets/img/buycar.png","name":"倒计时"},
                {"src":"@/assets/img/buycar.png","name":"倒计时"},
                {"src":"@/assets/img/buycar.png","name":"倒计时"}
            ]
        }
    }
}
</script>
<style scoped>
</style>