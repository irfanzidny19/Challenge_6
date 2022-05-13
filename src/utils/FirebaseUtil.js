import auth from '@react-native-firebase/auth';

export default class FirebaseUtil {
    public static signIn = (email: String, password: string) => {
       return auth().signInWithEmailAndPassword(email, password)
    }
    public static signUp = (email: String, password: string) => {
       return auth().createUserWithEmailAndPassword(email, password)
    }
}