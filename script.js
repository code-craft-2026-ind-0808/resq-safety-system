// RESQ Safety System
// Basic frontend functionality
// Firebase backend will be connected later

function showLogin() {
    alert("RESQ Login and Registration will be connected to Firebase soon.");
}


// SOS Button
function sendSOS() {

    const confirmation = confirm(
        "Are you sure you want to send an emergency SOS?"
    );

    if (confirmation) {

        alert(
            "🚨 SOS REQUEST CREATED!\n\n" +
            "Your emergency request will be sent to the RESQ cloud system."
        );

        console.log("SOS request created.");

    } else {

        alert("SOS request cancelled.");

    }
}


// Test function
function welcomeMessage() {

    console.log(
        "Welcome to RESQ Safety System!"
    );

}
