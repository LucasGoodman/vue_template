/**
 * Created by Lucas on 2019/10/30.
 */
import { $axios } from '../api';

export default {
    /**
     * 请求demo
     * @returns {*}
     */
    getDemo(params) {
        return $axios.get('/demo', { params });
    }
};
