<template>
    <div class="xuanz">
        <contextitem></contextitem>
        <contextitem></contextitem>
        <contextitem></contextitem>
        <contextitem></contextitem>
        <contextitem></contextitem>
        <contextitem></contextitem>
        <contextitem></contextitem>
        <contextitem></contextitem>
        <contextitem></contextitem>
        <contextitem></contextitem>
    </div>
</template>
<script>
import contextitem from './contextitem'
export default {
    name:'contextbox',
    components:{contextitem}
}
</script>
<style scoped>
.xuanz{
    width: 100%;
    border: 1px solid red;
    height: 700px;
    position: relative;
}
</style>