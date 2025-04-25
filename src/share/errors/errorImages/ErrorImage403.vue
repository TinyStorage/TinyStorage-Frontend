<template>
  <v-container class="text-center py-16">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-icon color="error" size="80">mdi-alert-circle</v-icon>
        <h1 class="display-1 font-weight-bold mb-3">403</h1>
        <h2 class="headline mb-3">Доступ запрещён</h2>
        <p class="subtitle-1 mb-5">У вас нет прав для просмотра этой страницы.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ErrorImage403',
  props: {
    viewBox: {
      type: String,
      default: '0 0 217 159',
    },
  },
};
</script>
