---
title: Шпаргалка по Map
description: Шпаргалка по Map
keywords: ['javascript', 'js', 'Map', 'шпаргалка']
tags: ['javascript', 'js', 'Map', 'шпаргалка']
---

# Map

`Map` – это коллекция ключ/значение, в котором ключ может быть любого типа.

`Map` можно представить как массив массивов, где в каждом подмассиве два значения. Первое - это ключ (key). Второе - значение (value).

```js
const map = [
    ['1', 'John'],
    [{ 2: Michael }, 'name'],
];
```

> Перебор `Map` и `Set` всегда осуществляется в порядке добавления элементов, так что нельзя сказать, что это – неупорядоченные коллекции, но поменять порядок элементов или получить элемент напрямую по его номеру нельзя.

## Создание Map

### `new Map` и добавление ключ/значение через метод `set`:

```js
const map = new Map();

map.set('1', 'str'); // строка в качестве ключа
map.set(1, 'num'); // цифра как ключ
map.set(true, 'bool'); // булево значение как ключ
```

### `new Map` и массив из массивов ключ/значение:

```js
const map = new Map([
    ['огурец', 500],
    ['помидор', 350],
    ['лук', 50],
]);
```

### `Map` из `Object` (`Object.entries`):

```js
const obj = {
    name: 'John',
    age: 30,
};

const map = new Map(Object.entries(obj));
```

## Методы и свойства

- `new Map()` – создаёт коллекцию.
- `map.set(key, value)` – записывает по ключу `key` значение `value`.
- `map.get(key)` – возвращает значение по ключу или `undefined`, если ключ `key` отсутствует.
- `map.has(key)` – возвращает `true`, если ключ `key` присутствует в коллекции, иначе `false`.
- `map.delete(key)` – удаляет элемент (пару «ключ/значение») по ключу `key` и возвращает булево значение.
- `map.clear()` – очищает коллекцию от всех элементов.
- `map.size` – возвращает текущее количество элементов.

## Перебор Map

- `map.keys()` – возвращает итерируемый объект по ключам,
- `map.values()` – возвращает итерируемый объект по значениям,
- `map.entries()` – возвращает итерируемый объект по парам вида `[ключ, значение]`, этот вариант используется по умолчанию в `for..of`.

```js
for (let [key, value] of map) {
    console.log(key, value);
}

// Другой вариант
for (let entry of map) {
    const key = entry[0];
    const value = entry[1];
}
```

## Создание `Object` из `Map`

```js
const map = new Map([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4],
]);

const obj = Object.fromEntries(map.entries());

// Более короткая запись. Метод entries вызвается по умолчанию.
const obj = Object.fromEntries(map);
```

## Создание `Array` из `Map`

```js
const map = new Map([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4],
]);

const array = [...map];

// Другой вариант
const array = Array.from(map);
```

Подробнее о Map можно ознакомится на сайте [Современный учебник JavaScript](https://learn.javascript.ru/map-set#map)
