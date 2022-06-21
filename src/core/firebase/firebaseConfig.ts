import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDPKbsCGKPjRT9qZJyTLbkHfXpIJbASjmM',
  authDomain: 'xp-programming.firebaseapp.com',
  projectId: 'xp-programming',
  storageBucket: 'xp-programming.appspot.com',
  messagingSenderId: '323334234579',
  appId: '1:323334234579:web:2da629681d14369fc7cf26',
  measurementId: 'G-PEGVLRZ0CX'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
