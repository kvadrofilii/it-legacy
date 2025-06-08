---
title: Шпаргалка по Node Version Manager
description: Шпаргалка по Node Version Manager
keywords: ['javascript', 'js', 'nodejs', 'шпаргалка']
tags: ['javascript', 'js', 'nodejs', 'шпаргалка']
---

# Управление версиями Node.js и npm с помощью Node Version Manager

[Документация Node Version Manager](https://github.com/nvm-sh/nvm)

## Установка

nvm можно установить с помощью команд curl или wget:

```shell
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

`nvm install версия` - Установить новую версию node.js

`nvm ls` - Вывести на экран все установленные версии

`nvm install-latest-npm` - Установить последнюю поддерживаемую версию npm для текущей версии Node.js

`nvm current` - Проверить текущую версию

`nvm use версия` - Заменить текущую версию

`nvm uninstall версия` - Удалить версию
