# 快速上手指南 🚀

## 一键启动

### macOS / Linux

```bash
./start_server.sh
```

或者直接运行：

```bash
python3 -m http.server 8000
```

### Windows

```cmd
python -m http.server 8000
```

## 访问地址

打开浏览器访问：**http://localhost:8000**

## 常见问题

### 1. 端口被占用怎么办？

更换其他端口（例如 9000）：

```bash
python3 -m http.server 9000
```

### 2. 如何在手机上访问？

1. 确保电脑和手机在同一个局域网
2. 查看电脑 IP 地址：
   ```bash
   ifconfig | grep "inet "
   ```
3. 在手机浏览器中访问：`http://你的IP:8000`

### 3. 页面无法加载？

- 确保在项目根目录运行命令
- 确保 Python 3 已安装
- 尝试清除浏览器缓存

## 功能导航

- **组件集录** - 查看所有 Flutter Widget
- **有态/无态** - 按组件类型分类
- **搜索功能** - 快速查找组件
- **详情页** - 查看组件详细说明和演示

## 停止服务器

按 `Ctrl + C` 停止服务器

---

**享受学习！** 🎉

