import firebase from "firebase/compat/app";
import { initializeFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore";
import 'firebase/compat/storage';
import { getStorage,ref } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAuZCe3JQpP8TxHkLdmMxXyGNMOqduo_eU",
  authDomain: "ckdgmlek-6fbc9.firebaseapp.com",
  projectId: "ckdgmlek-6fbc9",
  storageBucket: "ckdgmlek-6fbc9.appspot.com",
  messagingSenderId: "382977187563",
  appId: "1:382977187563:web:c453ceedf8cb76732de8ae",
  measurementId: "G-BX2VZ04KL3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
})
export { db };
