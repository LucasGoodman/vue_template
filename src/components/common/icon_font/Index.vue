<!-- 封装iconfont图标 -->
<template>
    <svg class="icon"
         aria-hidden="true">
        <use v-bind:xlink:href="`#icon-${name}`"></use>
    </svg>
</template>
<script>
import './index';

export default {
    name: 'IconFont',
    props: {
        name: {
            type: String,
            default: ''
        }
    }
};
</script>
<style lang="less"
       scoped>
.icon {
    overflow: hidden;
    width: 1em;
    height: 1em;
    fill: currentColor;
    vertical-align: middle;
}
</style>
