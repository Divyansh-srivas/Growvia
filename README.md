# Growvia 🚀

> **AI-based B.Tech Career Roadmap Platform** — Pick your path, get a year-wise plan, check your resume, and track your progress.

---

## ✨ Features

- 🗺️ **Personalized Roadmap** — Select your skills & interests; get matched career paths with scores
- 📅 **Year-wise Planner** — 4-year task breakdown for Frontend, Backend, Full-Stack, Data Science, AI/ML, Cybersecurity & App Dev
- 📄 **Resume Analyzer** — Paste your resume and get an instant score + improvement tips
- 🔐 **Firebase Authentication** — Email/Password sign-up & Google Sign-In
- 💾 **Progress Tracking** — Tasks saved in localStorage; dashboard shows your current progress
- 📋 **Copy / Print** — Export your roadmap as PDF or copy as plain text

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML, CSS, JavaScript |
| Auth | Firebase Authentication (v10 compat CDN) |
| Storage | Browser `localStorage` |
| Fonts | Google Fonts – Fira Sans |
| Video | WebM + MP4 hero video |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/growvia.git
cd growvia
```

### 2. Firebase setup

1. Go to [Firebase Console](https://console.firebase.google.com/) and open your project.
2. Under **Authentication → Sign-in method**, ensure the following are enabled:
   - ✅ **Email/Password**
   - ✅ **Google**
3. Under **Authentication → Settings → Authorized domains**, ensure `localhost` is listed for local testing.
4. Copy the template configuration file:
   ```bash
   cp firebase-config.example.js firebase-config.js
   ```
   *(On Windows PowerShell: `Copy-Item firebase-config.example.js firebase-config.js`)*
5. Paste your project's credentials inside `firebase-config.js`:
   ```js
   firebase.initializeApp({
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   });
   ```

> 🔒 **Privacy & Security Note:** `firebase-config.js` is included in `.gitignore` so your private credentials will never be committed or leaked to GitHub.

### 3. Run locally

```bash
npm start
# → http://localhost:3000
```

Or just open `index.html` directly in your browser — no build step needed.

---

## 📁 Project Structure

```
growvia/
├── index.html                   # Entire app (HTML + CSS + JS in one file)
├── firebase-config.js           # Real Firebase credentials (gitignored, stays local)
├── firebase-config.example.js   # Public config template for GitHub
├── assets/
│   ├── poster.jpg               # Hero video poster image
│   ├── promo.webm               # Hero video (WebM)
│   └── promo.mp4                # Hero video (MP4 fallback)
├── package.json
├── .gitignore                   # Excludes firebase-config.js, node_modules, etc.
└── README.md
```

---

## 🔑 Firebase API Keys

Firebase API keys identify your project to Google APIs. To prevent unwanted domain usage, you can also restrict the key:
1. Go to [Google Cloud Console](https://console.cloud.google.com/) → **APIs & Services** → **Credentials**.
2. Click your API key and set **Application restrictions** → **Websites (HTTP referrers)** to your own domains (e.g. `localhost`, your GitHub Pages URL).

---

## 🌐 Deploying

Since this is a static site, you can deploy to any static host:

| Platform | Command / Steps |
|---|---|
| **GitHub Pages** | Push to `main`, enable Pages in repo Settings → Pages → `/ (root)` |
| **Vercel** | `npx vercel` in the project folder |
| **Netlify** | Drag & drop the folder at [netlify.com/drop](https://app.netlify.com/drop) |
| **Firebase Hosting** | `npm i -g firebase-tools && firebase init hosting && firebase deploy` |

> ⚠️ After deploying, add your production domain to **Firebase → Authentication → Authorized Domains**.

---

## 📸 Screenshots

> Replace with actual screenshots of your app.

---

## 📄 License

MIT — free to use, modify and distribute.
