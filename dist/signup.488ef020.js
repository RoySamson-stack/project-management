$.getScript('"https://www.gstatic.com/firebasejs/8.0.0/firebase.js', function() {
    // Your web app's Firebase configuration
    var config = {
        apiKey: "AIzaSyDmOzvLfbJ74Ftv0QWQmdpoaE1LzNPUlo0",
        authDomain: "project-management-53eab.firebaseapp.com",
        databaseURL: "https://project-management-53eab-default-rtdb.firebaseio.com",
        projectId: "project-management-53eab",
        storageBucket: "project-management-53eab.appspot.com",
        messagingSenderId: "61242591551",
        appId: "1:61242591551:web:d1707b994cb68028d1ab8a"
    };
    firebase.initializeApp(config);
    // document.getElementById('dashboard').style.display="block"
    document.getElementById("login").addEventListener("click", GoogleLogin);
    // document.getElementById('logout').addEventListener('click', LogoutUser)
    document.getElementById("github-login").addEventListener("click", githubSignin);
    document.getElementById("login-btn").addEventListener("click", emailSignin);
    document.getElementById("anon-login").addEventListener("click", isAnonymous);
    document.getElementById("twitter-login").addEventListener("click", twitterSignin);
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const provider = new firebase.auth.GoogleAuthProvider();
    const githubProvider = new firebase.auth.GithubAuthProvider();
    const twitterProvider = new firebase.auth.TwitterAuthProvider();
    var loginBtn = document.getElementById("login-btn");
    loginBtn.addEventListener("click", async (e)=>{
        e.preventDefault();
        if ($("#email").val() != "" && $("#password").val() != "") {
            //login the user
            var data = {
                email: $("#email").val(),
                password: $("#password").val()
            };
            try {
                const userCredential = await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
                let uid = userCredential.user.uid;
                var documents = await firebase.firestore().collection("users").doc(uid);
                documents.get().then(function(doc) {
                    doc.data["role"] = "admin";
                    window.location.href = "admin.html";
                });
            } catch (err) {
                console.log("Login Failed!", err);
                window.alert("Login Failed!", err);
            }
        }
    });
    const readData = ()=>{
        db.collection("users").get().then((data)=>{
            console.log(data.docs.map((item)=>{
                return {
                    ...item.data(),
                    id: item.id
                };
            }));
        });
    };
    function GoogleLogin() {
        console.log("Login Btn Call");
        firebase.auth().signInWithPopup(provider).then((res)=>{
            console.log(res.user);
            // document.getElementById('LoginScreen').style.display="none"
            // document.getElementById('dashboard').style.display="block"
            // showUserDetails(res.user)
            console.log(res.user);
            window.location = "admin.html";
        }).catch((e)=>{
            console.log(e);
        });
    }
    function showUserDetails(user) {
        document.getElementById("user_wrapper").innerHTML = `
            <p>Name: ${user.name}</p>


          `;
        console.log(user.name);
    }
    function checkAuthState() {
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                document.getElementById("LoginScreen").style.display = "none";
                document.getElementById("dashboard").style.display = "block";
                showUserDetails(user);
            }
        });
    }
    function LogoutUser() {
        console.log("Logout Btn Call");
        firebase.auth().signOut().then(()=>{
            document.getElementById("LoginScreen").style.display = "block";
            document.getElementById("dashboard").style.display = "none";
        }).catch((e)=>{
            console.log(e);
        });
    }
    function githubSignin() {
        console.log("github btn");
        firebase.auth().signInWithPopup(githubProvider).then((res)=>{
            console.log(res.user);
            document.getElementById("LoginScreen").style.display = "none";
            document.getElementById("dashboard").style.display = "block";
            showUserDetails(res.user);
            window.location = "admin.html";
        }).catch((e)=>{
            console.log(e);
        });
    }
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
        // ...
        }
    });
    function githubSignout() {
        firebase.auth().signOut().then(function() {
            console.log("Signout successful!");
        }, function(error) {
            console.log("Signout failed");
        });
    }
    function twitterSignin() {
        console.log("twitter btn");
        firebase.auth().signInWithPopup(twitterProvider).then((res)=>{
            console.log(res.user);
            document.getElementById("LoginScreen").style.display = "none";
            document.getElementById("dashboard").style.display = "block";
            showUserDetails(res.user);
            window.location = "admin.html";
        }).catch((e)=>{
            console.log(e);
        });
    }
    function emailSignin() {
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const emailVal = email.value;
        const passwordVal = password.value;
        //Built in firebase function responsible for authentication
        firebase.auth().signInWithEmailAndPassword(emailVal, passwordVal).then(()=>{
            //Signed in successfully
            window.location = "admin.html";
            console.log(emailVal);
        }).catch((error)=>{
            //Something went wrong
            console.error(error);
        });
    }
    function isAnonymous() {
        firebase.auth().signInAnonymously().then(()=>{
            // Signed in..
            window.location = "admin.html";
            consolelog(success);
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
        // ...
        });
    }
    checkAuthState();
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    closeBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("open");
        // call function
        changeBtn();
    });
    function changeBtn() {
        if (sidebar.classList.contains("open")) closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        else closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
});

//# sourceMappingURL=signup.488ef020.js.map
