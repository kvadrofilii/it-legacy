---
title: Объединение типов (Union Types)
description: Объединение типов (Union Types)
keywords: ['typescript', 'ts', 'шпаргалка']
tags: ['typescript', 'ts', 'шпаргалка']
---

# Объединение типов (Union Types)

Для объединения типов используется `|` оператор, позволяя переменной иметь несколько типов.

## Примитивы

Объединения примитивов позволяют определить переменную, которая может хранить значение двух или более типов:

```ts
let id: number | string | undefined;
id = 1234;
id = '1234';
```

### Можно создать Union Type для дальнейшего переиспользования

```ts
type Id = number | string | undefined;

let id: Id;
id = 1234;
id = '1234';
```

## Интерфейсы (interface)

Переменная, объявленная с типом объединения, может содержать значения, принадлежащие любому из этих типов.

```ts
interface Common {
    id: number;
    name: string;
}

interface User {
    login: string;
    password: string;
}

type Person = Common | User;
```

### Валидные варианты

```ts
const common: Person = {
    id: 4,
    name: 'Michael',
};

const user: Person = {
    login: 'michael',
    password: 'qwerty',
};

const person: Person = {
    id: 4,
    name: 'Michael',
    login: 'michael',
    password: 'qwerty',
};
```

### Невалидные варианты

```ts
const common: Person = {
    name: 'Michael',
};

const user: Person = {
    login: 'michael',
};

const person: Person = {
    id: 4,
    password: 'qwerty',
};
```

Переменная должна содержать все обязательные поля одного из объединяемых типов или все обязательные поля одного из объединяемых типов с любыми полями второго.

## Классы (Classes)

По умолчанию можно использовать только общие методы и переменные для всех объединённых классов.

```ts
class First {
    a: number;
    b: number;

    start(): void {}

    name(): string {
        return 'First';
    }
}

class Second {
    a: number;
    c: number;

    stop(): void {}

    name(): string {
        return 'Second';
    }
}

function fn(cls: First | Second): void {
    cls.start(); // Error
    cls.stop(); // Error

    cls.b; // Error
    cls.c; // Error

    cls.a; // OK, задекларировано во всех типах
    cls.name(); // OK, задекларировано во всех типах
}
```

### Использование остальных методов возможно c `type guard` через `instanceof`.

```ts
function fn(cls: First | Second): void {
    if (cls instanceof First) {
        cls.start();
        cls.b;
    } else {
        cls.stop();
        cls.c;
    }
}
```
