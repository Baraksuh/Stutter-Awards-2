function goVote(type) {
  window.location.href = `vote.html?category=${type}`;
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3zRs7Z7YrD6VhGseV5Msk3g_23M5-DAI",
  authDomain: "stutter-awards2.firebaseapp.com",
  projectId: "stutter-awards2",
  storageBucket: "stutter-awards2.firebasestorage.app",
  messagingSenderId: "968119653644",
  appId: "1:968119653644:web:781c09aeb89e7a59bce529",
  measurementId: "G-GVN5MPVHQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
