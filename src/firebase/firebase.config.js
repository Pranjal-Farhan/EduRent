// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChs-jcaLA0wzFxhNJCFjl8z7K130_eXGM",
  authDomain: "edurent-project.firebaseapp.com",
  projectId: "edurent-project",
  storageBucket: "edurent-project.appspot.com",
  messagingSenderId: "575080822350",
  appId: "1:575080822350:web:492940bac146e7ae86351f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;