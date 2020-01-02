import Vue from 'vue';
import App from './App.vue';
import plugins from './plugins';
import router from './router';
import store from './store';

// 加载icon-font组件所需的样式文件
import '@/assets/icon_font/index.css';
// 使用自定义的插件
Vue.use(plugins);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
