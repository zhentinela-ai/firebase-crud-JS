// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0RsOET5EL5WWJUV7-SxO7_MzF5eIW2UI",
  authDomain: "crud-javascript-1b038.firebaseapp.com",
  projectId: "crud-javascript-1b038",
  storageBucket: "crud-javascript-1b038.appspot.com",
  messagingSenderId: "564346501144",
  appId: "1:564346501144:web:f92ca45e3a9a764784eb6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const getTasks = () => getDocs(collection(db, "tasks"));

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

export const deleteTask = (id) => deleteDoc(doc(db, `tasks`, id));

export const getTask = id => getDoc(doc(db, 'tasks', id))

export const editTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields)