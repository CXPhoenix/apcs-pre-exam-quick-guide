# 🚀 APCS 中級實作考前整理小冊

> [!NOTE]
> 中級實作進階攻略！掌握模擬與二維陣列就能突破！🎯

---

## 🔥 一定要記得的「知識」

### 1️⃣ 二維陣列核心操作 🎲

**建立二維陣列**：

```python
# 方法 1：List Comprehension ⭐ 推薦
rows, cols = 4, 5
grid = [[0] * cols for _ in range(rows)]

# 方法 2：從輸入建立
n, m = map(int, input().split())
grid = []
for i in range(n):
    row = list(map(int, input().split()))
    grid.append(row)

# 方法 3：一次讀取所有
grid = [list(map(int, input().split())) for _ in range(n)]
```

**⚠️ 常見陷阱**：
```python
# 錯誤寫法 ❌ - 會共用記憶體！
grid = [[0] * 3] * 2
grid[0][0] = 1
print(grid)  # [[1,0,0], [1,0,0]] 兩列都改了！

# 正確寫法 ✅
grid = [[0] * 3 for _ in range(2)]
```

**遍歷二維陣列**：

```python
# 方法 1：雙層迴圈
for i in range(rows):
    for j in range(cols):
        print(grid[i][j], end=' ')
    print()  # 換行

# 方法 2：enumerate 取得索引
for i, row in enumerate(grid):
    for j, value in enumerate(row):
        print(f"grid[{i}][{j}] = {value}")
```

**方向陣列技巧 ⭐ 超重要！**：

```python
# 四個方向：上、右、下、左
directions = [[-1,0], [0,1], [1,0], [0,-1]]

# 應用：檢查周圍格子
for di, dj in directions:
    ni, nj = i + di, j + dj
    # 檢查是否在範圍內
    if 0 <= ni < rows and 0 <= nj < cols:
        print(f"鄰居: grid[{ni}][{nj}]")

# 八個方向 (含斜角)
directions8 = [
    [-1,-1], [-1,0], [-1,1],
    [0,-1],          [0,1],
    [1,-1],  [1,0],  [1,1]
]
```

**曼哈頓距離計算**：

```python
# 題目常考！兩點距離
def manhattan_distance(i1, j1, i2, j2):
    return abs(i1 - i2) + abs(j1 - j2)

# 範圍內的所有格子
center_i, center_j = 2, 3
distance = 2

for i in range(rows):
    for j in range(cols):
        if manhattan_distance(i, j, center_i, center_j) <= distance:
            print(f"在範圍內: ({i}, {j})")
```

---

### 2️⃣ 模擬題型解題策略 🎮

**模擬題特徵**：
- 給定一套規則
- 要求模擬執行過程
- 通常需要記錄狀態

**解題三步驟**：

**步驟 1：狀態紀錄**
```python
# 範例：機器人移動模擬
# 需要記錄的狀態
position = [start_r, start_c]  # 位置
direction = 0  # 方向 (0=東, 1=南, 2=西, 3=北)
score = 0      # 得分
```

**步驟 2：規則實作**
```python
# 方向對應
directions = [[0,1], [1,0], [0,-1], [-1,0]]  # 東南西北

# 轉向 (順時針 90 度)
def turn_right():
    global direction
    direction = (direction + 1) % 4

# 移動
def move():
    global position
    dr, dc = directions[direction]
    position[0] += dr
    position[1] += dc
```

**步驟 3：迴圈模擬**
```python
# 主要模擬迴圈
while not game_over:
    # 1. 檢查當前狀態
    if grid[position[0]][position[1]] == 0:
        break  # 停止條件
    
    # 2. 更新狀態
    score += grid[position[0]][position[1]]
    grid[position[0]][position[1]] -= 1
    
    # 3. 判斷是否轉向
    if score % K == 0:
        turn_right()
    
    # 4. 移動
    move()
```

**💡 模擬題口訣**：
> **「狀態→規則→迴圈→檢查」**

---

### 3️⃣ 字串進階處理 📝

**字串解析技巧**：

```python
# 題目：字串編碼解碼

# 分割字串
s = "A,B,C"
parts = s.split(',')  # ['A', 'B', 'C']

# 字元操作
s = "HELLO"
s = s[::-1]  # 反轉: "OLLEH"
s = s[2:] + s[:2]  # 前後交換部分

# 字元逐一處理
result = []
for ch in s:
    if ch == '0':
        result.append('取第一個')
    else:
        result.append('取最後一個')
```

**編碼轉換**：

