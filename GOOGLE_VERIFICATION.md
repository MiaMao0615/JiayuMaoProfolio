# Google Search Console 验证指南

## ✅ 选择哪个验证方式？

**选择 "URL prefix"（URL 前缀）** ← 这个！

### 为什么选择 URL prefix？

- ✅ GitHub Pages 的网址是 `https://username.github.io/repository-name/` 格式
- ✅ 这是 URL 前缀，不是完整域名
- ✅ 支持多种验证方法，最简单

### 不要选择 "Domain"

- ❌ Domain 方式需要 DNS 验证
- ❌ GitHub Pages 不支持 DNS 验证
- ❌ 只适用于你有自己的域名的情况

---

## 📝 详细步骤

### 步骤 1: 选择 URL prefix

在 Google Search Console 页面：
1. 点击右侧的 **"URL prefix"** 卡片
2. 在输入框中输入你的 GitHub Pages 网址
   - 格式：`https://MiaMao0615.github.io/你的仓库名/`
   - 例如：`https://MiaMao0615.github.io/portfolio/`
3. 点击 **"CONTINUE"** 按钮

### 步骤 2: 选择验证方法

Google 会提供几种验证方法，推荐按以下顺序尝试：

#### 方法 1: HTML 文件验证（最简单）⭐ 推荐

1. 点击 "HTML 文件" 选项
2. 下载 Google 提供的 HTML 文件（文件名类似 `google1234567890.html`）
3. 将这个文件上传到你的 GitHub 仓库的根目录
4. 确保文件可以通过 `https://你的网址/google1234567890.html` 访问
5. 回到 Google Search Console，点击 "验证"

#### 方法 2: HTML 标记验证

1. 点击 "HTML 标记" 选项
2. Google 会给你一段代码，类似：
   ```html
   <meta name="google-site-verification" content="你的验证码" />
   ```
3. 将这段代码添加到 `index.html` 的 `<head>` 部分
4. 提交更改到 GitHub
5. 回到 Google Search Console，点击 "验证"

#### 方法 3: Google Analytics（如果你有）

如果你已经设置了 Google Analytics，可以直接使用这个验证。

---

## 🔍 验证后做什么？

### 1. 提交网站地图

验证成功后：
1. 在左侧菜单找到 **"网站地图"**（Sitemaps）
2. 输入：`sitemap.xml`
3. 点击 "提交"

**注意**：确保你已经更新了 `sitemap.xml` 文件中的 URL 为你的实际网址！

### 2. 请求索引（可选）

1. 在左侧菜单找到 **"网址检查"**（URL Inspection）
2. 输入你的网站首页 URL
3. 点击 "请求编入索引"

---

## ⚠️ 常见问题

### Q: 验证失败怎么办？

**A:** 检查以下几点：
- ✅ 确保 HTML 文件已上传到仓库根目录
- ✅ 确保文件可以通过浏览器直接访问
- ✅ 等待几分钟让 GitHub Pages 更新
- ✅ 检查 URL 是否正确（包括最后的斜杠）

### Q: 需要多长时间？

**A:** 
- 验证通常立即生效
- 网站被 Google 索引需要几天到几周
- 提交网站地图可以加快这个过程

### Q: 可以同时验证多个页面吗？

**A:** 不需要！验证一个 URL prefix 就覆盖了整个网站的所有页面。

---

## 📌 快速检查清单

- [ ] 选择 "URL prefix"
- [ ] 输入正确的 GitHub Pages 网址
- [ ] 选择验证方法（推荐 HTML 文件）
- [ ] 上传验证文件到 GitHub
- [ ] 在 Google Search Console 点击验证
- [ ] 验证成功后提交 sitemap.xml
- [ ] 更新 sitemap.xml 中的 URL

---

**记住**：选择 **"URL prefix"**，然后按照提示操作即可！
