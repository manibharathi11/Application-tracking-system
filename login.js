const firebaseConfig = {
  apiKey: "AIzaSyAEVXNX8AVWSUNBubFItcXK1ZxAixx3aEE",
  authDomain: "axis-bankproject.firebaseapp.com",
  databaseURL: "https://axis-bankproject-default-rtdb.firebaseio.com",
  projectId: "axis-bankproject",
  storageBucket: "axis-bankproject.appspot.com",
  messagingSenderId: "837146426300",
  appId: "1:837146426300:web:bf154f6447885a822ec9b9",
  measurementId: "G-GMPG65FHR6",
};
firebase.initializeApp(firebaseConfig);
//const analytics = analytics(app);
const auth = getAuth();

//login-code

document.getElementById("submit-login").addEventListener("click", function () {
  var email = document.getElementById("login_email").value;
  var password = document.getElementById("login_password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      alert(user.email + " Login successfully!!!");
      window.location.href = "landing-page.html";
      //  document.getElementById("logout").style.display = "block";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
});

//reference your database;

// Make sure you've initialized Firebase with your configuration before using Firebase features.

// document.addEventListener("DOMContentLoaded", function () {
//   const loginForm = document.getElementById("loginForm");

//   loginForm.addEventListener("submit", function (e) {
//     e.preventDefault(); // Prevent the form from submitting normally

//     // Get input values
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     // Assuming you have initialized Firebase properly
//     const db = firebase.firestore();

//     // Insert the data into Firebase
//     db.collection("users")
//       .add({
//         email: email,
//         password: password,
//       })
//       .then(function (docRef) {
//         console.log("Document written with ID: ", docRef.id);
//         // You can redirect or show a success message here
//       })
//       .catch(function (error) {
//         console.error("Error adding document: ", error);
//         // Handle error here
//       });
//   });
// });
