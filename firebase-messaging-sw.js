importScripts('https://www.gstatic.com/firebasejs/6.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.6.0/firebase-messaging.js');

var config = {
// apiKey: "AIzaSyAXK4Orxl2CghIQvKiUPtkhEngSgzteqE0",
apiKey: "AIzaSyB2cp3NFKPsVwkOeF_QT06Z0q8QBSI2Zpk",
// authDomain: "hello-world-pwa-8669c.firebaseapp.com",
authDomain: "email-app-7a375.firebaseapp.com",
// databaseURL: "https://hello-world-pwa-8669c.firebaseio.com",
databaseURL: "https://email-app-7a375.firebaseio.com",
// projectId: "hello-world-pwa-8669c",
projectId: "email-app-7a375",
// storageBucket: "hello-world-pwa-8669c.appspot.com",
storageBucket: "",
// messagingSenderId: "660239288739"
messagingSenderId: "175363988940",
appId: "1:175363988940:web:e1a99403e860eb139c9169"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
	const title = 'Hello World';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});