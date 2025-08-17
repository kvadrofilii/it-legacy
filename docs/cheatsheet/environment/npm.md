---
title: npm
description: Шпаргалка по работе с npm
keywords: ['npm', 'shell', 'шпаргалка']
tags: ['npm', 'shell', 'шпаргалка']
---

# Шпаргалка по работе с npm

`npm -g list` - Посмотреть список установленных глобально пакетов

`npm update -g` - Обновить установленные глобальные пакеты

## Создание npm-пакета

Войти в аккаунт npm

```shell
npm login
```

Инициализация пакета с заданной областью (@your_org_name/)

```shell
npm init --scope=your_org_name
```

Публикация пакета

```shell
npm publish
```

Публикация публичного пакета с заданной областью (@your_org_name/)

```shell
npm publish --access public
```

Удаления пакета из npm

```shell
npm unpublish <project>[@<version>]
```

## Повышение версии npm-пакета

```shell
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
```

## Ссылки

- [npm Docs](https://docs.npmjs.com/)
