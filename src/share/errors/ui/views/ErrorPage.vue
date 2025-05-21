<template>
  <v-container class="text-left pa-0 mx-auto" fluid style="max-width: 1920px">
    <v-row class="ma-0">
      <v-col cols="12" class="pa-0">
        <ErrorCard :error="error" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ErrorCard from '../components/ErrorCard.vue';

export default {
  name: 'ErrorPage',

  components: {
    ErrorCard,
  },

  data() {
    return {
      errors: [
        {
          img: 'ErrorImage403',
          btn: true,
          viewBox: '0 0 941 442',
          style: 'width: 100%; height: auto;',
        },
        {
          img: 'ErrorImage404',
          btn: true,
          viewBox: '0 0 941 442',
          style: 'width: 100%; height: auto;',
        },
        {
          img: 'ErrorImage500',
          btn: true,
          viewBox: '0 0 941 442',
          style: 'width: 100%; height: auto;',
        },
        {
          img: 'ErrorImage',
          btn: true,
          viewBox: '0 0 411 350',
          style: 'width: auto; height: 100%;',
        },
      ],
    };
  },

  computed: {
    error() {
      switch (Number(this.$route.params.id)) {
        case 403:
          return this.errors[0];
        case 404:
          return this.errors[1];
        case 500:
          return this.errors[2];
        default:
          return this.errors[3];
      }
    },
  },
};
</script>
