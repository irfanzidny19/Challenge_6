import {View, Text, TextInput, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TouchID from 'react-native-touch-id';
import ButtonNavigator from '../../router/mainRoutes';

// import FirebaseUtil from '../../utils/FirebaseUtil';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {LoginButton, AccessToken} from 'react-native-fbsdk-next';

GoogleSignin.configure({
  webClientId:
    '719105775509-d4149mbgsmt0b63athth56ukd7c71c98.apps.googleusercontent.com',
});

// Settings.setAppID('394374779238991');

function onFingerPrintPress() {
  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };

  TouchID.authenticate(
    'to demo this react-native component',
    optionalConfigObject,
  )
    .then(success => {
      console.log(success);
      alert('Authenticated Successfully, Signed in with Fingerprint!');
    })
    .catch(error => {
      console.log(error);
      alert('Authentication Failed');
    });
}

const _signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);
  } catch (error) {
    console.log(error);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};
export default function Login(props) {
  // Login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // SignUp
  const [create, setCreate] = useState(false);

  const signIn = () => {
    FirebaseUtil.signIn(email, password).catch(e =>
      alert('password email salah'),
    );
  };
  const signUp = () => {};

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#454e4f',
        justifyContent: 'center',
        padding: 20,
      }}>
      <View>
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          style={{
            borderWidth: 1,
            borderColor: 'grey',
            padding: 10,
            marginBottom: 20,
            marginTop: 100,
            borderRadius: 5,
          }}
        />

        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          style={{
            borderWidth: 1,
            borderColor: 'grey',
            padding: 10,
            marginBottom: 20,

            borderRadius: 5,
          }}
          secureTextEntry={true}
        />
        {create ? (
          <>
            <Button title="Sign In" onPress={() => signUp()} />
            <Text
              style={{
                color: 'yellow',
                marginTop: 20,
              }}
              onPress={() => setCreate(false)}>
              signIn
            </Text>
          </>
        ) : (
          <>
            <Button title="Sign In" onPress={() => signIn()} />
            <Text
              style={{
                color: 'yellow',
                marginTop: 20,
              }}
              onPress={() => setCreate(true)}>
              Create Account
            </Text>
          </>
        )}
        {/* <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text>App</Text>
        </TouchableOpacity> */}
      </View>
      <View style={{marginTop: 200}}>
        <GoogleSigninButton
          style={{width: 300, height: 50, alignSelf: 'center'}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={_signIn}
          // disabled={this.state.isSigninInProgress}
        />
        <LoginButton
          style={{width: 300, height: 40, alignSelf: 'center', marginTop: 10}}
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(data => {
                console.log(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        />
        <View style={{marginTop: 10}}>
          <Button title="Fingerprint" onPress={() => onFingerPrintPress()} />
        </View>
      </View>
    </View>
  );
}
