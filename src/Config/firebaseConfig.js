import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBgXFbAtBe_ycN0tQTA_DjHY8IXcYv5YAM",
    authDomain: "tasks-b09bb.firebaseapp.com",
    projectId: "tasks-b09bb",
    storageBucket: "tasks-b09bb.appspot.com",
    messagingSenderId: "302589207845",
    appId: "1:302589207845:web:84a46c44a90dce5c6aa6cc"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export default database