import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6KSRKfM_X-Lwgme67NcaTjyJApOhIgPE",
  authDomain: "clothing-ecommerce-db-89322.firebaseapp.com",
  projectId: "clothing-ecommerce-db-89322",
  storageBucket: "clothing-ecommerce-db-89322.appspot.com",
  messagingSenderId: "237685853252",
  appId: "1:237685853252:web:63c4b185540fde3fb5c011",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
