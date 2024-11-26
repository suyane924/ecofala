import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC55Bh5-Pb-e54DPaXd4bZl6eWu0gCYHvM",
    authDomain: "ecofala-b1543.firebaseapp.com",
    projectId: "ecofala-b1543",
    storageBucket: "ecofala-b1543.appspot.com",
    messagingSenderId: "909059471957",
    appId: "1:909059471957:web:73310d6022b2ea423e72dc",
    measurementId: "G-2VN48NN0J4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };