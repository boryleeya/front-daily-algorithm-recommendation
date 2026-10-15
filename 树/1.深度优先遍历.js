const data = {
  value: "zhejiang",
  label: "浙江省",
  children: [
    {
      value: "hangzhou",
      label: "杭州市",
      children: [
        {
          value: "xihu",
          label: "西湖区",
          children: [
            { value: "wensan", label: "文三路街道" },
            { value: "gudang", label: "古荡街道" },
            { value: "cuian", label: "翠苑街道" },
          ],
        },
        {
          value: "binjiang",
          label: "滨江区",
          children: [
            { value: "changhe", label: "长河街道" },
            { value: "xixing", label: "西兴街道" },
            { value: "puyan", label: "浦沿街道" },
          ],
        },
      ],
    },
    {
      value: "ningbo",
      label: "宁波市",
      children: [
        {
          value: "haishu",
          label: "海曙区",
          children: [
            { value: "jiangxia", label: "江厦街道" },
            { value: "yinchun", label: "迎春街道" },
          ],
        },
        {
          value: "yinzhou",
          label: "鄞州区",
          children: [
            { value: "zhonghe", label: "钟公庙街道" },
            { value: "meixu", label: "梅墟街道" },
          ],
        },
      ],
    },
  ],
};

function dfs(root) {
  console.log(root.value);
  root.children && root.children.forEach((child) => dfs(child));
}
dfs(data);
