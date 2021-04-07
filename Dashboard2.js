




  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDpcsXvZu_IleiVqYMmdH7cqTUP6JWX9MI",
    authDomain: "teacher-5d8ee.firebaseapp.com",
    projectId: "teacher-5d8ee",
    storageBucket: "teacher-5d8ee.appspot.com",
    messagingSenderId: "815082225938",
    appId: "1:815082225938:web:017ed3c781320e601773cb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const auth = firebase.auth();
	
	

	
	

	
	
	function signOut(){
		
		auth.signOut();
		
		
	}
	
	

