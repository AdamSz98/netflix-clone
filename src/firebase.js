import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXIZ-5TMirX_3h1Om1Fbo5W5j8GiHlxjA",
  authDomain: "netflix-clone-35733.firebaseapp.com",
  projectId: "netflix-clone-35733",
  storageBucket: "netflix-clone-35733.appspot.com",
  messagingSenderId: "94014953621",
  appId: "1:94014953621:web:34f5381c975f9a461fe39c"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(firebaseApp);

export { auth }
export default db;