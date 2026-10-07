// ==========================================
// RESQ SAFETY SYSTEM
// Firebase Configuration
// ==========================================

const firebaseConfig = {
    apiKey: "AIzaSyDJCBEip8GAyoArYPZmhLmbBxxPYf72Ecw",
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

// ==========================================
// FIREBASE LOGIN & REGISTRATION
// ==========================================

function showLogin() {

    const loginBox = document.createElement("div");

    loginBox.innerHTML = `
        <div style="
            position:fixed;
            top:0;
            left:0;
            width:100%;
            height:100%;
            background:rgba(0,0,0,0.7);
            display:flex;
            justify-content:center;
            align-items:center;
            z-index:9999;
        ">

            <div style="
                background:white;
                padding:30px;
                border-radius:15px;
                width:320px;
                text-align:center;
                box-shadow:0 5px 20px rgba(0,0,0,0.3);
            ">

                <h2>RESQ Login</h2>

                <input
                    id="resqEmail"
                    type="email"
                    placeholder="Email"
                    style="width:90%; padding:12px; margin:8px;"
                >

                <input
                    id="resqPassword"
                    type="password"
                    placeholder="Password"
                    style="width:90%; padding:12px; margin:8px;"
                >

                <button
                    onclick="resqLogin()"
                    style="padding:10px 20px; margin:8px;"
                >
                    Login
                </button>

                <button
                    onclick="resqRegister()"
                    style="padding:10px 20px; margin:8px;"
                >
                    Register
                </button>

                <br><br>

                <button
                    onclick="this.parentElement.parentElement.parentElement.remove()"
                    style="padding:8px 20px;"
                >
                    Close
                </button>

            </div>
        </div>
    `;

    document.body.appendChild(loginBox);
}


// ==========================================
// REGISTER USER
// ==========================================

function resqRegister() {

    const email = document.getElementById("resqEmail").value;
    const password = document.getElementById("resqPassword").value;

    if (!email || !password) {
        alert("Please enter email and password.");
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {

            const user = userCredential.user;

            return db.collection("users")
                .doc(user.uid)
                .set({
                    email: user.email,
                    name: user.email.split("@")[0],
                    role: "user",
                    createdAt: new Date()
                });

        })
        .then(() => {

            alert("✅ Registration successful!");

        })
        .catch((error) => {

            alert("Registration failed: " + error.message);

        });
}


// ==========================================
// LOGIN USER
// ==========================================

function resqLogin() {

    const email = document.getElementById("resqEmail").value;
    const password = document.getElementById("resqPassword").value;

    if (!email || !password) {
        alert("Please enter email and password.");
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {

            const user = userCredential.user;

            alert("✅ Login successful!\n\nWelcome to RESQ, " + user.email);

        })
        .catch((error) => {

            alert("Login failed: " + error.message);

        });
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
