$.getScript('https://www.gstatic.com/firebasejs/8.0.0/firebase.js',function() {  
  

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
        const error_tab = document.getElementById('error')
      document.getElementById('login').addEventListener('click', GoogleLogin)
      document.getElementById('logout').addEventListener('click', LogoutUser)
      document.getElementById('github-login').addEventListener('click', githubSignin)
      document.getElementById('login-btn').addEventListener('click', emailsignIn)
      document.getElementById('anon-login').addEventListener('click', isAnonymous)
      document.getElementById('twitter-login').addEventListener('click', twitterSignin)

      const provider = new firebase.auth.GoogleAuthProvider()
      const  githubProvider = new firebase.auth.GithubAuthProvider();
      const twitterProvider = new firebase.auth.TwitterAuthProvider();
  
  
        var loginBtn = document.getElementById('login-btn')

        loginBtn.addEventListener('click', async e => {
        //     e.preventDefault();
        //     if( $('#email').val() != '' && $('#password').val() != '' ){
        //     //login the user
        //     var data = {
        //         email: $('#email').val(),
        //         password: $('#password').val()
        //     };
        //     try{
        //         const userCredential = await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
        //         let uid = userCredential.user.uid;
        //         var documents = await firebase.firestore().collection("users").doc(uid);
        //         documents.get().then(function(doc){
        //             if(doc.data['role'] = 'admin'){
        //                 window.location.href = "admin.html"; 
        //             }
        //             else if(doc.data['role'] = 'teamleader'){
        //                 window.location.href = "teamlead.html";  
        //             }                  
        //         });
        //     }    
        //     catch(err){
        //         console.log("Login Failed!", err);
        //         window.console.log("Login Failed!", err);
        //     }
        // }
        console.log('press')
  });
 
  const readData = () => {
    db.collection('users')
    .get()
    .then((data) => {
        console.log(data.docs.map((item) => {
            return {...item.data(), id: item.id}
        }))
    })
  }


  const guideList = document.querySelector('.guides');
  const loggedOutLinks = document.querySelectorAll('.logged-out');
  const loggedInLinks = document.querySelectorAll('.logged-in');
  const accountDetails = document.querySelector('.account-details');
  
  const setupUI = (user) => {
    if (user) {
      // account info
      const html = `
        <div>Logged in as ${user.email}</div>
      `;
      accountDetails.innerHTML = html;
      // toggle user UI elements
      loggedInLinks.forEach(item => item.style.display = 'block');
      loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
      // clear account info
      accountDetails.innerHTML = '';
      // toggle user elements
      loggedInLinks.forEach(item => item.style.display = 'none');
      loggedOutLinks.forEach(item => item.style.display = 'block');
    }
  };
        function GoogleLogin(){
          // const user = firebase.auth().currentUser.displayName;
          console.log('Login Btn Call')
          firebase.auth().signInWithPopup(provider).then(res=>{
            console.log(user)
            // document.getElementById('LoginScreen').style.display="none"
            // document.getElementById('dashboard').style.display="block"
            showUserDetails(user)
            window.location = 'customer.html'
          }).catch(e=>{
            console.log(e)
          })
        }

        const profilePg = document.querySelector('.recent_project')
        function showUserDetails(user){
          // document.querySelector('.recent_project').innerHTML = 
          //   <div>Name:${user.email}</div>
          //   <div>password:${user.password}</div>
          let div = document.createElement('div')
          let input = document.createElement('input')
          input.textContent = user.email
          input.textContent = user.password
          console.log(user.email)

          div.appendChild(input)

          profilePg.appendChild(div)
        }
  
        function checkAuthState(){
          firebase.auth().onAuthStateChanged(user=>{
            if(user){
              // document.getElementById('LoginScreen').style.display="none"
              // document.getElementById('dashboard').style.display="block"
              // showUserDetails(user)
              setupUI(user)
            }else{
              setupUI()
            }
          })
        }
  
        function LogoutUser(){
          console.log('Logout Btn Call')
          firebase.auth().signOut().then(()=>{
            document.getElementById('LoginScreen').style.display="block"
            document.getElementById('dashboard').style.display="none"
          }).catch(e=>{
            console.log(e)
          })
        }
        function githubSignin(){
          // const user = firebase.auth().currentUser.displayName

          console.log('github btn')
          firebase.auth().signInWithPopup(githubProvider).then(res=>{
            console.log(user)
            document.getElementById('LoginScreen').style.display="none"
            document.getElementById('dashboard').style.display="block"
            showUserDetails(user)
            window.location = 'customer.html'
          }).catch(e=>{
            error_tab.innerHTML = error.message
            console.log(e)
          })
        }
    
      firebase.auth().onAuthStateChanged(function(user) {
        console.log(user.email)
        if (user) {
          // User is signed in.
          firebase.firestore().collection("users").onSnapshot(snapshot =>{
            console.log(user.email)
          })
        } else {
          // User is signed out.
          console.log("not logged in")
          // ...
        }
      });
      function githubSignout(){
         firebase.auth().signOut()
         .then(function() {
            console.log('Signout successful!')
         }, function(error) {
          error_tab.innerHTML = error.message
            console.log('Signout failed')
         });
      }
  
  function getUser(user){
    console.log(user.email)
  }
    function twitterSignin(){
      // const user = firebase.auth().currentUser.displayName

      console.log('twitter btn')
          firebase.auth().signInWithPopup(twitterProvider).then(res=>{
            console.log(user)
            document.getElementById('LoginScreen').style.display="none"
            document.getElementById('dashboard').style.display="block"
            showUserDetails(user)
            window.location = 'customer.html'
          }).catch(e=>{
            error_tab.innerHTML = error.message

            console.log(e)
          })
      }
      
      
      
      function emailsignIn(){
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        // firebase code
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                // Signed in 
                document.write("You are Signed In")
                console.log(result)
                window.location = 'customer.html'

            })
            .catch((error) => {
              error_tab.innerHTML = error.message

                console.log(error.code);
                console.log(error.message)
            });
    }

  function isAnonymous(){
    firebase.auth().signInAnonymously()
    .then(() => {
      // Signed in..
      window.location = 'admin.html'
      consolelog(success)
    })
    .catch((error) => {
      error_tab.innerHTML = error.message

      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
  }
   
   checkAuthState()
  
   let sidebar = document.querySelector(".sidebar");
   let closeBtn = document.querySelector("#btn");
  
   closeBtn.addEventListener("click", () => {
     sidebar.classList.toggle("open");
     // call function
     changeBtn();
   });
  
   function changeBtn() {
     if(sidebar.classList.contains("open")) {
       closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
     } else {
       closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
     }
   }




  
  // setup materialize components
  document.addEventListener('DOMContentLoaded', function() {
  
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });


getUser()  
})