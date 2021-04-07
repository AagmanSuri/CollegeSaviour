




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
	
	

	
	

	
	
	function signOut(){
		
		auth.signOut();
		
		
	}
	
	

