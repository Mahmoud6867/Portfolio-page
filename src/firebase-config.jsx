import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCJPTJtVlBtM5y7KRT8GHvV142asw5693s",
    authDomain: "portfolio-database-b9acb.firebaseapp.com",
    projectId: "portfolio-database-b9acb",
    storageBucket: "portfolio-database-b9acb.appspot.com",
    messagingSenderId: "838396413235",
    appId: "1:838396413235:web:1038712eb4660fe0022a46"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);