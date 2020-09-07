<template>
    <div class="hello">
        <p class="text">Hello World</p>
        <p>
            图标：
            <icon-font name="demo"></icon-font>
        </p>
        <el-button type="primary"
                   size="small"> small
        </el-button>
        <el-button type="primary"
                   @click="handleClick"> 我们的名字
        </el-button>

        <el-button type="primary"
                   size="medium"> medium
        </el-button>
        <el-button type="primary"
                   plain> plain
        </el-button>
        <el-button type="primary"
                   :loading="true"></el-button>
        <el-button type="primary"
                   :loading="true"
                   plain></el-button>
        <br />
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    methods: {
        handleClick() {
            let txt = '西格马前端团队';
            alert(txt);
        }
    }
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
