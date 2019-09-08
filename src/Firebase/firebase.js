import app from 'firebase/app';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

class Firebase {
    constructor() {
        app.initializeApp(config);
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        app.auth().createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        app.auth().signInWithEmailAndPassword(email, password);

    doSignOut = () => app.auth().signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        app.auth().currentUser.updatePassword(password);

}

export default Firebase;