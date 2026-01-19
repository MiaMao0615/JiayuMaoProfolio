# 视频压缩脚本
# 使用 FFmpeg 压缩视频文件

Write-Host "=== 视频压缩工具 ===" -ForegroundColor Cyan
Write-Host ""

# 检查FFmpeg是否安装
if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
    Write-Host "错误: 未找到 FFmpeg" -ForegroundColor Red
    Write-Host ""
    Write-Host "请先安装 FFmpeg:" -ForegroundColor Yellow
    Write-Host "1. 访问: https://www.gyan.dev/ffmpeg/builds/" -ForegroundColor Yellow
    Write-Host "2. 下载 'ffmpeg-release-essentials.zip'" -ForegroundColor Yellow
    Write-Host "3. 解压到 C:\ffmpeg" -ForegroundColor Yellow
    Write-Host "4. 添加到系统PATH环境变量" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

Write-Host "FFmpeg 已安装 ✓" -ForegroundColor Green
Write-Host ""

# 检查视频文件是否存在
$danceVideo = "assets\videos\dance\dance-video.mov"
$projectVideo = "assets\videos\projects\virtual-human-video.mov"

if (-not (Test-Path $danceVideo)) {
    Write-Host "警告: 未找到舞蹈视频: $danceVideo" -ForegroundColor Yellow
} else {
    $size = [math]::Round((Get-Item $danceVideo).Length / 1MB, 2)
    Write-Host "舞蹈视频大小: $size MB" -ForegroundColor Cyan
}

if (-not (Test-Path $projectVideo)) {
    Write-Host "警告: 未找到项目视频: $projectVideo" -ForegroundColor Yellow
} else {
    $size = [math]::Round((Get-Item $projectVideo).Length / 1MB, 2)
    Write-Host "项目视频大小: $size MB" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "选择压缩质量:" -ForegroundColor Yellow
Write-Host "1. 高质量 (CRF 23) - 文件较大但质量最好"
Write-Host "2. 平衡 (CRF 25) - 推荐，质量好且文件较小"
Write-Host "3. 高压缩 (CRF 28) - 文件最小但质量略降"
Write-Host ""
$choice = Read-Host "请输入选项 (1-3)"

switch ($choice) {
    "1" { $crf = "23"; $preset = "slow" }
    "2" { $crf = "25"; $preset = "medium" }
    "3" { $crf = "28"; $preset = "medium" }
    default { 
        Write-Host "无效选项，使用默认设置 (CRF 25)" -ForegroundColor Yellow
        $crf = "25"
        $preset = "medium"
    }
}

Write-Host ""
Write-Host "开始压缩..." -ForegroundColor Yellow
Write-Host "质量设置: CRF $crf, Preset: $preset" -ForegroundColor Cyan
Write-Host ""

# 压缩舞蹈视频
if (Test-Path $danceVideo) {
    Write-Host "正在压缩舞蹈视频..." -ForegroundColor Yellow
    $output = "assets\videos\dance\dance-video.mp4"
    ffmpeg -i $danceVideo -c:v libx264 -crf $crf -preset $preset -c:a aac -b:a 128k $output -y 2>&1 | Out-Null
    if ($LASTEXITCODE -eq 0) {
        $newSize = [math]::Round((Get-Item $output).Length / 1MB, 2)
        Write-Host "✓ 舞蹈视频压缩完成: $newSize MB" -ForegroundColor Green
    } else {
        Write-Host "✗ 舞蹈视频压缩失败" -ForegroundColor Red
    }
}

# 压缩项目视频
if (Test-Path $projectVideo) {
    Write-Host "正在压缩项目视频..." -ForegroundColor Yellow
    $output = "assets\videos\projects\virtual-human-video.mp4"
    ffmpeg -i $projectVideo -c:v libx264 -crf $crf -preset $preset -c:a aac -b:a 128k $output -y 2>&1 | Out-Null
    if ($LASTEXITCODE -eq 0) {
        $newSize = [math]::Round((Get-Item $output).Length / 1MB, 2)
        Write-Host "✓ 项目视频压缩完成: $newSize MB" -ForegroundColor Green
    } else {
        Write-Host "✗ 项目视频压缩失败" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "压缩完成！" -ForegroundColor Green
Write-Host ""
Write-Host "下一步:" -ForegroundColor Yellow
Write-Host "1. 检查压缩后的视频质量" -ForegroundColor White
Write-Host "2. 更新 index.html 中的视频路径 (.mov -> .mp4)" -ForegroundColor White
Write-Host "3. 如果满意，可以删除原始 .mov 文件" -ForegroundColor White
