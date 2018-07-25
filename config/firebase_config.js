var env = 'prod';

if (location.hostname === "localhost" || location.hostname === "127.0.0.1"){
    alert("It's a local server!");
    env = 'test';
}

var config = '';

if(env == 'test'){
// Initialize Firebase Testing
  var config = {
    apiKey: "AIzaSyCSLZceImxi-lWBaRuiiNY7PMXHN1CPkT8",
    authDomain: "testgitjamming.firebaseapp.com",
    databaseURL: "https://testgitjamming.firebaseio.com",
    projectId: "testgitjamming",
    storageBucket: "",
    messagingSenderId: "262798964243"
  };
} else {
	// Initialize Firebase Prod
	var config = {
		apiKey: "AIzaSyDW_ceB5qjLJS9Nl8XZzNUi-LwzJoDq-Zg",
		authDomain: "gitjamming.firebaseapp.com",
		databaseURL: "https://gitjamming.firebaseio.com",
		projectId: "gitjamming",
		storageBucket: "",
		messagingSenderId: "749029395026"
	};
}


firebase.initializeApp(config);
