# GitHub Pages 部署指南

## 步骤 1: 创建 GitHub 仓库

1. 登录 GitHub (https://github.com)
2. 点击右上角的 "+" 号，选择 "New repository"
3. 仓库名称建议：`portfolio` 或 `jiayu-mao-portfolio`
4. 设置为 **Public**（GitHub Pages 免费版需要公开仓库）
5. 不要勾选 "Initialize this repository with a README"（因为我们已经有了文件）
6. 点击 "Create repository"

## 步骤 2: 上传文件到 GitHub

### 方法 A: 使用 GitHub Desktop（推荐，最简单）

1. 下载并安装 GitHub Desktop: https://desktop.github.com/
2. 打开 GitHub Desktop，登录你的 GitHub 账号
3. 点击 "File" → "Add Local Repository"
4. 选择你的项目文件夹 `D:\Profolio`
5. 如果提示需要初始化，点击 "Create a Repository"
6. 在左侧填写提交信息，例如："Initial commit: Portfolio website"
7. 点击 "Commit to main"
8. 点击 "Publish repository" 将代码推送到 GitHub

### 方法 B: 使用 Git 命令行

在项目文件夹中打开终端（PowerShell 或 Git Bash），执行以下命令：

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交文件
git commit -m "Initial commit: Portfolio website"

# 添加远程仓库（将 YOUR_USERNAME 和 YOUR_REPO_NAME 替换为你的实际信息）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

## 步骤 3: 启用 GitHub Pages

1. 在 GitHub 仓库页面，点击 "Settings"（设置）
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分，选择：
   - Branch: `main`
   - Folder: `/ (root)`
4. 点击 "Save"
5. 等待几分钟，GitHub 会生成你的网站链接

## 步骤 4: 获取你的网站链接

你的网站链接格式为：
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

例如，如果你的用户名是 `MiaMao0615`，仓库名是 `portfolio`，链接就是：
```
https://MiaMao0615.github.io/portfolio/
```

## 步骤 5: 更新简历中的链接

部署完成后，你可以：
1. 在简历上添加这个 GitHub Pages 链接
2. 或者更新 Contact 部分的 GitHub 链接指向你的作品集网站

## 注意事项

- 确保所有图片和资源文件都在正确的路径
- 如果使用相对路径（如 `logos/SCNU.png`），确保文件结构正确
- GitHub Pages 可能需要几分钟到几小时才能完全部署
- 如果网站无法访问，检查仓库设置中的 Pages 配置

## 后续更新

每次修改网站后，使用以下命令更新：

```bash
git add .
git commit -m "Update: 描述你的更改"
git push
```

GitHub Pages 会自动更新你的网站（通常需要几分钟）。
