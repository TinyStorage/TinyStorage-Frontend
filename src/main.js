import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './core/plugins/vuetify';
import httpClient from './core/plugins/http-client';

import '@/core/plugins/global-components';
import '@/core/assets/styles/index.scss';
import '@/core/plugins/vee-validate';

import keycloak from './keycloak'; // <-- добавили импорт

Vue.config.productionTip = false;
Vue.prototype.httpClient = httpClient;

// Инициализация Keycloak
keycloak
  .init({ onLoad: 'login-required', checkLoginIframe: false })
  .then((authenticated) => {
    if (!authenticated) {
      window.location.reload();
    } else {
      // Можно передать токен в httpClient, если нужно
      httpClient.defaults.headers.common.Authorization = `Bearer ${keycloak.token}`;

      console.log(`Bearer ${keycloak.token}`);
      // Установим Keycloak в глобальный объект
      Vue.prototype.$keycloak = keycloak;
      // eslint-disable-next-line vue/require-name-property
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
