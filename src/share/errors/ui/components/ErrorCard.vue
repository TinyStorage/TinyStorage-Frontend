<template>
  <v-card flat color="transparent" class="text-center" height="50%">
    <v-card-text
      class="cardTitleColor--text text-center mt-10"
      :style="{ fontSize: '2rem', fontWeight: '600', lineHeight: '110%' }">
      {{ error.text }}
    </v-card-text>

    <v-row class="ma-0">
      <v-col
        class="mx-auto pa-0 mb-4"
        :class="error.img === 'ErrorImage' && $vuetify.breakpoint.mdAndUp ? 'col-3' : 'col-6'">
        <component :is="error.img" :viewBox="error.viewBox" :style="error.imgStyle" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ErrorImage from '../../errorImages/ErrorImage.vue';
import ErrorImage403 from '../../errorImages/ErrorImage403.vue';
import ErrorImage404 from '../../errorImages/ErrorImage404.vue';
import ErrorImage500 from '../../errorImages/ErrorImage500.vue';

export default {
  name: 'ErrorCard',

  components: {
    ErrorImage,
    ErrorImage403,
    ErrorImage404,
    ErrorImage500,
  },

  props: {
    error: {
      type: Object,
      required: true,
    },
  },

  methods: {
    goBack() {
      const { returnUrl } = this.$route.query;

      if (returnUrl) {
        this.$router.replace(returnUrl);
      } else {
        this.$router.go(-1);
      }
    },
  },
};
</script>
