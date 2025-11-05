#!/bin/bash

# Flutter Unit Web 服务器启动脚本

echo "🚀 启动 Flutter Unit Web 服务器..."
echo ""
echo "📱 访问地址: http://localhost:8000"
echo "⌨️  按 Ctrl+C 停止服务器"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 启动 Python HTTP 服务器
python3 -m http.server 8000

