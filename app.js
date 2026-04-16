// app.js — ShikhoBD Centralized Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAPM84Jdca0OgnW6b0VadXh3uYmCEyAfH4",
  authDomain: "cqvai-13647.firebaseapp.com",
  projectId: "cqvai-13647",
  storageBucket: "cqvai-13647.firebasestorage.app",
  messagingSenderId: "355769291904",
  appId: "1:355769291904:web:a1cef061ef2894f9928265",
  measurementId: "G-F3NRYETR2Y"
};

// Prevent duplicate initialization
if (!window._firebaseInitialized) {
    window._firebaseInitialized = true;

    async function initializeFirebase() {
        try {
            const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js");
            const { 
                getFirestore, collection, addDoc, getDocs, doc, deleteDoc, 
                updateDoc, query, orderBy, serverTimestamp, onSnapshot 
            } = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js");

            const app = initializeApp(firebaseConfig);
            const db = getFirestore(app);

            // Expose everything needed for Admin + Public site
            window._firebaseApp = app;
            window._db = db;
            window._fsModules = {
                collection, addDoc, getDocs, doc, deleteDoc, updateDoc,
                query, orderBy, serverTimestamp, onSnapshot
            };

            console.log("✅ Firebase initialized successfully (Full Admin Support)");
            window.dispatchEvent(new Event("firebaseReady"));

        } catch (err) {
            console.error("❌ Firebase initialization failed:", err);
        }
    }

    initializeFirebase();
}
