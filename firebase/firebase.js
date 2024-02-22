import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyARcfV5RAxpBHxpUXbzUL1rVz1pApIs3T0",
    authDomain: "nmims-app-bc012.firebaseapp.com",
    projectId: "nmims-app-bc012",
    storageBucket: "nmims-app-bc012.appspot.com",
    messagingSenderId: "603729289368",
    appId: "1:603729289368:web:e2c3113e5fd62eb3a930ed",
    measurementId: "G-2DTGT4EVV2"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const firestore = getFirestore(app);

export const authentication = getAuth(app);