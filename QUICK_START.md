# 快速部署指南

## 🚀 3步部署到 GitHub Pages

### 步骤 1: 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名称：`portfolio` 或 `jiayu-mao-portfolio`
3. 选择 **Public**（公开）
4. **不要**勾选 "Initialize with README"
5. 点击 "Create repository"

### 步骤 2: 上传文件

#### 最简单的方法：使用 GitHub 网页

1. 在新建的仓库页面，点击 "uploading an existing file"
2. 将以下文件拖拽上传：
   - `index.html`
   - `styles.css`
   - `script.js`
   - `dance-gallery.html`
   - `logos/` 文件夹（所有logo图片）
   - `DancePicture/` 文件夹（所有舞蹈照片）
   - `VIrtualHuman/` 文件夹（项目图片）
   - `微信图片_2026-01-18_190646_223.jpg`（头像）
   - `Jiayu Mao-Vedio.mov`（舞蹈视频）
   - `Virtual Human as Living Partner.mov`（项目视频）
3. 点击 "Commit changes"

#### 或者使用 Git 命令行：

```bash
cd D:\Profolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/MiaMao0615/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 步骤 3: 启用 GitHub Pages

1. 在仓库页面，点击 **Settings**
2. 左侧菜单找到 **Pages**
3. Source 选择：
   - Branch: `main`
   - Folder: `/ (root)`
4. 点击 **Save**
5. 等待 2-5 分钟

### 📍 你的网站链接

部署完成后，你的网站地址将是：
```
https://MiaMao0615.github.io/YOUR_REPO_NAME/
```

例如：`https://MiaMao0615.github.io/portfolio/`

### ✏️ 更新简历

在简历上添加这个链接，或者在 Contact 部分更新 GitHub 链接指向你的作品集网站。

---

**提示**：如果文件太大上传失败，可以考虑：
- 压缩视频文件
- 使用 Git LFS（Large File Storage）
- 或者将大文件存储在云盘，在网站上使用外部链接
