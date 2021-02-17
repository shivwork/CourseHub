import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyANTCshUH_Qyo5ouJtvFxnCBXkpl0lAxcY",
    authDomain: "aram-acadamy.firebaseapp.com",
    projectId: "aram-acadamy",
    storageBucket: "aram-acadamy.appspot.com",
    messagingSenderId: "251521506852",
    appId: "1:251521506852:web:6ac67c0cab296d453082b1"
};
firebase.initializeApp(config);
export default firebase;