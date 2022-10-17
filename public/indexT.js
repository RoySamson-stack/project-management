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

      // document.getElementById('login').addEventListener('click', GoogleLogin)
      // document.getElementById('logout').addEventListener('click', LogoutUser)
      // document.getElementById('github-login').addEventListener('click', githubSignin)
      // document.getElementById('login-btn').addEventListener('click', emailsignIn)
      // document.getElementById('anon-login').addEventListener('click', isAnonymous)
      // document.getElementById('twitter-login').addEventListener('click', twitterSignin)

      const provider = new firebase.auth.GoogleAuthProvider()
      const  githubProvider = new firebase.auth.GithubAuthProvider();
      const twitterProvider = new firebase.auth.TwitterAuthProvider();
  
  
        var loginBtn = document.getElementById('login-btn')

        loginBtn.addEventListener('click', async e => {
            e.preventDefault();
            if( $('#email').val() != '' && $('#password').val() != '' ){
            //login the user
            var data = {
                email: $('#email').val(),
                password: $('#password').val()
            };
            try{
                const userCredential = await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
                let uid = userCredential.user.uid;
                var documents = await firebase.firestore().collection("teams").doc(uid);
                documents.get().then(function(doc){
                        window.location.href = "admin.html"; 
                    
                    
                });
            }    
            catch(err){
                console.log("Login Failed!", err);
                window.console.log("Login Failed!", err);
            }
        }
        console.log('press')
  });

  
  
        // function showUserDetails(user){
        //   document.getElementById('user_wrapper').innerHTML = `
        //     <p>Name:${user}</p>

        //   ```
        //   console.log(user.name)
        // }
  
        function checkAuthState(){
          firebase.auth().onAuthStateChanged(user=>{
            if(user){
              document.getElementById('LoginScreen').style.display="none"
              document.getElementById('dashboard').style.display="block"
              // showUserDetails(user)
            }else{
  
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
        } else {
          // User is signed out.
          // ...
        }
      });
      function githubSignout(){
         firebase.auth().signOut()
         .then(function() {
            console.log('Signout successful!')
         }, function(error) {
            console.log('Signout failed')
         });
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
                console.log(error.code);
                console.log(error.message)
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


 $(document).ready(function(){
              // teams js code
              firebase.firestore().collection('teams').get().then((snapshot) => {
                            snapshot.docs.forEach(doc => {
                                renderAccount(doc);
                            })
                        })

                        const teamList = document.querySelector('#tbl_teamss_list') ;
                        function renderAccount(doc){
                            let tr = document.createElement('tr');
                            let td_email = document.createElement('td');
                            let td_full_name = document.createElement('td');
                            let td_uni_id = document.createElement('td');

                            tr.setAttribute('data-id', doc.id);
                            td_email.textContent = doc.data().teamname;
                            td_full_name.textContent = doc.data().teamlead;
                            td_uni_id.textContent = doc.data().teammembers;

                            tr.appendChild(td_email);
                            tr.appendChild(td_full_name);
                            tr.appendChild(td_uni_id);
                            // tr.appendChild(td_uni_id)

                            teamList.appendChild(tr);

                        }
            })


})