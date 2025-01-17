---
title: Шпаргалка по Git
description: Шпаргалка по Git
keywords: ['git', 'shell', 'шпаргалка']
tags: ['git', 'shell', 'шпаргалка']
---

# Шпаргалка по Git

## Первоначальная настройка

Задаём имя и почту

```shell
$ git config --global user.name "Ivan Ivanov"
$ git config --global user.email ivan.ivanov@email.com
```

Переименовываем главную ветку с master на main

```shell
$ git config --global init.defaultBranch main
```

## Основные команды

`git init` - Создание репозитория в текущей папке

`git add -A` - Добавить (обновить) все файлы в буферную зону

`git reset` - Сброс буферной зоны

`git add filename` - Добавить (обновить) файл в буферной зоне

`git commit -a -m"комментарий"` - Сохранить все добавленные измененые файлы в репозиторий

`git push` - Отправка коммита в удалённый репозиторий

`git pull` - Приём коммита с удалённого репозитория

`git status` - Посмотреть статус файлов

`git branch name_branch` - Создать новую ветку

`git checkout -b name_branch` - Создать новую ветку и перейти в неё

`git checkout name_branch` - Переключиться на другую ветку

`git branch -D name_branch` - Удаление локальной ветки

`git push origin --delete name_branch` - Удаление удаленной ветки

`git config --list --show-origin` - Выводит список всех настроек и показывает где именно они заданы

## Работа с тегами

`git tag v1` - Создание тега

`git checkout v1` - Переключение по имени тегами

`git tag` - Вывести список тегов
