// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, docs, getDoc, doc, query, where } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1yCrir0dwkd-WVcYVb7nSk9LXKGwDb6Q",
  authDomain: "react-ecomerce-5413f.firebaseapp.com",
  projectId: "react-ecomerce-5413f",
  storageBucket: "react-ecomerce-5413f.appspot.com",
  messagingSenderId: "807433303817",
  appId: "1:807433303817:web:d2567eca458d910bf4c5d8",
  measurementId: "G-C565V5NFKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export async function getAllPhones(){
  try{
    const data = collection(db,"phones");
    const phonesCollection = await getDocs(data);

    const result = phonesCollection.docs.map(phone =>{
      return {...phone.data(), id : phone.id}
    });
    return result;
    
  }
  catch(err){
    console.error(err);
  }
}
export async function getAllPhonesFrom(marca){
  try{
    const data = collection(db,"phones");

    const Q = query(data, where("marca","==", marca ));
    const docsInCollection = await getDocs(Q)

    const result = docsInCollection.docs.map(marca =>{
      return {...marca.data(), id : marca.id}
    });
    return result;
    
  }
  catch(err){
    console.error(err);
  }
}