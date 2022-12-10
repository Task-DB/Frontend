importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");

const config = {
  apiKey: "AIzaSyBgLr_rRGsbgKeZut1I8XbylTqOjL48w8E",
  authDomain: "taskdb-b4857.firebaseapp.com",
  projectId: "taskdb-b4857",
  storageBucket: "taskdb-b4857.appspot.com",
  messagingSenderId: "154549871574",
  appId: "1:154549871574:web:3b74493fba2d6811b4fa77",
  measurementId: "G-YQCYT69DYM",
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//   console.log("[firebase-messaging-sw.js] onBackgroundMessage ", payload);
//   const title = payload.notification.title;
//   const options = {
//     body: payload.notification.body,
//     icon: payload.notification.image,
//   };
//   return self.registration.showNotification(title, options);
// });
