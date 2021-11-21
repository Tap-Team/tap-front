import React from 'react';
import firebase from './firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: "/",
    signInOptions: [
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    ],
}


const SignInScreen = (props) => {
    return (
        <div className="twitter-auth">
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    );
}
export default SignInScreen;