// firebase-config.example.js
// ──────────────────────────────────────────────────────────────
// SETUP INSTRUCTIONS:
//   1. Copy this file and rename it to: firebase-config.js
//   2. Replace every placeholder below with your real Firebase values
//   3. firebase-config.js is gitignored — your keys stay private
//
// Find your config at:
//   Firebase Console → Project Settings → Your Apps → SDK setup
// ──────────────────────────────────────────────────────────────

firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
});
