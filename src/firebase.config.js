import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDgubXzzVuj6it9ND47ALxNKjzRoPtPzBk',
  authDomain: 'restaurant-a7a42.firebaseapp.com',
  databaseURL: 'https://restaurant-a7a42-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'restaurant-a7a42',
  storageBucket: 'restaurant-a7a42.appspot.com',
  messagingSenderId: '1069840831634',
  appId: '1:1069840831634:web:1418885aa1e8502d0f424b',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
