import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import {firebaseConfig} from './config';

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebase;