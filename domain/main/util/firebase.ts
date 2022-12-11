import firebase from "firebase";
import { getMyQuestionData } from "../../my/api";

export async function getToken() {
  if (firebase.messaging.isSupported() === false) {
    return null;
  }

  getMyQuestionData().then((response) => {
    console.log(response);
    localStorage.setItem("userId", "1");
  });

  const messaging = firebase.messaging();

  const token = await messaging
    .requestPermission()
    .then(function () {
      return messaging.getToken();
    })
    .then(function (token) {
      messaging.onMessage((payload) => {
        alert(payload.notification.body);
      });
      return token;
    })
    .catch(function (err) {
      console.debug("에러 : ", err);
      return null;
    });

  return token;
}
