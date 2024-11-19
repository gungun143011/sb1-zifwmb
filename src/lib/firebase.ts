import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAuh4YGASX_DLppbPqaMiJAU-_nsdIn_QQ",
  authDomain: "music-social-platform.firebaseapp.com",
  projectId: "music-social-platform",
  storageBucket: "music-social-platform.appspot.com",
  messagingSenderId: "498806750519",
  appId: "1:498806750519:web:3424a6961865a0b8f6eeb2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};