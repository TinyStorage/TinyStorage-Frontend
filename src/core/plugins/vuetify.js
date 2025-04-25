import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ru from 'vuetify/lib/locale/ru';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  lang: {
    locales: { ru },
    current: 'ru',
  },
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: false,
    themes: {
      options: {
        customProperties: true,
      },
      light: {
        // Цветовая палитра
        'error-color': '#00457d',
        'main-color': '#838587',
        'second-color': '#bbccde',
        'info-color': '#75C797',
        'background-color': '#d1d9e6',
        'success-color': '#008C36',
        'warning-color': '#FABF0F',
        'color-gray-1': '#221f1f',
        'color-gray-2': '#403f41',
        'color-gray-3': '#57585a',
        'color-gray-4': '#6c6e70',
        'color-gray-5': '#808284',
        'color-gray-6': '#939597',
        'color-gray-7': '#a7a9ab',
        'color-gray-8': '#bbbdbf',
        'color-gray-9': '#d1d2d4',
        'color-gray-10': '#e6e7e8',
        black: '#000',
        white: '#fff',
      },
    },
  },
  breakpoint: {
    thresholds: {
      xs: 640,
      lg: 1280,
    },
    scrollBarWidth: 4,
  },
});

export default vuetify;
