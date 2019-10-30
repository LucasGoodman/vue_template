<template>
    <div class="hello">
        <p class="text">
            Hello World
        </p>
        <p>
            图标：
            <icon-font :name="'demo'"></icon-font>
        </p>
        <el-button>element-UI按钮</el-button>
        <div class="segma-button">
            <div class="b50-btn">
                <el-button class="segma-s primary">
                    <i class="el-icon-loading"></i>segma-UI按钮
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld'
};
</script>

<style rel="stylesheet/less"
       lang="less"
       scoped>
.hello {
    margin-top: 20%;
    text-align: center;

    p {
        margin-bottom: 20px;
    }

    .text {
        font-size: 32px;
    }

    .segma-button {
        display: inline-block;
        margin-left: 20px;
    }
}
</style>
