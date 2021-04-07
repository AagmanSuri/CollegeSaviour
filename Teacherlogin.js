
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
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
	
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		

		
		
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			
		
			//Take user to a different or home page
            window.location = 'Dashboard2.html';

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});