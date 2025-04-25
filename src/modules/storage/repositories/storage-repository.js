import httpClient from '@/core/plugins/http-client';

const apiVersion = '/v1';
const apiRoute = `${apiVersion}/items`;

export async function GetAllItems() {
  const result = await httpClient
    .get(apiRoute)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error?.response?.data?.message || 'Ошибка получения списка оборудования.');
    });

  return result;
}

export async function CreateItem(formData) {
  const result = await httpClient
    .post(`${apiRoute}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error?.response?.data?.message || 'Ошибка добавления оборудования.');
    });

  return result;
}
