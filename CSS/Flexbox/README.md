# Flexbox

> 練習 CSS 的 **Flexbox** 排版。

## Properties

- **container**: 外部容器。
- **item**: 內部元素。

> 如果要使用 **Flexbox** 的話，必須將 display 設置為 **flex** 或 **inline-flex**。

| Name                | Description                                               |
|---------------------|-----------------------------------------------------------|
| **flex-direction**  | 將排序方向改為 row / column，同時也會決定主軸、交錯軸的方向 |
| **flex-wrap**       | 若 item 超出 container 範圍時自動換行                     |
| **flex-grow**       | 有剩餘空間自動伸展                                        |
| **flex-shrink**     | 當空間不足自動縮減                                        |
| **flex-basis**      | 設置基本寬度                                              |
| **justify-content** | 按主軸進行對齊                                            |
| **align-items**     | 按交錯軸進行對齊                                          |
| **align-self**      | 對個別 item 按交錯軸進行對齊                              |

> 可透過 flex 同時設置 flex-grow、flex-shrink、flex-basis。

## Reference

[Flexbox Crash Course 2022](https://www.youtube.com/watch?v=3YW65K6LcIA)
