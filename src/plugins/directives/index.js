/**
 * Created by cld on 2019/07/31.
 */

const directives = [];

export default {
    install(Vue) {
        directives.forEach(directive => {
            Vue.directive(directive.name, directive.directive);
        });
    }
};
