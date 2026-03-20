# 🚀 Shaly S — Full Stack Portfolio
### React (Vite) + Node.js (Express) + MySQL

---

## 📁 Project Structure

```
portfolio/
├── frontend/                   ← React + Vite + Tailwind + Framer Motion
│   ├── index.html
│   ├── vite.config.js          ← Proxy: /api → localhost:5000
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   ├── .env.example
│   └── src/
│       ├── main.jsx            ← Entry point
│       ├── App.jsx             ← Root component
│       ├── index.css           ← Global styles + design tokens
│       ├── services/
│       │   └── api.js          ← Axios API client
│       ├── hooks/
│       │   └── useScrollReveal.js
│       └── components/
│           ├── LoadingScreen.jsx
│           ├── Cursor.jsx
│           ├── Navbar.jsx
│           ├── Hero.jsx
│           ├── About.jsx
│           ├── Skills.jsx
│           ├── Projects.jsx
│           ├── Experience.jsx
│           ├── Certifications.jsx
│           ├── Contact.jsx     ← Wired to Node.js API
│           ├── SocialFloat.jsx
│           └── Footer.jsx
│
└── backend/                    ← Node.js + Express + MySQL
    ├── server.js               ← Express app entry
    ├── package.json
    ├── .env.example
    ├── config/
    │   ├── db.js               ← MySQL connection pool
    │   └── initDb.js           ← Auto-creates DB + tables
    ├── controllers/
    │   └── contactController.js
    ├── middleware/
    │   └── validate.js         ← express-validator rules
    └── routes/
        └── contact.js          ← Route definitions
```

---

## ⚙️ Prerequisites

| Tool      | Version  | Check              |
|-----------|----------|--------------------|
| Node.js   | 18+      | `node -v`          |
| npm       | 9+       | `npm -v`           |
| MySQL     | 8+       | `mysql --version`  |

---

## 🗄️ Step 1 — MySQL Database Setup

```bash
# Open MySQL terminal
mysql -u root -p
```

```sql
-- Run these SQL commands:
CREATE DATABASE IF NOT EXISTS portfolio_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE portfolio_db;

CREATE TABLE IF NOT EXISTS contacts (
  id         BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR(100) NOT NULL,
  email      VARCHAR(150) NOT NULL,
  subject    VARCHAR(200) DEFAULT '',
  message    TEXT         NOT NULL,
  ip_address VARCHAR(45)  DEFAULT NULL,
  created_at DATETIME     DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email      (email),
  INDEX idx_created_at (created_at DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Verify:
SHOW TABLES;
```

> **Tip:** Or just run `npm run db:init` in the backend folder after setting up `.env` — it auto-creates everything!

---

## 🔧 Step 2 — Backend Setup

```bash
cd portfolio/backend

# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.example .env
```

**Edit `.env`:**
```env
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD_HERE
DB_NAME=portfolio_db
CLIENT_URL=http://localhost:5173
```

```bash
# 3. (Optional) Auto-init the database
npm run db:init

# 4. Start backend in dev mode
npm run dev
```

✅ Backend running at: `http://localhost:5000`

**Test it:**
```bash
curl http://localhost:5000/api/contact/health
# → {"success":true,"status":"UP","service":"Portfolio Contact API"}

curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"Hello Shaly!"}'
# → {"success":true,"message":"Thank you!...","data":{"id":1}}
```

---

## 🎨 Step 3 — Frontend Setup

```bash
cd portfolio/frontend

# 1. Install dependencies
npm install

# 2. Create env file (blank = use Vite proxy, recommended)
cp .env.example .env.local

# 3. Start dev server
npm run dev
```

✅ Frontend running at: `http://localhost:5173`

> The Vite proxy in `vite.config.js` automatically forwards all `/api/*`
> requests to `http://localhost:5000` — no CORS issues in development!

---

## 📡 API Endpoints

| Method   | Endpoint              | Description              |
|----------|-----------------------|--------------------------|
| `GET`    | `/`                   | API info                 |
| `GET`    | `/api/contact/health` | Health check             |
| `POST`   | `/api/contact`        | Submit contact message   |
| `GET`    | `/api/contact`        | Get all messages (admin) |
| `GET`    | `/api/contact/:id`    | Get single message       |
| `DELETE` | `/api/contact/:id`    | Delete message           |

**POST /api/contact — Request body:**
```json
{
  "name":    "Jane Smith",
  "email":   "jane@example.com",
  "subject": "Project Collaboration",
  "message": "Hello! I'd love to work with you."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you! Your message has been received. I'll get back to you soon. 🚀",
  "data": { "id": 1 }
}
```

---

## 🏗️ Build for Production

**Frontend:**
```bash
cd frontend
npm run build
# → dist/ folder ready to deploy (Vercel / Netlify)
```

**Backend:**
```bash
cd backend
# Set NODE_ENV=production in .env
npm start
```

---

## ☁️ Free Deployment Options

| Service    | What             | How                                    |
|------------|-----------------|----------------------------------------|
| **Vercel** | Frontend         | `vercel --prod` or connect GitHub repo |
| **Render** | Backend (Node)   | Connect repo → set env vars            |
| **Railway**| MySQL DB         | Add MySQL plugin → get connection URL  |

**Production env vars for backend on Render/Railway:**
```
NODE_ENV=production
PORT=5000
DB_HOST=<railway-mysql-host>
DB_PORT=<railway-mysql-port>
DB_USER=<user>
DB_PASSWORD=<password>
DB_NAME=portfolio_db
CLIENT_URL=https://your-portfolio.vercel.app
```

**Frontend `.env` on Vercel:**
```
VITE_API_URL=https://your-backend.onrender.com/api
```

---

## ✨ Features

- 🌑 Dark glassmorphism design (`#0A0F1E` base)
- 🎯 Custom animated cursor with lag ring
- 📊 Scroll progress bar (gradient)
- 🌊 Framer Motion page load + scroll reveal animations
- 💎 Animated skill bars with IntersectionObserver
- 🃏 Project cards with color-coded hover glow
- ⏳ Timeline experience layout (2-column)
- 📬 Contact form → Node.js API → MySQL
- 🛡️ Rate limiting (5 submissions / 15 min per IP)
- ✅ Input validation (express-validator)
- 📱 Fully responsive (mobile hamburger menu)
- 🔗 Floating social icons sidebar
- ⚡ Vite proxy (zero CORS config in dev)

---

## 🛠 Tech Stack

**Frontend:** React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion 10 · Axios  
**Backend:** Node.js 18 · Express 4 · mysql2 · express-validator · helmet · morgan · express-rate-limit  
**Database:** MySQL 8  
**Fonts:** Syne (display) + DM Sans (body)
