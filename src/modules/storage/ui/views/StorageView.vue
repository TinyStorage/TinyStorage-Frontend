<template>
  <v-container style="max-width: 1400px" class="text-left pa-5 mx-auto" fluid>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12">
            <h1 class="text-h6 text-sm-h5 font-weight-bold">Склад</h1>
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
            <template v-if="!filteredList.length">
              <p>Записи отсутствуют</p>
            </template>
            <template v-else>
              <v-simple-table>
                <template #default>
                  <thead>
                    <tr>
                      <th class="text-left">Идентификатор</th>
                      <th class="text-left">Название</th>
                      <th class="text-left">Владелец</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in filteredList" :key="item.id">
                      <td>{{ item.id }}</td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.borrower }}</td>
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
import { GetAllItems } from '../../repositories/storage-repository';

export default {
  name: 'StorageView',

  data() {
    return {
      // eslint-disable-next-line spaced-comment
      //TODO: заменить на данные с бэка
      itemList: [],
      filteredList: [],
      searchTimeoutId: null,
      searchValue: '',
    };
  },

  created() {
    this.fetchItems();
    this.filteredList = [...this.itemList];
  },

  methods: {
    ...mapMutations('alert', ['ADD_ALERT']),
    ...mapMutations('preloader', ['ADD_LOADER', 'REMOVE_LOADER']),

    async fetchItems() {
      try {
        this.ADD_LOADER();
        const result = await GetAllItems();
        this.itemList = result.data;
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
          this.filteredList = [...this.itemList];
        } else {
          const searchLower = this.searchValue.toLowerCase();
          this.filteredList = this.itemList.filter((item) => item.name.toLowerCase().includes(searchLower));
        }
      }, 400);
    },
  },
};
</script>
