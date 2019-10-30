import element from './element';
import filters from './filter/index';
import directives from './directives/index';
import component from './component';

const plugins = [element, filters, directives, component];

export default {
    install(Vue) {
        plugins.forEach(plugin => {
            Vue.use(plugin);
        });
    }
};
