import Vue from 'vue';

export default () => {
    Vue.filter('demo', val => {
        return 'demo';
    });
};
