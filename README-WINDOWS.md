# Windows Setup Guide for Yuvraj's Portfolio

## Quick Start (Choose any method):

### Method 1: Batch File
```powershell
.\start-windows.bat
```

### Method 2: Node Script
```powershell
node start-dev.js
```

### Method 3: Direct Commands
```powershell
cd client
npx vite
```

## Step-by-Step Instructions:

1. **Open PowerShell in your project folder**
   - Right-click in the folder and select "Open PowerShell window here"
   - Or navigate using: `cd "E:\Downloads\YuvrajPortfoli4\YuvrajPortfolio"`

2. **Install dependencies (one time only)**
   ```powershell
   npm install
   ```

3. **Start the development server**
   ```powershell
   .\start-windows.bat
   ```
   
   Or alternatively:
   ```powershell
   node start-dev.js
   ```

4. **Your portfolio will open at http://localhost:5173**

## Troubleshooting:

- **If batch file doesn't work**: Use `node start-dev.js` instead
- **If Node script fails**: Use `cd client && npx vite`
- **If photo doesn't show**: Make sure the `attached_assets` folder with your photo is in the root directory

## File Structure Should Look Like:
```
YuvrajPortfolio/
├── attached_assets/
│   └── image_1755079377287.jpg  (your photo)
├── client/
│   ├── src/
│   └── index.html
├── start-windows.bat
├── start-dev.js
└── package.json
```

The key is using `.\` before the batch file name in PowerShell!