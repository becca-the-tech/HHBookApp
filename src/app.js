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
    const signupButton = document.getElementById("logout");


    loginButton.addEventListener('click', ()=>{
        const email = emailInput.value;
        const password = passwordInput.value;
        const auth = firebase.auth();

        auth.signInWithEmailAndPassword(email,password)
          .then(user => window.open("home.html","_self") )
          .catch(e => {
            //TODO show error message
            console.log(e.message);
          });
    });

    signupButton.addEventListener('click', ()=>{
      const email = emailInput.value;
      const password = passwordInput.value;
      const auth = firebase.auth();

      auth.createUserWithEmailAndPassword(email,password)
        .catch(e => {
          console.log(e.message)
          window.location.href("error.html");
        });
    });

    firebase.auth().onAuthStateChanged(firebaseUser =>{
      if (firebaseUser){
        console.log(firebaseUser);
        window.open("home.html","_self");
      }else {
        console.log("not Logged in ");
      }
    });

}());
