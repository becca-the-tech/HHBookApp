(function () {
    const config = {
        apiKey: "AIzaSyAuSrIHSTQrQaVKaucrlME5KtBH8enZD5E",
        authDomain: "hobbyhack2020.firebaseapp.com",
        databaseURL: "https://hobbyhack2020.firebaseio.com",
        projectId: "hobbyhack2020",
        storageBucket: "hobbyhack2020.appspot.com",
        messagingSenderId: "566065888514",
        appId: "1:566065888514:web:351867c85be378a89f561b"
    };
    firebase.initializeApp(config);

    const emailInput =document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("loginbutton");
    const logoutButton = document.getElementById("logout");
    const signupButton = document.getElementById("logout");


    loginButton.addEventListener('click', e=>{
        const email = emailInput.value;
        const password = passwordInput.value;
        const auth = fire
    })

}());
