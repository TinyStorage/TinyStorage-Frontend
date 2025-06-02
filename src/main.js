import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './core/plugins/vuetify';
import httpClient from './core/plugins/http-client';

import '@/core/plugins/global-components';
import '@/core/assets/styles/index.scss';
import '@/core/plugins/vee-validate';

import keycloak from './keycloak';

Vue.config.productionTip = false;
Vue.prototype.httpClient = httpClient;

keycloak
  .init({ onLoad: 'login-required', checkLoginIframe: false })
  .then((authenticated) => {
    if (!authenticated) {
      window.location.reload();
    } else {
      httpClient.defaults.headers.common.Authorization = `Bearer ${keycloak.token}`;

      Vue.prototype.$keycloak = keycloak;
      new Vue({
        router,
        store,
        vuetify,
        render: (h) => h(App),
      }).$mount('#app');
    }
  })
  .catch((error) => {
    console.error('Keycloak init error:', error);
  });
