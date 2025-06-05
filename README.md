# 🧩 TinyStorage Frontend

[![Vue 2](https://img.shields.io/badge/Vue-2.x-42b883?logo=vue.js)](https://vuejs.org/) [![Vuetify](https://img.shields.io/badge/UI-Vuetify-1867C0?logo=vuetify)](https://vuetifyjs.com/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**TinyStorage Frontend** — это веб-интерфейс для просмотра списка предметов и истории их движения (аудита) в системе учёта. Приложение предоставляет доступ только для чтения и отображает данные, поступающие с backend-сервиса.

---

## 🚀 Возможности

- 📋 Просмотр списка предметов
- 📈 Просмотр истории движения (аудита) по каждому предмету
- 🔐 OAuth2 авторизация через Keycloak
- 🌐 Интеграция с REST API (backend)

---

## 🛠️ Технологии

- **Vue 2** + **Vue Router**
- **Vuetify 2** — UI-библиотека
- **Keycloak JS** — авторизация
- **Axios** — HTTP-клиент

---

## ⚙️ Установка и запуск

```bash
# Клонировать репозиторий
$ git clone https://github.com/TinyStorage/TinyStorage-Frontend.git
$ cd TinyStorage-Frontend

# Установить зависимости
$ npm install

# Запустить в режиме разработки
$ npm run serve
```

Приложение будет доступно по адресу: `http://localhost:5001`

---

## 🔐 Авторизация

Авторизация реализована через **Keycloak**. При входе пользователь перенаправляется на Keycloak и получает `access_token`, который прикрепляется к каждому запросу.

---

## 📁 Структура проекта

```text
📦 TinyStorage-Frontend
├── src/
│   ├── views/           # Страницы: список предметов и аудит
│   ├── components/      # UI-компоненты
│   ├── router/          # Маршруты
│   ├── store/           # Vuex store (если используется)
│   ├── plugins/         # Vuetify и Keycloak
│   └── App.vue          # Главный компонент
├── public/              # Статика и HTML-шаблон
└── package.json         # Скрипты и зависимости
```

---

## 🧪 Скрипты

```bash
npm run serve         # Запуск dev-сервера
npm run build         # Сборка на прод
npm run lint          # Линтинг JS и Vue файлов
npm run prettier      # Форматирование кода
```

---

## 📄 Лицензия

Проект распространяется под лицензией [MIT](LICENSE).

---

_Проект создан в рамках инициативы по упрощению учёта предметов с помощью мобильного сканирования._
