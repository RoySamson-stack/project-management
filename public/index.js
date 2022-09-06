const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDmOzvLfbJ74Ftv0QWQmdpoaE1LzNPUlo0",
  authDomain: "project-management-53eab.firebaseapp.com",
  projectId: "project-management-53eab",
  storageBucket: "project-management-53eab.appspot.com",
  messagingSenderId: "61242591551",
  appId: "1:61242591551:web:d1707b994cb68028d1ab8a"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  auth.createUserWithEmailAndPassword(email, password)
  .then((res) => {
      console.log(res.user)
  })
  .catch((err) => {
      alert(err.message)
      console.log(err.code)
      console.log(err.message)
  })
}

const login = () => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  auth.signInWithEmailAndPassword(email, password)
  .then((res) => {
      console.log(res.user)
      window.location = 'admin.html'

  })
  .catch((err) => {
      alert(err.message)
      console.log(err.code)
      console.log(err.message)
  })
}

const saveData = () => {
  const email = document.getElementById('email').value
  const name = document.getElementById('name').value
  const password = document.getElementById('password').value
  


  db.collection('users')
  .add({
      email: email,
      name:name,
      password: password
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      window.location = 'login.html'
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}

const readData = () => {
  db.collection('users')
  .get()
  .then((data) => {
      console.log(data.docs.map((item) => {
          return {...item.data(), id: item.id}
      }))
  })
}

const updateData = () => {
  db.collection('users').doc('rWXzfhHwgofbBO8u16JT')
  .update({
      email: 'ashishisagoodboy1234@gmail.com',
      password: '123456'
  })
  .then(() => {
      alert('Data Updated')
  })
}

const deleteData = () => {
  db.collection('users').doc('rWXzfhHwgofbBO8u16JT').delete()
  .then(() => {
      alert('Data Deleted')
  })
  .catch((err) =>{
      console.log(err)
  })
}

document.getElementById('createteam').addEventListener('click', saveTeam)

const saveTeam = () => {
  const name = document.getElementById('teamname').value
  const members = document.getElementById('teammembers').value


  db.collection('teams')
  .add({
      name:name,
      members: members
  })
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      console.log(name, members)
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
}