```python
# ASCII 碼轉換
ch = 'A'
code = ord(ch)  # 65
ch = chr(65)    # 'A'

# 凱薩密碼範例
def caesar_cipher(text, shift):
    result = []
    for ch in text:
        if ch.isalpha():
            base = ord('A') if ch.isupper() else ord('a')
            shifted = (ord(ch) - base + shift) % 26
            result.append(chr(base + shifted))
        else:
            result.append(ch)
    return ''.join(result)
```

**字串操作組合技**：

```python
# 移除空白
s = "  Hello  World  "
s = s.strip()    # "Hello  World" (移除頭尾空白)
s = s.replace(" ", "")  # "HelloWorld" (移除所有空白)

# 填充
s = "42"
s = s.zfill(5)   # "00042" (左邊補 0)

# 對齊
s = "Hello"
s = s.ljust(10)  # "Hello     " (左對齊)
s = s.rjust(10)  # "     Hello" (右對齊)
s = s.center(10) # "  Hello   " (置中)
```

---

### 4️⃣ 資料結構基礎 📚

**Stack (堆疊) - LIFO**：

```python
# Python 用 list 模擬
stack = []

# Push (加入)
stack.append(1)
stack.append(2)
stack.append(3)
print(stack)  # [1, 2, 3]

# Pop (取出)
top = stack.pop()  # 3
print(stack)  # [1, 2]

# Peek (查看最上面)
top = stack[-1] if stack else None

# 檢查是否為空
is_empty = len(stack) == 0
```

**應用：括號配對檢查**
```python
def is_valid_parentheses(s):
    stack = []
    pairs = {'(': ')', '[': ']', '{': '}'}
    
    for ch in s:
        if ch in pairs:  # 左括號
            stack.append(ch)
        elif stack and pairs[stack[-1]] == ch:  # 右括號配對
            stack.pop()
        else:
            return False
    
    return len(stack) == 0
```

**Queue (佇列) - FIFO**：

```python
# 使用 collections.deque (效率較高)
from collections import deque

queue = deque()

# Enqueue (加入)
queue.append(1)
queue.append(2)
queue.append(3)

# Dequeue (取出)
first = queue.popleft()  # 1

# 也可以用 list (效率較低)
queue = []
queue.append(1)  # 加入
first = queue.pop(0)  # 取出第一個
```

**Dictionary (字典) 應用**：

```python
# 計數器
counter = {}
for item in items:
    counter[item] = counter.get(item, 0) + 1

# 或使用 Counter
from collections import Counter
counter = Counter(items)

# 應用：找出出現次數
max_count = max(counter.values())
most_common = [k for k, v in counter.items() if v == max_count]
```

---

### 5️⃣ 簡單演算法 🧮

**排序應用**：

```python
# 基本排序
arr.sort()  # 由小到大
arr.sort(reverse=True)  # 由大到小

# 自訂排序規則
# 範例：依平方和排序
items = [(3,2), (5,2), (1,4)]
items.sort(key=lambda x: x[0]**2 + x[1]**2)

# 排序後取第 k 大/小
arr.sort()
kth_smallest = arr[k-1]  # 第 k 小

arr.sort(reverse=True)
kth_largest = arr[k-1]  # 第 k 大
```

**搜尋技巧**：

```python
# 線性搜尋
def linear_search(arr, target):
    for i, value in enumerate(arr):
        if value == target:
            return i
    return -1

# 二分搜尋 (須已排序)
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1
```

**最大最小值追蹤**：

```python
# 找最大最小值
max_val = float('-inf')  # 負無窮大
min_val = float('inf')   # 正無窮大

for num in arr:
    max_val = max(max_val, num)
    min_val = min(min_val, num)

# 或直接使用內建函式
max_val = max(arr)
min_val = min(arr)
```

---

## ⚡ 一定要記得的「解題 SOP」

### 🎯 中級實作解題六步驟

**步驟 1：分析題目類型 🔍**
- 模擬題？→ 狀態記錄 + 規則實作
- 二維陣列？→ 方向陣列 + 範圍檢查
- 字串處理？→ 拆解 + 組合

**步驟 2：設計資料結構 📦**
```python
# 範例：蒐集寶石題
grid = [[...]]        # 地圖
position = [r, c]     # 位置
direction = 0         # 方向
score = 0             # 得分
gems = 0              # 寶石數
```

