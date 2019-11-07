import IconFont from './IconFont';

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
