<template>
  <v-container style="max-width: 1400px" class="text-left pa-5 mx-auto" fluid>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12">
            <h1 class="text-h6 text-sm-h5 font-weight-bold">Аудит</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="3">
            <v-text-field
              v-model="searchValue"
              class="pt-0 mt-0"
              placeholder="Поиск по названию оборудования"
              prepend-inner-icon="mdi-magnify"
              color="primary1"
              clearable
              underlined
              @input="searchInput">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <template v-if="!productList.length">
              <p>Записи отсутствуют</p>
            </template>
            <template v-else>
              <v-simple-table>
                <template #default>
                  <thead>
                    <tr>
                      <th class="text-left">Идентификатор</th>
                      <th class="text-left">Название</th>
                      <th class="text-left">Свойство</th>
                      <th class="text-left">Значение</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in filteredList" :key="product.id">
                      <td>{{ product.id }}</td>
                      <td>{{ product.name }}</td>
                      <td>{{ product.property }}</td>
                      <td>{{ product.value }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex';

import ALERT_TYPES from '@/modules/alert/constants/alert-types';

export default {
  name: 'AuditView',

  data() {
    return {
      // eslint-disable-next-line spaced-comment
      //TODO: заменить на данные с бэка
      productList: [
        {
          id: 1,
          name: 'Велосипед',
          property: 'Работоспособность',
          value: 'Да',
        },
        {
          id: 2,
          name: 'Ноутбук',
          property: 'Работоспособность',
          value: 'Да',
        },
        {
          id: 3,
          name: 'Ноутбук',
          property: 'Работоспособность',
          value: 'Да',
        },
        {
          id: 4,
          name: 'Ноутбук',
          property: 'Работоспособность',
          value: 'Да',
        },
        {
          id: 5,
          name: 'Ноутбук',
          property: 'Работоспособность',
          value: 'Да',
        },
      ],
      filteredList: [],
      searchTimeoutId: null,
      searchValue: '',
    };
  },

  created() {
    this.filteredList = [...this.productList];
  },

  methods: {
    ...mapMutations('alert', ['ADD_ALERT']),
    ...mapMutations('preloader', ['ADD_LOADER', 'REMOVE_LOADER']),

    async fetchOrders() {
      try {
        this.ADD_LOADER();

        // eslint-disable-next-line spaced-comment
        //const result = await GetAllOrders();

        // eslint-disable-next-line spaced-comment
        //this.productList = result.data;
      } catch (error) {
        this.ADD_ALERT({ type: ALERT_TYPES.ERROR, text: error.message });
      } finally {
        this.REMOVE_LOADER();
      }
    },
    searchInput() {
      if (this.searchTimeoutId) {
        clearTimeout(this.searchTimeoutId);
      }

      this.searchTimeoutId = setTimeout(() => {
        if (!this.searchValue) {
          this.filteredList = [...this.productList]; // Сбрасываем фильтр
        } else {
          const searchLower = this.searchValue.toLowerCase();
          this.filteredList = this.productList.filter((item) => item.name.toLowerCase().includes(searchLower));
        }
      }, 400);
    },
  },
};
</script>
