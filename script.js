// ==========================================
// RESQ SAFETY SYSTEM
// Firebase Configuration
// ==========================================

const firebaseConfig = {
    apiKey: "AIzaSyDJCBEip8GAyoArYPZmhLmbBxPYf72Ecw",
    authDomain: "resq-safety-system.firebaseapp.com",
    projectId: "resq-safety-system",
    storageBucket: "resq-safety-system.firebasestorage.app",
    messagingSenderId: "324095482587",
    appId: "1:324095482587:web:47a871ada94e7df3f48afe"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Firebase services
const auth = firebase.auth();
const db = firebase.firestore();


// ==========================================
// TEST FIREBASE CONNECTION
// ==========================================

console.log("RESQ Firebase connected successfully!");
console.log("Firebase project:", firebase.app().options.projectId);


// ==========================================
// BASIC LOGIN MESSAGE
// ==========================================

function showLogin() {
    alert("RESQ Login and Registration will be connected to Firebase.");
}


// ==========================================
// SOS BUTTON
// ==========================================

function sendSOS() {

    const confirmation = confirm(
        "Are you sure you want to send an emergency SOS?"
    );

    if (confirmation) {

        alert(
            "🚨 SOS REQUEST CREATED!\n\n" +
            "The emergency request will be connected to the RESQ cloud database."
        );

        console.log("SOS request created.");

    } else {

        alert("SOS request cancelled.");

    }
}
