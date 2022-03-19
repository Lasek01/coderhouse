// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, getDoc, doc, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

//obtener todos los items
export const getAllItems = async() => {
    const colec = collection(db, "items")
    const itemsSnap = await getDocs(colec)

    const result = itemsSnap.docs.map(item => {
        return {...item.data(), id: item.id}
    })

    return result
}

//obtener filtrado por categoria
export const getAllItemsFrom = async(category) => {
    const colec = collection(db, "items")
    const myQuery = query(colec, where("genero", "==", category))

    const itemsSnap = await getDocs(myQuery)

    const result = itemsSnap.docs.map(item => {
        return {...item.data(), id: item.id}
    })

    return result
}

//obtener un solo item
export const getItem = async(id) => {
    const colec = collection(db, "items")
    const docRef = doc(colec, id)

    const resultDoc = await getDoc(docRef)

    return {...resultDoc.data(), id: resultDoc.id}
}