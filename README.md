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
