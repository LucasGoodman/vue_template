<!-- 封装iconfont图标 -->
<template>
    <svg class="icon"
         aria-hidden="true">
        <use v-bind:xlink:href="`#icon-${name}`"></use>
    </svg>
</template>
<script>
import '../../assets/icon/index';

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

