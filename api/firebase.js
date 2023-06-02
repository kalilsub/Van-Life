// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDanJWXeS1xcqb6S3-FXM_JlPea4an2qzs",
  authDomain: "vanlife-70526.firebaseapp.com",
  projectId: "vanlife-70526",
  storageBucket: "vanlife-70526.appspot.com",
  messagingSenderId: "340224603478",
  appId: "1:340224603478:web:44d0c9b619cbd69bafd2f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getAllVans() {
  const querySnapshot = await getDocs(vansCollectionRef)
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return dataArr
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id)  
  const vanSnapshot = await getDoc(docRef)
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id
  }
  
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123")) 
  const querySnapshot = await getDocs(q)
  const dataArr = querySnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return dataArr
}