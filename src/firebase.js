import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbRl1SjQj1rYCOVwAFqgKsxFGOCf0YUl4",
  authDomain: "facebook-clone04.firebaseapp.com",
  projectId: "facebook-clone04",
  storageBucket: "facebook-clone04.appspot.com",
  messagingSenderId: "1038071353727",
  appId: "1:1038071353727:web:1f5b41944998cf630c4a4a",
  // measurementId: "G-FQ1FGW5NXR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const storage = getStorage();
export const db = getFirestore(app);




