import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as isAnalyticsSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyAuZCe3JQpP8TxHkLdmMxXyGNMOqduo_eU",
  authDomain: "ckdgmlek-6fbc9.firebaseapp.com",
  projectId: "ckdgmlek-6fbc9",
  storageBucket: "ckdgmlek-6fbc9.appspot.com",
  messagingSenderId: "382977187563",
  appId: "1:382977187563:web:c453ceedf8cb76732de8ae",
  measurementId: "G-BX2VZ04KL3",
};

const initializeFirebaseAnalytics = async () => {
  if (await isAnalyticsSupported()) {
    return getAnalytics(app);
  }
  return null;
};

const app = initializeApp(firebaseConfig);
const analytics = initializeFirebaseAnalytics();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, analytics };
