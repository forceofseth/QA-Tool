import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'


const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};


//TODO Firebase constructor in index.js aufrufen.
class Firebase {
    constructor() {
        firebase.initializeApp(config);
        firebase.firestore();
        this.auth = firebase.auth();
    }

    //TODO  delete unused methods
    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

}

export {Firebase, firebase};
