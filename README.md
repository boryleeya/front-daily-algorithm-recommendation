# 算法

## 1.栈

特点:

- 后进先出

### 1.1 有效的括号

解题思路：

    1. 新建一个栈
    2. 扫描字符串，遇到左括号入栈，遇到和栈顶括号类型匹配的右括号就出栈，类型不匹配直接判定不合法
    3. 最后栈空了就合法，否则不合法

代码：

```javascript
function isValid(s) {
  if (s.length % 2 !== 0) return false;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item === "(" || item === "{" || item === "[") {
      stack.push(item);
    } else {
      const topItem = stack[stack.length - 1];
      if (
        (topItem === "(" && item === ")") ||
        (topItem === "{" && item === "}") ||
        (topItem === "[" && item === "]")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
```

## 2. 树

一种分层数据的抽象模型

前端工作中常见的树包括：DOM
树、级联、树形控件......

JS中没有树，但可以用Object和Array构建树。

### 深度优先遍历

> 尽可能深的搜索树的分支

算法口诀

- 访问根节点
- 对根节点的children挨个进行深度优先遍历

代码

```javascript
function dfs(root) {
  console.log(root.value);
  root.children && root.children.forEach((child) => dfs(child));
}
dfs(data);
```

### 广度优先遍历

> 先访问离根节点最近的节点

算法口诀

- 新建一个队列，把根节点入队
- 把队头出队并访问
- 把队头的children挨个入队
- 重复第二、三步,直到队列为空

代码

```javascript
function bfs(root) {
  const queue = [root];
  while (queue.length) {
    const queueTop = queue.shift();
    console.log(queueTop.value);
    queueTop.children &&
      queueTop.children.forEach((child) => {
        queue.push(child);
      });
  }
}
bfs(data);
```

### 二叉树

树中每个节点最多只能有两个子节点
在JS中通常用Object来模拟二叉树