**步驟 3：列出所有規則 📋**
```python
# 寫成註解或虛擬碼
# 1. 如果當前格子無寶石 → 停止
# 2. 得分 += 寶石數,取走一顆
# 3. 如果得分是 K 倍數 → 右轉
# 4. 如果前方是牆或邊界 → 右轉直到可前進
# 5. 移動到前方格子
# 6. 回到步驟 1
```

**步驟 4：實作核心邏輯 💻**
```python
# 依照規則逐步實作
# 先寫主要邏輯,再寫細節函式
```

**步驟 5：測試範例 🧪**
```python
# 用範例輸入測試
# 手動追蹤前幾步,確認邏輯正確
# 檢查邊界條件
```

**步驟 6：優化與檢查 ✅**
```python
# 檢查是否有重複計算
# 確認輸出格式
# 確認變數型態
```

---

### 📝 模擬題標準模板

```python
# ===== 讀取輸入 =====
m, n, k, r, c = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(m)]

# ===== 初始化狀態 =====
directions = [[0,1], [1,0], [0,-1], [-1,0]]  # 東南西北
pos = [r, c]
dir_idx = 0  # 0=東
score = 0
gems = 0

# ===== 輔助函式 =====
def turn_right():
    global dir_idx
    dir_idx = (dir_idx + 1) % 4

def can_move():
    dr, dc = directions[dir_idx]
    nr, nc = pos[0] + dr, pos[1] + dc
    return (0 <= nr < m and 0 <= nc < n and grid[nr][nc] != -1)

# ===== 主要模擬邏輯 =====
while True:
    # 規則 1：檢查寶石
    if grid[pos[0]][pos[1]] == 0:
        break
    
    # 規則 2：拿寶石
    score += grid[pos[0]][pos[1]]
    grid[pos[0]][pos[1]] -= 1
    gems += 1
    
    # 規則 3：檢查轉向
    if score % k == 0:
        turn_right()
    
    # 規則 4：確保可前進
    while not can_move():
        turn_right()
    
    # 規則 5：移動
    dr, dc = directions[dir_idx]
    pos[0] += dr
    pos[1] += dc

# ===== 輸出結果 =====
print(gems)
```

---

## 💡 如果你還記得的「知識」

### 6️⃣ 進階字串技巧 🔤

**字串建構優化**：

```python
# 慢速寫法 ❌ (每次都建新字串)
result = ""
for i in range(1000):
    result += str(i)

# 快速寫法 ✅ (用 list 再 join)
result = []
for i in range(1000):
    result.append(str(i))
result = ''.join(result)
```

**正則表達式 (如果會的話)**：

```python
import re

# 找出所有數字
text = "I have 3 apples and 5 oranges"
numbers = re.findall(r'\d+', text)  # ['3', '5']

# 替換
text = re.sub(r'\d+', 'X', text)  # "I have X apples and X oranges"
```

---

### 7️⃣ 遞迴思維 🔄

**遞迴基本結構**：

```python
def recursive_function(n):
    # 基礎情況 (終止條件)
    if n == 0:
        return base_value
    
    # 遞迴情況
    return some_operation(recursive_function(n-1))
```

**經典範例**：

```python
# 費式數列
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)

# 階乘
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n-1)

# 最大公因數 (GCD)
def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)
```

---

## 🌟 如果你還記得的「解題技巧」

### 🔍 二維陣列進階技巧

**轉置矩陣**：

```python
# 方法 1：雙層迴圈
n, m = len(grid), len(grid[0])
transposed = [[0]*n for _ in range(m)]
for i in range(n):
    for j in range(m):
        transposed[j][i] = grid[i][j]

# 方法 2：zip (推薦)
transposed = list(map(list, zip(*grid)))
```

**旋轉矩陣 90 度**：

```python
# 順時針旋轉 90 度
def rotate_90(grid):
    n = len(grid)
    rotated = [[0]*n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            rotated[j][n-1-i] = grid[i][j]
    return rotated
```

**計算區域和**：

```python
# 計算矩形範圍內的總和
def area_sum(grid, r1, c1, r2, c2):
    total = 0
    for i in range(r1, r2+1):
        for j in range(c1, c2+1):
            total += grid[i][j]
    return total
```

---

### 🎲 模擬題常見陷阱

**陷阱 1：無窮迴圈**
```python
# 確保有終止條件
max_steps = 10000
steps = 0

while not game_over and steps < max_steps:
    # 模擬邏輯
    steps += 1
```

**陷阱 2：方向混淆**
```python
# 統一使用方向陣列
directions = {
    'E': [0, 1],   # 東
    'S': [1, 0],   # 南
    'W': [0, -1],  # 西
    'N': [-1, 0]   # 北
}
```

