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

Публикация пакета
```shell
npm publish
```

Публикация пакета с заданной областью (@you-account/)
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
