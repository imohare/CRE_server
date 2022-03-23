import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJPmmuOIQ_l3XBQcu-iBRN2SKomuFaJi0",
  authDomain: "cre-6cbea.firebaseapp.com",
  projectId: "cre-6cbea",
  storageBucket: "cre-6cbea.appspot.com",
  messagingSenderId: "683036720412",
  appId: "1:683036720412:web:bfb41ba80dd8667cea0ed9",
  measurementId: "G-49LCK8NJMQ"
};

const storage = firebase.storage();

firebase.initializeApp(firebaseConfig)

export { storage, firebase as default };