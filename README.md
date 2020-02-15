# Репозиторий для amp страниц

Работает Node.js и Vue с приминением серверного рендринга.

## Локальный запуск dev'а

1. npm ci
2. npm run dev:serve

## Сборка и запуск production'а

1. npm ci
2. npm run build
3. npm run start

## Live server для разработки построен с использованием

- [Node.js](https://nodejs.org/en/docs/)
- [WebPack](https://webpack.js.org/)
- [Express.js](https://vuejs.org/v2/guide/)
- [Socket.io](https://vuejs.org/v2/guide/)

Страницы с поддержкой amp доступны 
http://localhost:8090/

Страница с поддержкой livereload
http://localhost:8091/

LiveReload - работает через iframe

Для использования mustache синтаксиса иcпользуйте дерекиву v-pre

Для использования тега < template > иcпользуйте < Template >