import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZ9kWZh8kHRZd9xC5AVllEymNk-uKorQ0",
  authDomain: "gdgoc-b7ca5.firebaseapp.com",
  projectId: "gdgoc-b7ca5",
  storageBucket: "gdgoc-b7ca5.firebasestorage.app",
  messagingSenderId: "40046960533",
  appId: "1:40046960533:web:e9656f30f3a32750e0e09c",
  measurementId: "G-6F1ERDHW9B"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
  if (err.code === 'failed-precondition') {
    console.log('Multiple tabs open, persistence can only be enabled in one tab at a time.');
  } else if (err.code === 'unimplemented') {
    console.log('The current browser doesn\'t support all of the features required to enable persistence');
  }
});