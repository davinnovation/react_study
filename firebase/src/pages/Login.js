import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {firebaseApp, firebase} from '../firebase';

var firebaseui = require('firebaseui');

const Login = () => {
    var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());

    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      signInSuccessUrl: '/chatroom',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
    };

    ui.start('#firebaseui-auth-container', uiConfig);
    
    return (
        <div>
            <h1>Welcome to My Awesome App</h1>
            <div id="firebaseui-auth-container"></div>
        </div>
    )
}

export default Login;