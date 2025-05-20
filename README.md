# Frontend - Product Catalog (React)

This is the frontend for the Product Catalog application built with **React**. It fetches product data from a backend API and displays it with a clean, responsive user interface.

---

## 🖥️ Features
- React functional components with hooks
- API integration using `fetch`
- Responsive product cards
- Modal display for product details
- Clean UI with CSS styling

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
cd your-workspace
git clone https://github.com/your-user/frontend-product-catalog.git
cd frontend-product-catalog
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set API Base URL (Optional)
You can update the backend URL in `src/config.js`:
```js
export const API_BASE_URL = "http://localhost:3001";
```

### 4. Start Development Server
```bash
npm start
```
This will launch the app at `http://localhost:3000`

---

## 🏗️ Build for Production
```bash
npm run build
```
This generates the `build/` folder with optimized static files.

---

## 📁 Project Structure
```
src/
├── App.js
├── App.css
├── config.js
```

---

## ✅ Requirements
- Node.js >= 14
- npm >= 6

---

## 📄 License
MIT License
