import IconFont from './icon_font/Index.vue';

const components = [
    IconFont
];

export default {
    install(Vue) {
        components.forEach(component => {
            Vue.component(component.name, component);
        });
    }
};
