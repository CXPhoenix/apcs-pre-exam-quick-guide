# 🎯 APCS 初級實作考前整理小冊

> 初級實作拿滿分！掌握基礎語法就能穩穩過關！✨

---

## 🔥 一定要記得的「知識」

### 1️⃣ 輸入輸出格式 📥📤

**input() 讀取技巧**：

```python
# 單行單個數字
n = int(input())

# 單行多個數字 (空格分隔)
a, b, c = map(int, input().split())

# 讀取一整列數字到 list
numbers = list(map(int, input().split()))

# 讀取字串 (不需轉換)
s = input()
```

**輸出格式化**：

```python
# 基本輸出
print(42)

# 不換行輸出
print(42, end=' ')

# 多個變數輸出
print(a, b, c)  # 自動用空格分隔

# f-string 格式化 ⭐ 推薦
name = "Alice"
age = 18
print(f"{name} is {age} years old")

# 保留小數位數
pi = 3.14159
print(f"{pi:.2f}")  # 3.14
```

**⚠️ 常見錯誤**：
- ❌ 忘記 `int()` 轉換 → input() 預設是字串！
- ❌ 輸出多一個空格或換行 → 格式不符

---

### 2️⃣ 串列 (List) 必備操作 📝

**建立串列**：

```python
# 空串列
arr = []

# 指定初值
arr = [1, 2, 3, 4, 5]

# 重複元素
arr = [0] * 10  # [0,0,0,0,0,0,0,0,0,0]

# List Comprehension ⭐ 推薦
arr = [i*2 for i in range(5)]  # [0,2,4,6,8]
```

**常用方法**：

```python
arr = [1, 2, 3]

# 新增元素
arr.append(4)      # [1,2,3,4]
arr.insert(0, 0)   # [0,1,2,3,4]

# 刪除元素
arr.remove(2)      # 刪除值為 2 的元素
arr.pop()          # 刪除最後一個元素
arr.pop(0)         # 刪除索引 0 的元素

# 排序
arr.sort()         # 由小到大 (改變原串列)
arr.sort(reverse=True)  # 由大到小
sorted(arr)        # 回傳新排序串列 (不改變原串列)

# 反轉
arr.reverse()      # 反轉串列
arr[::-1]          # 回傳反轉後的新串列

# 其他
len(arr)           # 長度
sum(arr)           # 總和
max(arr), min(arr) # 最大、最小值
```

**💡 重要觀念**：
```python
# 二維串列初始化 ⚠️ 注意陷阱！
# 錯誤寫法 ❌
arr = [[0] * 3] * 2  # 會共用記憶體！

# 正確寫法 ✅
arr = [[0] * 3 for _ in range(2)]
```

---

### 3️⃣ 字串處理秘訣 🔤

**字串基本操作**：

```python
s = "Hello World"

# 索引與切片 (跟 list 一樣)
s[0]        # 'H'
s[-1]       # 'd'
s[0:5]      # 'Hello'
s[:5]       # 'Hello'
s[6:]       # 'World'

# 長度
len(s)      # 11

# 常用方法
s.upper()   # 'HELLO WORLD' (全大寫)
s.lower()   # 'hello world' (全小寫)
s.split()   # ['Hello', 'World'] (分割)
s.replace('World', 'Python')  # 替換

# 判斷
s.isdigit()  # 是否全為數字
s.isalpha()  # 是否全為字母
```

**字串與數字轉換**：

```python
# 字串 → 數字
int("123")     # 123
float("3.14")  # 3.14

# 數字 → 字串
str(123)       # "123"

# 字元 ↔ ASCII
ord('A')       # 65
chr(65)        # 'A'
```

**字串拼接**：

```python
# + 運算子
s = "Hello" + " " + "World"

# join() ⭐ 推薦 (效率較高)
words = ['Hello', 'World']
s = ' '.join(words)  # 'Hello World'

# f-string
name = "Alice"
s = f"Hello, {name}!"
```

---

### 4️⃣ 條件判斷實戰 🔀

**if-elif-else 結構**：

```python
score = 85

if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
elif score >= 60:
    print("D")
else:
    print("F")
```

**邏輯運算組合**：

```python
age = 20
is_student = True

# and (且)
if age >= 18 and age < 65:
    print("成年且未退休")

# or (或)
if age < 18 or age >= 65:
    print("未成年或已退休")

# not (非)
if not is_student:
    print("非學生")

# 組合使用
if (age >= 18 and age < 65) and is_student:
    print("成年學生")
```

**三元運算子 (簡潔寫法)**：

```python
# 一般寫法
if x > 0:
    result = "正數"
else:
    result = "非正數"

# 三元運算子 ⭐
result = "正數" if x > 0 else "非正數"
```

---

### 5️⃣ 迴圈實戰技巧 🔁

**for 迴圈常見用法**：

