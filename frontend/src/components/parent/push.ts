
// import {
//     Plugins,
//     PushNotification,
//     PushNotificationToken,
//     PushNotificationActionPerformed
// } from '@capacitor/core';

// const { PushNotifications } = Plugins;

export const registerPush = () => {

    // // Register with Apple / Google to receive push via APNS/FCM
    // PushNotifications.register();

    // // On succcess, we should be able to receive notifications
    // PushNotifications.addListener('registration',
    //     (token: PushNotificationToken) => {
    //         alert('Push registration success, token: ' + token.value);
    //     }
    // );

    // // Some issue with our setup and push will not work
    // PushNotifications.addListener('registrationError',
    //     (error: any) => {
    //         alert('Error on registration: ' + JSON.stringify(error));
    //     }
    // );

    // // Show us the notification payload if the app is open on our device
    // PushNotifications.addListener('pushNotificationReceived',
    //     (notification: PushNotification) => {
    //         alert('Push received: ' + JSON.stringify(notification));
    //     }
    // );

    // // Method called when tapping on a notification
    // PushNotifications.addListener('pushNotificationActionPerformed',
    //     (notification: PushNotificationActionPerformed) => {
    //         alert('Push action performed: ' + JSON.stringify(notification));
    //     }
    // );
}