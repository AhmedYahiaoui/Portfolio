
// JavaScript
// src.firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDS8-XxgeOg8ceghBaqv9lKgZLtT72h9z8',
  authDomain: 'myportfolio-3dba8.firebaseapp.com',
  projectId: 'myportfolio-3dba8',
  storageBucket: 'myportfolio-3dba8.appspot.com',
  messagingSenderId: '564784571846',
  appId: '1:564784571846:web:52c369928bed81c998fec7'
}

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}
export const storage = getStorage();