```python
# 基本 for
for i in range(5):
    print(i)  # 0,1,2,3,4

# 指定範圍
for i in range(1, 6):
    print(i)  # 1,2,3,4,5

# 指定步長
for i in range(0, 10, 2):
    print(i)  # 0,2,4,6,8

# 遍歷串列
arr = [10, 20, 30]
for num in arr:
    print(num)

# enumerate() ⭐ 同時取得索引和值
for i, num in enumerate(arr):
    print(f"arr[{i}] = {num}")
```

**while 迴圈**：

```python
# 基本 while
i = 0
while i < 5:
    print(i)
    i += 1

# 條件式 while
total = 0
while total < 100:
    total += int(input())
```

**break 和 continue**：

```python
# break：跳出迴圈
for i in range(10):
    if i == 5:
        break  # i=5 時跳出
    print(i)  # 0,1,2,3,4

# continue：跳過本次,繼續下一次
for i in range(5):
    if i == 2:
        continue  # i=2 時跳過
    print(i)  # 0,1,3,4
```

---

## ⚡ 一定要記得的「解題 SOP」

### 🎯 初級實作解題五步驟

**步驟 1：讀懂題目 📖**
- 找出**輸入格式**：幾行？每行什麼資料？
- 找出**輸出格式**：要輸出什麼？格式如何？
- 找出**處理邏輯**：要做什麼運算？

**步驟 2：設計演算法 🧠**
- 用**中文**或**虛擬碼**寫出步驟
- 思考需要用什麼**資料結構**

**步驟 3：撰寫程式碼 💻**
- 先寫**輸入**部分
- 再寫**處理**邏輯
- 最後寫**輸出**

**步驟 4：測試範例 🧪**
- 用題目給的**範例**測試
- 思考**邊界情況** (最大、最小、特殊值)

**步驟 5：提交前檢查 ✅**
- 檢查**輸出格式**是否正確
- 有沒有多餘的空格或換行
- 變數名稱有沒有打錯

---

### 📝 題目類型與解題模板

**類型 1：簡單計算題**

```python
# 題目：計算 n 個數字的總和與平均
n = int(input())
numbers = list(map(int, input().split()))

total = sum(numbers)
average = total / n

print(total)
print(f"{average:.2f}")
```

**類型 2：字串處理題**

```python
# 題目：檢查對聯平仄規則
line1 = list(map(int, input().split()))
line2 = list(map(int, input().split()))

violations = []

# 規則 A：二四不同二六同
if line1[1] == line1[3]:
    violations.append('A')

# 規則 B：仄起平收
if line1[6] != 1 or line2[6] != 0:
    violations.append('B')

# 輸出
if violations:
    print(''.join(violations))
else:
    print('None')
```

**類型 3：陣列操作題**

```python
# 題目：找出第二大的值
n = int(input())
arr = []
for _ in range(n):
    a, b = map(int, input().split())
    power = a**2 + b**2
    arr.append((power, a, b))

# 排序
arr.sort(reverse=True)

# 輸出第二大
print(arr[1][1], arr[1][2])
```

---

## 💡 如果你還記得的「知識」

### 6️⃣ 進階 List 操作 📚

**列表生成式 (List Comprehension)**：

```python
# 基本型
squares = [x**2 for x in range(5)]
# [0, 1, 4, 9, 16]

# 帶條件
evens = [x for x in range(10) if x % 2 == 0]
# [0, 2, 4, 6, 8]

# 二維列表
matrix = [[0]*3 for _ in range(2)]
# [[0,0,0], [0,0,0]]
```

**切片進階技巧**：

```python
arr = [0, 1, 2, 3, 4, 5]

arr[::2]   # [0, 2, 4] (每隔一個)
arr[::-1]  # [5, 4, 3, 2, 1, 0] (反轉)
arr[1::2]  # [1, 3, 5] (從索引1開始,每隔一個)
```

---

### 7️⃣ 常用內建函式 🛠️

```python
# 數學函式
abs(-5)           # 5 (絕對值)
pow(2, 3)         # 8 (次方)
max(1, 2, 3)      # 3
min(1, 2, 3)      # 1
sum([1, 2, 3])    # 6

# 型態轉換
int(), float(), str(), list(), tuple()

# 其他
len()             # 長度
sorted()          # 排序 (回傳新串列)
reversed()        # 反轉 (回傳迭代器)
enumerate()       # 索引+值
zip()             # 打包多個串列
```

---

## 🌟 如果你還記得的「解題技巧」

### 🔍 常見陷阱與除錯技巧

**陷阱 1：整數除法**
```python
# 陷阱
average = sum / count  # 可能得到浮點數

# 解決：根據題目需求選擇
average = sum / count      # 浮點數除法
average = sum // count     # 整數除法
```

**陷阱 2：字串與數字混淆**
```python
# 陷阱
result = input() + 10  # 錯誤！input() 是字串

# 解決
result = int(input()) + 10  # ✅
```

