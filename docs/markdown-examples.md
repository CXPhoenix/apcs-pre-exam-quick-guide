# Markdown 擴充功能範例

此頁面示範了 VitePress 提供的一些內建 Markdown 擴充功能。

## 語法高亮

VitePress 提供了由 [Shiki](https://github.com/shikijs/shiki) 驅動的語法高亮功能，並附帶了行高亮等額外功能：

**輸入**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**輸出**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 自訂容器

**輸入**

```md
::: info
這是一個資訊方塊。
:::

::: tip
這是一個提示。
:::

::: warning
這是一個警告。
:::

::: danger
這是一個危險警告。
:::

::: details
這是一個詳細資料區塊。
:::
```

**輸出**

::: info
這是一個資訊方塊。
:::

::: tip
這是一個提示。
:::

::: warning
這是一個警告。
:::

::: danger
這是一個危險警告。
:::

::: details
這是一個詳細資料區塊。
:::

## 更多

請查看[完整 Markdown 擴充功能列表](https://vitepress.dev/guide/markdown)的說明文件。