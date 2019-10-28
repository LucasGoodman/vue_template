import element from './element';
import filters from './filter/index';
import directives from './directives/index';

const plugins = [element, filters, directives];

export default {
    install(Vue) {
        plugins.forEach(plugin => {
            Vue.use(plugin);
        });
    }
};
