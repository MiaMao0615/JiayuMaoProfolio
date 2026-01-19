# 视频压缩指南

## 🎯 目标
在不明显降低清晰度的前提下，大幅减小视频文件大小，以便上传到GitHub。

## 📊 当前视频文件
- `assets/videos/dance/dance-video.mov` - 舞蹈视频
- `assets/videos/projects/virtual-human-video.mov` - 项目演示视频

## 🛠️ 推荐方案

### 方案 1: 使用 FFmpeg（推荐，免费，功能强大）

#### 安装 FFmpeg

**Windows:**
1. 下载：https://www.gyan.dev/ffmpeg/builds/
2. 选择 "ffmpeg-release-essentials.zip"
3. 解压到 `C:\ffmpeg`
4. 添加到系统PATH：
   - 右键"此电脑" → 属性 → 高级系统设置 → 环境变量
   - 在"系统变量"中找到Path，点击编辑
   - 添加 `C:\ffmpeg\bin`

#### 压缩命令

**高质量压缩（推荐）：**
```bash
# 压缩舞蹈视频
ffmpeg -i "assets/videos/dance/dance-video.mov" -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 128k "assets/videos/dance/dance-video-compressed.mp4"

# 压缩项目视频
ffmpeg -i "assets/videos/projects/virtual-human-video.mov" -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 128k "assets/videos/projects/virtual-human-video-compressed.mp4"
```

**更小文件（如果还是太大）：**
```bash
# 降低分辨率到1080p（如果原视频更高）
ffmpeg -i "input.mov" -vf "scale=1920:1080" -c:v libx264 -crf 25 -preset medium -c:a aac -b:a 96k "output.mp4"

# 或者720p
ffmpeg -i "input.mov" -vf "scale=1280:720" -c:v libx264 -crf 25 -preset medium -c:a aac -b:a 96k "output.mp4"
```

**参数说明：**
- `-crf 23`: 质量参数（18-28，数字越小质量越高，23是很好的平衡点）
- `-preset slow`: 编码速度（slow=更小文件，但编码慢；fast=更快但文件稍大）
- `-c:v libx264`: 使用H.264编码（兼容性最好）
- `-c:a aac`: 音频编码为AAC
- `-b:a 128k`: 音频比特率

---

### 方案 2: 使用 HandBrake（图形界面，简单易用）

1. **下载安装**
   - 官网：https://handbrake.fr/
   - 免费开源，有Windows版本

2. **使用步骤**
   - 打开HandBrake
   - 选择视频文件
   - 预设选择："Fast 1080p30" 或 "Fast 720p30"
   - 在"视频"标签页：
     - 编码器：H.264 (x264)
     - 质量：RF 23（或调整到25-28如果文件还是太大）
   - 在"音频"标签页：
     - 编码器：AAC
     - 比特率：128 kbps
   - 点击"开始编码"

---

### 方案 3: 使用在线工具（无需安装）

1. **CloudConvert**
   - 网址：https://cloudconvert.com/mov-to-mp4
   - 上传视频，选择压缩选项
   - 下载压缩后的文件

2. **FreeConvert**
   - 网址：https://www.freeconvert.com/mov-to-mp4
   - 支持压缩选项

**注意**：在线工具可能有文件大小限制（通常100-500MB）

---

### 方案 4: 使用 VLC Media Player（如果已安装）

1. 打开VLC
2. 媒体 → 转换/保存
3. 添加视频文件
4. 点击"转换/保存"
5. 配置文件选择："Video - H.264 + MP3 (MP4)"
6. 点击"编辑所选配置文件"
   - 视频编码：H-264
   - 视频质量：调整比特率（建议2000-4000 kbps）
7. 开始转换

---

## 📏 目标文件大小

- **GitHub限制**：单个文件建议 < 100MB（虽然可以更大，但上传会很慢）
- **推荐目标**：
  - 舞蹈视频：< 50MB
  - 项目视频：< 100MB

## 🎬 压缩策略

### 如果原视频很大（>500MB）：

1. **降低分辨率**
   - 4K → 1080p（文件大小减少约75%）
   - 1080p → 720p（文件大小减少约50%）

2. **降低帧率**
   - 60fps → 30fps（文件大小减少约50%）

3. **调整CRF值**
   - CRF 23 → CRF 25-28（文件更小，质量略降）

### 示例命令（综合优化）：

```bash
# 1080p, 30fps, 高质量压缩
ffmpeg -i "input.mov" -vf "scale=1920:1080,fps=30" -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 128k "output.mp4"

# 720p, 30fps, 更小文件
ffmpeg -i "input.mov" -vf "scale=1280:720,fps=30" -c:v libx264 -crf 25 -preset medium -c:a aac -b:a 96k "output.mp4"
```

---

## ✅ 压缩后操作

1. **测试视频质量**
   - 播放压缩后的视频，确认质量可接受

2. **更新HTML引用**
   - 将 `.mov` 改为 `.mp4`
   - 更新文件路径

3. **删除原文件**
   - 备份原文件（如果需要）
   - 删除大的 `.mov` 文件

---

## 🔧 快速压缩脚本

创建一个 `compress-videos.ps1` 文件：

```powershell
# 检查FFmpeg是否安装
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
    Write-Host "请先安装FFmpeg: https://www.gyan.dev/ffmpeg/builds/" -ForegroundColor Red
    exit
}

# 压缩舞蹈视频
Write-Host "正在压缩舞蹈视频..." -ForegroundColor Yellow
ffmpeg -i "assets\videos\dance\dance-video.mov" -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 128k "assets\videos\dance\dance-video.mp4" -y

# 压缩项目视频
Write-Host "正在压缩项目视频..." -ForegroundColor Yellow
ffmpeg -i "assets\videos\projects\virtual-human-video.mov" -c:v libx264 -crf 23 -preset slow -c:a aac -b:a 128k "assets\videos\projects\virtual-human-video.mp4" -y

Write-Host "压缩完成！" -ForegroundColor Green
```

运行：`powershell -ExecutionPolicy Bypass -File compress-videos.ps1`

---

## 💡 提示

- **保留原文件**：压缩前先备份原始视频
- **测试播放**：压缩后在不同浏览器测试播放
- **渐进式压缩**：如果第一次压缩后还是太大，可以逐步调整CRF值（23→25→28）
- **考虑使用外部托管**：如果文件还是太大，可以考虑上传到YouTube或Vimeo，然后在网站中嵌入
