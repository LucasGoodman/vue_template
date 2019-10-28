<!-- 默认布局 -->
<template>
    <div class="layout-default">
        <transition name="fade">
            <router-view />
        </transition>
    </div>
</template>
<script>

export default {
    name: 'DefaultLayout',
    components: {}
};
</script>
<style lang="less"
       scoped>
.layout-default {
    overflow-x: hidden;
    position: relative;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>

