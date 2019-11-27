#!/bin/sh
sed -i "s|\${VUE_APP_SERVER_URL}|$VUE_APP_SERVER_URL|g" /etc/nginx/conf.d/default.conf
grep '#VUE_APP_TEST' -rl /usr/share/nginx/html/ | xargs sed -i "s|#VUE_APP_TEST|$VUE_APP_TEST|g"
nginx -g "daemon off;"
