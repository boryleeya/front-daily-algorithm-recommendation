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

console.log(isValid("{{}}"));
