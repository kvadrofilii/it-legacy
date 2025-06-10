---
title: Пересечение типов (Intersection Types)
description: Пересечение типов (Intersection Types)
keywords: ['typescript', 'ts', 'шпаргалка']
tags: ['typescript', 'ts', 'шпаргалка']
---

# Пересечение типов (Intersection Types)

Для пересечения типов используется оператор `&` и требует, чтобы переменная имела свойства всех указанных типов.

```ts
interface Common {
  id: number;
  name: string;
}

interface User {
  login: string;
  password: string;
}

type Person = Common & User;
```

### Валидный вариант
```ts
const person: Person = {
  id: 4,
  name: 'Michael',
  login: 'michael',
  password: 'qwerty',
}
```

### Невалидные варианты
```ts
const common: Person = {
  id: 4,
  name: 'Michael',
}

const user: Person = {
  login: 'michael',
  password: 'qwerty',
}
```
