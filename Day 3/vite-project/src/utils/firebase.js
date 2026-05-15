import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBFnOnW5NXZVphREHcnTUE0Mj9zhV9W5Ls",
  authDomain: "cinevo-31f0f.firebaseapp.com",
  projectId: "cinevo-31f0f",
  storageBucket: "cinevo-31f0f.firebasestorage.app",
  messagingSenderId: "536745014976",
  appId: "1:536745014976:web:095e982fef0dbe14fe9f25",
  measurementId: "G-1BHXNWFD4Z",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
