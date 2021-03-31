import firebase from 'firebase/app'; // <-- This must be first
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import config from './config';

firebase.initializeApp(config);
// try {
//   firebase.initializeApp(config);
// } catch (error) {
//   if (!/already exists/u.test(error.message)) {
//     console.error('Firebase admin initialization error', error.stack);
//   }
// }

// Passing off firebase.auth() instead of firebase.auth
// allows us to share the same instance of Firebase throughout
// the entire app whenever we import it from here.

export const fb = {
  auth: firebase.auth(),
  storage: firebase.storage(),
  firestore: firebase.firestore(),
};
