# 常見的正規表達式

> 蒐集一些常常會使用到的正規表達式。

## 僅限數字

```javascript
const numbers = /^[0-9\s]*$/;
```

## 僅限英文及數字

```javascript
const alphabetAndNumber = /^[a-zA-Z0-9\s]+$/;
```

## 欄位不可為空的

```javascript
const notNullable = /.+/g;
```

## 密碼原則

```javascript
const password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
```

## 電子郵件格式

```javascript
// Example: test123 @ gmail.com
const email = /^(([.](?=[^.]|^))|[\w_%{|}#$~`+!?-])+@(?:[\w-]+\.)+[a-zA-z.]{2,63}/;
```

## 身分證字號格式

```javascript
// Example: F 1 23456789
// 首位為 A-Z，後面接著 1 或 2，結尾為 8 個隨機數字。
const id = /^[A-Z](1|2)\d{8}$/i;
```

## 參考文章

1. [[Javascript] 常用正則表達式及驗證](https://dotblogs.com.tw/TingI/2018/07/02/164004)
2. [JavaScript 表單驗證](https://docs.google.com/document/d/1mSxRmAUx-rm0wJ9MtkISwTemZmilFguXhMLavy-zxkg/edit#)
3. [javascript regex for password containing at least 8 characters, 1 number, 1 upper and 1 lowercase [duplicate]](https://stackoverflow.com/questions/14850553/javascript-regex-for-password-containing-at-least-8-characters-1-number-1-uppe)
