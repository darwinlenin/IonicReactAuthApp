# Getting Started with Ionic-React Authorization App

This project is hosted in the Heroku cloud https://ionic-react-auth-app.herokuapp.com/.

## Demo prints and documentation

The app was builded with Capacitor Ionic and React integrated with Auth0 platform and hosted in Heroku cloud how SPA.
The binaries can be generated with capacitor with the following command to run in emulators on in real devices:

npx cap init --web-dir build --npm-client npm IonicReactAuthenticator org.darwinpalma.ionicreactauthapp
npx cap add android 
npx cap add ios
npx cap open android 
npx cap open ios  

You can run de app how a SPA also:

![Screenshots](https://github.com/darwinlenin/IonicReactAuthApp/tree/main/public/prints/WebSPA.png)

User profile with data of Twitch authentication service with Auth0:

![Screenshots](https://github.com/darwinlenin/IonicReactAuthApp/tree/main/public/prints/ProfileTab.png)

Main page user logged:

![Screenshots](https://github.com/darwinlenin/IonicReactAuthApp/tree/main/public/prints/LoggedMainPage.png)

Allow Authentication permission for the application:

![Screenshots](https://github.com/darwinlenin/IonicReactAuthApp/tree/main/public/prints/AuthorizationWindow.png)

User authenticated:

![Screenshots](https://github.com/darwinlenin/IonicReactAuthApp/tree/main/public/prints/AuthScreen.png)


In the project directory, you can run de .apk for android devices, and you can see the following application:

![Screenshots](https://github.com/darwinlenin/IonicReactAuthApp/tree/main/public/prints/AndroidApp.png)

In the project directory, you can run de .ipa for android devices, and you can see the following application:

![Screenshots](https://github.com/darwinlenin/IonicReactAuthApp/tree/main/public/prints/iOSApp.png?)