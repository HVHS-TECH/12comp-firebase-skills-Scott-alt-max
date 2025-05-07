//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by Scott, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c fb_io.mjs', 'color: blue; background-color: white;'); //DIAG
var fb_gameDB;

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/
export { fb_initialise, fb_authenticate, fb_detectAuthStateChanged, fb_logOut, fb_writeTo, fb_read, fb_readAll };

function fb_initialise() {
    console.log('%c fb_initialise(): ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';'); //DIAG

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const FB_GAMECONFIG = {
        apiKey: "AIzaSyBA9LF4VKTGLBynVTOiG3iJqm-odKKE74g",
        authDomain: "comp-2025-scott-barlow.firebaseapp.com",
        databaseURL: "https://comp-2025-scott-barlow-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "comp-2025-scott-barlow",
        storageBucket: "comp-2025-scott-barlow.firebasestorage.app",
        messagingSenderId: "604831891804",
        appId: "1:604831891804:web:e1d0c36b49a9ad732b4199",
        measurementId: "G-5JBDKMXH4C"
    };
    
    const FB_GAMEAPP = initializeApp(FB_GAMECONFIG);
    fb_gameDB = getDatabase(FB_GAMEAPP);
    console.info(fb_gameDB); //DIAG
}
function fb_authenticate() {
    console.log('%c fb_authenticate: ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';'); //DIAG

    const AUTH = getAuth();
    const PROVIDER = new GoogleAuthProvider();

    // The following makes Google ask the user to select the account
    PROVIDER.setCustomParameters({
        prompt: 'select_account'
    });
    signInWithPopup(AUTH, PROVIDER).then((result) => {
        console.log("Authentication successful"); //DIAG
        console.log("User Email: " + result._tokenResponse.email); //DIAG
        console.log("User Local ID: " + result._tokenResponse.localId); //DIAG
        //console.log(result); //DIAG
    })
    .catch((error) => {
        console.log("Authentication unsuccessful"); //DIAG
        console.log(error); //DIAG
    });
}
function fb_detectAuthStateChanged() {
    console.log('%c fb_detectAuthStateChanged: ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';'); //DIAG
    const AUTH = getAuth();

    onAuthStateChanged(AUTH, (user) => {
        if (user) {
            console.log("User hasn't changed");
        } else {
            console.log("User has changed");
        }
    }, (error) => {
        console.log("Authorisation state detection error");
        console.log(error);
    });
}
function fb_logOut() {
    console.log('%c fb_logOut: ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';'); //DIAG
    const AUTH = getAuth();

    signOut(AUTH).then(() => {
        console.log("Successfully logged out");
    })
    .catch((error) => {
        console.log("Logout error");
        console.log(error);
    });
}
function fb_writeTo() {
    console.log('%c fb_writeTo: ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';'); //DIAG

    const REF = ref(fb_gameDB, "Users/UserID");
    var UserInformation = {HighScore: 30, Name: "Scobb"}
    
    set(REF, UserInformation).then(() => {
        console.log("Written the following information to the database:");
        console.log(UserInformation);
    }).catch((error) => {
        console.log("Error with writing to the database");
        console.log(error);
    });
}
function fb_read() {
    console.log('%c fb_read: ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';'); //DIAG

    const REF = ref(fb_gameDB, "Users/UserID");

    get(REF).then((snapshot) => {
        var fb_data = snapshot.val();

        if (fb_data != null) {
            console.log("Successfully read database information:");
            console.log(fb_data);

        } else {
            console.log("Attempting to read a value that doesn't exist");
            console.log(fb_data);
        }
    }).catch((error) => {
        console.log("Error with reading the database");
        console.log(error);
    });
}
function fb_readAll() {
    console.log('%c fb_readAll: ', 'color: ' + COL_C + '; background-color: ' + COL_B + ';'); //DIAG

    const REF = ref(fb_gameDB, "Users");

    get(REF).then((snapshot) => {
        var fb_data = snapshot.val();

        if (fb_data != null) {
            console.log("Successfully read database information:");
            console.log(fb_data);
        } else {
            console.log("Attempting to read a value that doesn't exist");
            console.log(fb_data);
        }
    }).catch((error) => {
        console.log("Error with reading the database");
        console.log(error);
    });
}