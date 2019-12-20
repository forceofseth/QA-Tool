const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({
    origin: true,
});

exports.deleteAuthUser = functions.https.onRequest((req, res) => {
    if (!admin.apps.length) {
        admin.initializeApp();
    }
    return cors(req, res, () => {
        const uid = req.query.uid;
        admin.auth().deleteUser(uid).then(() => {
            console.log("Successfully deleted user with the uid: " + uid);
            res.end();
            return null;
        }).catch((error) => {
            console.log(error);
            res.end();
            return null;
        });
    })
});

exports.createNewAuthUser = functions.https.onRequest((req, res) => {
    if (!admin.apps.length) {
        admin.initializeApp();
    }
    return cors(req, res, () => {
        const email = req.query.email;
        const password = req.query.password;
        admin.auth().createUser({email: email, password: password}).then((userRecord) => {
            console.log("Successfully created new user with the uid: " + userRecord.uid);
            res.send(userRecord.uid);
            return null;
        }).catch((error) => {
            console.log(error);
            res.end();
            return null;
        });
    });
});


