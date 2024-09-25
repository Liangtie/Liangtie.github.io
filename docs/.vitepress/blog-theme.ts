// 主题独有配置
import { getThemeConfig } from "@sugarat/theme/node";

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 页脚
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    version: false,
    copyright: "MIT License",
  },

  // 主题色修改
  themeColor: "el-blue",

  // 文章默认作者
  author: "老铁",
});

export { blogTheme };
