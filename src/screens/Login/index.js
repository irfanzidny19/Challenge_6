import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AccessToken, LoginButton} from 'react-native-fbsdk-next';
import Icon from 'react-native-vector-icons/FontAwesome';
import {firebase} from '@react-native-firebase/auth';
import TouchID from 'react-native-touch-id';
import Buttonn from '../../components/Button';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    const body = {
      email: email,
      password: password,
    };
    console.log('form:', body);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('success: ', res);

        navigation.navigate('MainApp', {
          email: res.user.email,
        });
      })
      .catch(err => console.log('error: ', err));
  };

  GoogleSignin.configure({
    webClientId:
      '973985605184-atf8ueaj79osgu9s2i3dr4j43brc6v4t.apps.googleusercontent.com',
  });

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

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log('user: ', user);
        TouchID.authenticate('to demo this react-native component')
          .then(success => {
            console.log(success);
            alert('Login Sukses');
            navigation.replace('MainApp');
          })
          .catch(error => {
            console.log(error);
            alert('Login Gagal');
          });
      }
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.email}
        placeholder="E-mail"
        placeholderTextColor={'grey'}
        selectionColor={'grey'}
        onChangeText={text => {
          setEmail(text);
        }}
      />

      <TextInput
        style={styles.password}
        placeholder="Password"
        placeholderTextColor={'grey'}
        selectionColor={'grey'}
        secureTextEntry={true}
        onChangeText={text => {
          setPassword(text);
        }}
      />

      <View style={styles.LoginButton}>
        <Button title={'Login'} onPress={login} />
      </View>

      <GoogleSigninButton
        style={styles.GoogleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={_signIn}
      />

      <LoginButton
        style={styles.FacebookButton}
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

      {/* <Button title="Fingerprint" onPress={() => onFingerPrintPress()} /> */}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 20,
  },

  email: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 20,
    marginTop: 70,
    borderRadius: 5,
    color: 'white',
  },
  password: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 20,
    color: 'white',
    borderRadius: 5,
  },
  LoginButton: {
    marginTop: 30,
    width: 300,
    alignSelf: 'center',
  },
  GoogleButton: {
    marginTop: 10,
    marginLeft: 30,
  },
  FacebookButton: {
    width: 303,
    height: 45,
    alignSelf: 'center',
    marginTop: 10,
    // marginLeft: 5,
  },
});