**陷阱 3：範圍錯誤**
```python
# 陷阱
arr = [1, 2, 3]
print(arr[3])  # IndexError!

# 解決：檢查範圍
if 0 <= i < len(arr):
    print(arr[i])
```

**除錯技巧**：
```python
# 使用 print() 檢查中間值
print(f"Debug: x={x}, y={y}")

# 分段測試
# 先測輸入是否正確
# 再測處理邏輯
# 最後測輸出格式
```

---

### 🎲 邊界條件測試法

**必測的邊界條件**：
1. **最小值**：n=1, arr 只有一個元素
2. **最大值**：n 達到上限
3. **空值**：空字串、空串列
4. **特殊值**：0, 負數, 相同值

**範例**：
```python
# 題目：找最大值
arr = [int(x) for x in input().split()]

# 測試情境
# [5]          → 只有一個元素
# [1,1,1,1]    → 全部相同
# [-5,-3,-10]  → 全為負數
# [100]        → 最大值
```

---

## 😌 忘了沒關係有記得更好的「知識」

### 8️⃣ 集合 (Set) 與字典 (Dict) 🗂️

**Set (集合)**：

```python
# 建立集合
s = {1, 2, 3}
s = set([1, 2, 2, 3])  # {1, 2, 3} (自動去重)

# 操作
s.add(4)       # 新增
s.remove(1)    # 刪除
len(s)         # 長度

# 應用：去除重複
arr = [1, 2, 2, 3, 3, 3]
unique = list(set(arr))  # [1, 2, 3]
```

**Dictionary (字典)**：

```python
# 建立字典
scores = {'Alice': 90, 'Bob': 85}

# 存取
print(scores['Alice'])  # 90
scores['Charlie'] = 88  # 新增

# 迭代
for name, score in scores.items():
    print(f"{name}: {score}")
```

---

### 9️⃣ 排序與搜尋 🔍

**排序**：

```python
arr = [3, 1, 4, 1, 5]

# 方法 1：sort() (改變原串列)
arr.sort()
print(arr)  # [1, 1, 3, 4, 5]

# 方法 2：sorted() (回傳新串列)
new_arr = sorted(arr)

# 自訂排序 (由大到小)
arr.sort(reverse=True)

# 進階：自訂排序規則
# 依絕對值排序
arr.sort(key=abs)

# 依元組第二個元素排序
pairs = [(1, 3), (2, 1), (3, 2)]
pairs.sort(key=lambda x: x[1])
```

**搜尋**：

```python
# 線性搜尋
arr = [10, 20, 30, 40]
target = 30

for i, num in enumerate(arr):
    if num == target:
        print(f"找到了！索引={i}")
        break
else:
    print("沒找到")

# 使用 in 運算子
if target in arr:
    print("存在")
```

---

## 📌 懶人包：考前 30 分鐘快速複習

### ✅ 必背語法

1. ✨ **輸入**：`int(input())`, `map(int, input().split())`
2. ✨ **輸出**：`print()`, `print(x, end=' ')`, `f"{x}"`
3. ✨ **串列**：`append()`, `sort()`, `reverse()`
4. ✨ **字串**：`split()`, `join()`, `replace()`
5. ✨ **迴圈**：`for i in range()`, `enumerate()`

### 🎯 解題檢查清單

- [ ] 輸入格式對了嗎？
- [ ] 有用 `int()` 轉換嗎？
- [ ] 迴圈範圍正確嗎？
- [ ] 輸出格式符合嗎？(空格、換行)
- [ ] 有測試邊界條件嗎？

### ⚠️ 常見錯誤

- ❌ 忘記 `int()` 轉換
- ❌ 索引超出範圍
- ❌ 輸出多空格/換行
- ❌ 整數除法 `/` vs `//`
- ❌ 迴圈範圍錯誤

---

## 🎉 考試當天小提醒

### ⏰ 時間分配 (每題約 40 分鐘)

- 讀題+設計：5 分鐘
- 寫程式：25 分鐘
- 測試+除錯：10 分鐘

### 💡 拿分策略

1. **先做有把握的題** ✅
2. **第一題務必拿滿分** (通常最簡單)
3. **第二題至少拿部分分** (子題分數)
4. **第三題量力而為**

### 🎯 部分分技巧

- 子題通常從簡單到困難
- 先確保第一子題全對
- 再挑戰第二子題

---

## 🔥 最後加油

> **記住**：初級實作就是考基本功！不需要複雜演算法！

**得分關鍵**：
1. 基礎語法要熟 💯
2. 輸出格式要對 ✅
3. 邊界條件要測 🧪
4. 保持冷靜不慌 😌

---

### 🍀 祝你滿分通過！加油！🎊

**考前再提醒**：
- ✅ 帶身分證件
- ✅ 熟悉考試系統編輯器 (Code::Blocks / Eclipse)
- ✅ 記得只有最後一次提交會被評分！
- ✅ 保持信心,你可以的！💪

**Good Luck!** 🌟