**陷阱 3：狀態未更新**
```python
# 記得更新所有相關狀態
score += value
grid[i][j] -= 1  # 別忘了更新地圖！
```

---

### 🧮 除錯技巧

**技巧 1：印出中間狀態**
```python
# 在關鍵步驟印出
print(f"Debug: pos={pos}, dir={dir_idx}, score={score}")

# 印出二維陣列
def print_grid(grid):
    for row in grid:
        print(' '.join(map(str, row)))
```

**技巧 2：分段測試**
```python
# 先測試小範圍
# 確認邏輯正確後再測試大範圍
```

**技巧 3：斷言檢查**
```python
# 檢查不變量
assert 0 <= pos[0] < m, "位置超出範圍！"
assert score >= 0, "分數不應為負！"
```

---

## 😌 忘了沒關係有記得更好的「知識」

### 8️⃣ BFS 與 DFS 基礎 🌳

**DFS (深度優先搜尋)**：

```python
# 使用遞迴
def dfs(graph, node, visited):
    if node in visited:
        return
    
    visited.add(node)
    print(node)
    
    for neighbor in graph[node]:
        dfs(graph, neighbor, visited)

# 使用 Stack
def dfs_iterative(graph, start):
    visited = set()
    stack = [start]
    
    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            print(node)
            stack.extend(graph[node])
```

**BFS (廣度優先搜尋)**：

```python
from collections import deque

def bfs(graph, start):
    visited = set([start])
    queue = deque([start])
    
    while queue:
        node = queue.popleft()
        print(node)
        
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
```

---

### 9️⃣ 貪心法與動態規劃概念 💡

**貪心法 (Greedy)**：
- 每步都選當前最優解
- 不一定得到全域最優解
- 適用於某些特定問題

**動態規劃 (DP)**：
- 將問題分解成子問題
- 儲存子問題的解 (避免重複計算)
- 從小問題建構大問題的解

```python
# 簡單 DP 範例：爬樓梯
def climb_stairs(n):
    if n <= 2:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    dp[2] = 2
    
    for i in range(3, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]
```

---

## 📌 懶人包：考前 30 分鐘快速複習

### ✅ 必背技巧

1. ✨ **二維陣列**：`[[0]*cols for _ in range(rows)]`
2. ✨ **方向陣列**：`[[-1,0], [0,1], [1,0], [0,-1]]`
3. ✨ **範圍檢查**：`0 <= i < rows and 0 <= j < cols`
4. ✨ **曼哈頓距離**：`abs(i1-i2) + abs(j1-j2)`
5. ✨ **Stack/Queue**：`append()/pop()` vs `append()/popleft()`

### 🎯 解題檢查清單

- [ ] 狀態變數都初始化了嗎？
- [ ] 所有規則都實作了嗎？
- [ ] 有檢查範圍邊界嗎？
- [ ] 迴圈有終止條件嗎？
- [ ] 輸出格式正確嗎？

### ⚠️ 常見陷阱

- ❌ 二維陣列記憶體共用
- ❌ 方向索引越界
- ❌ 狀態更新遺漏
- ❌ 無窮迴圈
- ❌ 座標系搞混 (i,j) vs (x,y)

---

## 🎉 考試當天小提醒

### ⏰ 時間分配 (120 分鐘 / 3 題)

**建議策略**：
- 第一題：30 分鐘 (務必拿滿分)
- 第二題：40 分鐘 (至少拿子題分)
- 第三題：40 分鐘 (量力而為)
- 檢查：10 分鐘

### 💡 拿分技巧

1. **先寫測資最簡單的子題** ✅
2. **模擬題用小範例手動追蹤** 📝
3. **二維陣列題先畫圖理解** 🎨
4. **有疑問就印出中間狀態** 🐛

### 🎯 部分分策略

- 第一子題通常 n=1 或範圍很小
- 可以用暴力法先拿分
- 再優化成完整解

---

## 🔥 最後加油

> **記住**：中級實作考的是「細心」與「邏輯」！

**成功關鍵**：
1. 模擬題要有耐心 🧘
2. 二維陣列要小心 ⚠️
3. 方向處理要準確 🧭
4. 狀態更新要完整 📊

---

### 🍀 祝你突破中級！加油！🔥

**考前最後提醒**：
- ✅ 方向陣列記好了嗎？
- ✅ 二維陣列初始化會了嗎？
- ✅ 模擬邏輯理解了嗎？
- ✅ 保持冷靜,仔細檢查！💪

**You Got This!** 🌟
