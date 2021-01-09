<h1 align="center">VK-DONUTS</h1>
<p align="center">
NodeJS библиотека для работы с API VK Donuts
<br><br>
<img src="https://img.shields.io/github/stars/fakemancat/vk-donuts?style=for-the-badge" alt="stars"></img>
<img src="https://img.shields.io/github/forks/fakemancat/vk-donuts?style=for-the-badge" alt="forks"></img>
<img src="https://img.shields.io/github/issues/fakemancat/vk-donuts?style=for-the-badge" alt="forks"></img>
<a href="https://www.npmjs.com/package/vk-donuts"><img src="https://img.shields.io/npm/v/vk-donuts.svg?style=for-the-badge" alt="Version"></a>
<a href="https://www.npmjs.com/package/vk-donuts"><img src="https://img.shields.io/npm/dt/vk-donuts.svg?style=for-the-badge" alt="Downloads"></a>
</p>

## Установка

*yarn*
```bash
yarn add vk-donuts
```

*npm*
```bash
npm i -S vk-donuts
```

## Подключение
```js
// CommonJS
const { VKDonuts } = require('vk-donuts');
// ECMAScript module
import { VKDonuts } from 'vk-donuts';

const vkdonuts = new VKDonuts(groupId, groupToken[, apiVersion]);
```

|Параметр|Тип|Обязателен|Описание|
|-|-|-|-|
|groupId|number|Да|Айди группы|
|groupToken|string|Да|Токен группы|
|apiVersion|number|Нет|Версия API|

## Методы API

Список всех методов, их параметров, ответов и ошибок можно посмотреть на официальной странице [API VK Donuts](https://vkdonuts.ru/api)

#

**callMethod** - Универсальный метод отправки запроса, используется в случае если в основном классе *VKDonuts* нет реализации нужного метода

|Параметр|Тип|Обязателен|Описание|
|-|-|-|-|
|methodName|string|Да|Имя метода|
|params|object|Нет|Параметры метода|

Имя метода и его параметры берутся с официальной страницы [API VK Donuts](https://vkdonuts.ru/api)

Пример:
```js
async function run() {
    const response = await vkdonuts.callMethod('balance');

    console.log(response);
}

run().catch(console.error);
```

#

**getDonates** - Получить список донатов

Пример:
```js
async function run() {
    const donates = await vkdonuts.getDonates([params]);

    console.log(donates);
}

run().catch(console.error);
```

TODO - реализовать остальные методы

## Получение платежей

TODO - сделать получение платежей

## Ссылки
VK - https://fakeman-cat.tk/me

Беседа - https://fakeman-cat.tk/vkdonuts