import Vue from 'vue';
import App from './App.vue';
import plugins from './plugins';
import router from './router';
import store from './store';

import './assets/css/index.less';

Vue.use(plugins);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
