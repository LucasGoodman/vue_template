<template>
    <div class="frame-error center-align">
        <h1>404</h1>
        <h5>页面未找到</h5>
    </div>
</template>
<style lang="less"
       scoped>
.frame-error {
    position: absolute;
    top: 0;
    padding-top: 30vh;
    width: 100%;
    height: 100%;
    text-align: center;
    background: #f5f5f5;

    > h1, > h5 {
        line-height: 110%;
        letter-spacing: 5px;
    }

    > h1 {
        margin-bottom: 20px;
        font-size: 80px;
    }

    > h5 {
        margin-bottom: 20px;
        font-size: 40px;
    }
}
</style>
