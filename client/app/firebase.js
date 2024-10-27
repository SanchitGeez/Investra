import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyCVHxf5kYihkLgR671gf-lCD0h5G9A6dwI",
  authDomain: "investra-35ae4.firebaseapp.com",
  projectId: "investra-35ae4",
  storageBucket: "investra-35ae4.appspot.com",
  messagingSenderId: "805241184070",
  appId: "1:805241184070:web:c13708a945317f060b0f47",
  measurementId: "G-WGCD1B4FTZ"
};

let firebaseApp = null;

export const useFirebase = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !firebaseApp) {
      // Initialize Firebase only on the client side
      firebaseApp = initializeApp(firebaseConfig);
      setAuth(getAuth(firebaseApp)); // Set Firebase Auth instance
    }
  }, []);

  return auth;
};
