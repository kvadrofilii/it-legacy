---
title: Типизация JSON
description: Типизация JSON
keywords: ['typescript', 'ts', 'рецепт']
tags: ['typescript', 'ts', 'рецепт']
---

# Типизация JSON

```ts
type JSONPrimitive = string | number | boolean | null;
type JSONObject = {
    [key: string]: JSONValue;
};
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;
```
