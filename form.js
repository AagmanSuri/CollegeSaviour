
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDw6hB2DFotDtiCcm4mx-9R-bG0erzhP7Q",
    authDomain: "project-9a95d.firebaseapp.com",
    projectId: "project-9a95d",
    storageBucket: "project-9a95d.appspot.com",
    messagingSenderId: "780279272958",
    appId: "1:780279272958:web:42d0bd661d46c093c69caf"
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

	function sendPasswordReset() {
		var auth = firebase.auth();
		// var emailAddress = "suriaagman@gmail.com";
		var emailAddress = document.getElementById("email");
		console.log(emailAddress.value);
		auth.sendPasswordResetEmail(emailAddress.value)
			.then(function () {
				// Email sent.
				alert("Reset link for email : "+emailAddress.value+" "+"has been sent.")
			})
			.catch(function (error) {
				// An error happened.
				console.log(error)
			});
	}
	
	
	
	auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			
		
			//Take user to a different or home page
            window.location = 'dashboard.html';

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
		
		
		
	});
	

