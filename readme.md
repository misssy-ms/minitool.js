# minitool.js Readme.md

**日本語版は下にあります｡**

## English

This JavaScript library is used to implement very simple things more easily. It is extremely lightweight because it has only the bare minimum of functions. Also, it has no dependencies, so you can just copy and paste it.

### How to use

[Download the latest version](https://github.com/missssssssssi-ms/minitool.js/releases)

Copy and paste code: `<script src='minitool.min.js'></script>`


`minitool.<ket>(Argument1, Argument2)`

| key | result |
| ---- | ---- |
| `setDigit` | Specify the digit |
| `secToMsec` | Seconds to milliseconds |
| `secToTimer` | Convert seconds to a timer (MM:SS) |
| `month` | Convert the number obtained by `.getMonth()` into a two-digit month. |

#### setDigit

`minitool.setDigit(num, digit)`

Sets the number of digits to the specified number.

| Argument | index |
| ---- | ---- |
| `num` | Specify the number of digits to change |
| `digit` | Specify the number of digits |

example: `minitool.digit(1, 2)` → `01`

>[!TIP]
If the number of digits is exceeded (such as (10, 1)), nothing happens.

#### secToMsec

`minitool.secToMsec(sec)`

Convert seconds to milliseconds (x1000). That's it.

#### secToTimer

`minitool.secToTimer(sec)`

Puts seconds into timer format (MM:SS). Great for clocks and countdowns.

例:`minitool.secToTimer(62)` → 01:02

#### month

`minitool.month(m)`

Convert the number obtained by .getMonth() into the correct format (01-12). Just add 1 to make the number the same.

### TODO

- Create a calendar
- Real-time clock

### license

MIT license

Enjoy!

## Japanese 日本語

このJavaScriptライブラリは､とても簡単なことをより簡単に実装するために使います｡機能は必要最低限なので､極めて軽量です｡また､依存関係がないのでコピペだけでもいいです｡

### 使い方

[最新版をダウンロード](https://github.com/missssssssssi-ms/minitool.js/releases)します｡

コピペ用コード: `<script src='minitool.min.js'></script>`

### 書き方

`minitool.<キー>(引数1, 引数2)`

| キー | 効果 |
| ---- | ---- |
| `setDigit` | 桁を指定します |
| `secToMsec` | 秒をミリ秒にします |
| `secToTimer` | 秒をタイマー(MM:SS)の形にします |
| `month` | `.getMonth()`で得た数を2桁の月にします |

#### setDigit

`minitool.setDigit(num, digit)`

指定した桁数にします｡

| 引数 | 内容 |
| ---- | ---- |
| `num` | 桁を変更する数を指定します |
| `digit` | 桁数を指定します |

例: `minitool.digit(1, 2)` → `01`

>[!TIP]
桁数を超えている場合((10, 1)など)､では何も起こりません｡

#### secToMsec

`minitool.secToMsec(sec)`

秒をミリ秒(x1000)にします｡それだけです｡

#### secToTimer

`minitool.secToTimer(sec)`

秒をタイマー形式(MM:SS)にします｡時計やカウントダウンに最適です｡

例:`minitool.secToTimer(62)` → 01:02

#### month

`minitool.month(m)`

.getMonth()で得た数を正しい形(01~12)にします｡1を足して文字数を揃えるだけです｡

### TODO

- カレンダーを作成
- リアルタイム時計

### license

MIT license

Enjoy!
