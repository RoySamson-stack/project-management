import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyDmOzvLfbJ74Ftv0QWQmdpoaE1LzNPUlo0",
  authDomain: "project-management-53eab.firebaseapp.com",
  projectId: "project-management-53eab",
  storageBucket: "project-management-53eab.appspot.com",
  messagingSenderId: "61242591551",
  appId: "1:61242591551:web:d1707b994cb68028d1ab8a"
};