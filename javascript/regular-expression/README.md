# Regular Expression

正規表達式（Regular Expression, regex），其中比對的規則稱為 `pattern`。

## 建立正規表達式

主要有兩種方式：字面值（Literal）、建構子（Constructor）。

```javascript
// 此方式適合 pattern 固定，效能較好。
const regex = /abc/;
```

```javascript
// 此方式適合會動態修改 pattern，效能較差。
const regex = new RegExp('abc');
```

## 使用方式

1. `RegExp.prototype.test()`：比對字串是否有匹配的部分，回傳 `true` 或 `false`。
2. `RegExp.prototype.exec()`：以陣列的方式回傳匹配成功的部份，否則回傳 `null`。可透過重複執行來取得剩下匹配的部分，直到回傳 `null`。
3. `String.prototype.match()`：以陣列的方式回傳匹配成功的部份，否則回傳 `null`。
4. `String.prototype.replace()`：會取代匹配成功的部分，回傳修改後的**新字串**，並不會對原來的字串作任何更動。
5. `String.prototype.search()`：回傳第一個匹配成功的索引，否則回傳 `-1`。
6. `String.prototype.split()`：根據 `pattern` 將字串分割，回傳分割結果的陣列。

## 規則

| Flag         | Description                       | Example         |
|--------------|-----------------------------------|-----------------|
| `g`          | Global，找到後對繼續往下比對       | `/abc/g`        |
| `i`          | Case insensitive，不區分大小寫     | `/abc/i`        |
| `s`          | 匹配換行符號                      | `/./s`          |
| `//`         | 普通字元                          | `/abc/`         |
| `.`          | 任意一個字元，除了換行符號（`\n`）   | `/./`           |
| `[]`         | 多個字元                          | `/[a-z]/`       |
| `^`          | 否定                              | `/[^a]/`        |
| `\d`         | 數字                              | `/\d/`          |
| `\w`         | 英文大小寫、數字、底線              | `/\w/`          |
| `\s`         | Space、Tab、Form feed、Line feed     | `/\s/`          |
| `\D`         | 數字除外，等同 `[^\d]`             | `/\D/`          |
| `\W`         | 文字除外，等同 `[^\w]`             | `/\W/`          |
| `\S`         | 空白除外，等同 `[^\s]`             | `/\S/`          |
| `\t`         | Tab                               | `/\t/`          |
| `\b`         | 比對單字間的空白                  | `/\b/`          |
| `\B`         | `[^\b]`                           | `/\B/`          |
| `*`          | 出現零次或以上，`{0,}`             | `/a*/`          |
| `+`          | 出現一次或以上，`{1,}`             | `/a+/`          |
| `?`          | 出現零次或一次，`{0,1}`            | `/a?/`          |
| `{}`         | 出現次數                          | `/a{2}/`        |
| `{min, max}` | 出現次數                          | `/a{1,5}/`      |
| `^`          | 開頭                              | `/^abc/`        |
| `$`          | 結尾                              | `/abc$/`        |
| `|`          | 或                                | `/abc | def/`   |
| `?=`         | 後面需接著                        | `/abc(?=def)/`  |
| `?!`         | 後面不能接著                      | `/abc(?!def)/`  |
| `?<=`        | 前面需接著                        | `/(?<=abc)def/` |
| `?<!`        | 前面不能接著                      | `/(?<!abc)def/` |
| `()`         | Group，將匹配到的內容分成不同群組。 | `/abc/i`        |
| `?`          | 關閉 Greedy Mode                  | `.*?`           |

## 例子

像是在 JavaScript30 的 06 Type Ahead 所遇到的 `numberWithCommas()`，它會將傳入的數字字串，每隔三位補上逗號。

```javascript
function numberWithCommas(num) {
    const regex = new RegExp(/\B(?=(\d{3})+(?!\d))/g);
    return num.replace(regex, ",");
}
```

## 參考

- [[JS] 正則表達式（Regular Expression, regex）](https://pjchender.dev/javascript/js-regex/)
