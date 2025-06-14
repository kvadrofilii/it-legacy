---
title: Обновление всех npm-пакетов
description: Обновление всех npm-пакетов
keywords: ['npm', 'nodejs', 'шпаргалка']
tags: ['npm', 'nodejs', 'шпаргалка']
---

Пакет `npm-check-updates` обновляет зависимости `package.json` до последних версий, игнорируя указанные версии.

Глобальная установка `npm-check-updates`

```shell
npm i -g npm-check-updates
```

Запуск в папке проекта для сканирования зависимостей

```shell
ncu
```

Обновление файла `package.json`

```shell
ncu -u
```

:::info
`npm-check-updates` изменяет только файл `package.json`
:::

Выборочное обновление зависимостей в интерактивном режиме

```shell
ncu -i
```

Установка зависимостей в проекте

```shell
npm i
```

:::info
Зависимости можно установить любым пакетным менеджером
:::

## Ссылки

- https://www.npmjs.com/package/npm-check-updates
