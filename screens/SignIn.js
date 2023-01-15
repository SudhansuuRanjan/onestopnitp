import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignIn = ({ navigation }) => {

    const [initializing, setInitializing] = useState(true);
    const [users, setUsers] = useState([]);
    const { authorized, user, setAuthorized, setUser } = useContext(AuthContext);

    GoogleSignin.configure({
        webClientId: '135954330209-jv6rgfgo09130oi89rc470tua14hsk2h.apps.googleusercontent.com',
    });

    const userRef = firestore().collection("Users");

    useEffect(() => {
        userRef.onSnapshot((querySnapshot) => {
            const users = [];
            querySnapshot.forEach((doc) => {
                const { Email, Name, displayImg,about } = doc.data();
                users.push({
                    id: doc.id,
                    Email,
                    Name,
                    displayImg,
                    about,
                });
            });
            setUsers(users);
            // console.log(users);
        });
    }, []);


    async function addUser(loggedinUser) {
        const snapshot = await userRef.where('Email', '==', loggedinUser.email).get();

        if (snapshot.empty) {
            const data = {
                Name: loggedinUser.displayName,
                Email: loggedinUser.email,
                displayImg: loggedinUser.photoURL,
                createdAt: firestore.Timestamp.fromDate(new Date()),
                uid: loggedinUser.uid,
                about:"",
            };
            userRef
                .add(data)
                .then(() => {
                    console.log("User Added");
                })
                .catch((error) => {
                    alert(error);
                });
        }


    }


    function onAuthStateChanged(user) {
        // setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    const onGoogleButtonPress = async () => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const user_sign_in = auth().signInWithCredential(googleCredential);
        user_sign_in.then((user) => {
            // console.log(user);
            setUser(user.user);
            addUser(user.user);
            setAuthorized(true);
        })
            .catch((error) => {
                console.log(error);
            })
    }

    const signOut = async () => {
        setUser(null);
        try {
            await GoogleSignin.revokeAccess();
            await auth().signOut();
            await setAuthorized(false);
        } catch (error) {
            console.log(error);
        }
    }

    if (initializing) return null;

    return (
        <View style={styles.body}>

            <ScrollView>
                <Text style={{ fontSize: 70, fontWeight: '900', marginTop: 80 }}>Hello<Text style={{ color: '#5ca1f7' }}>.</Text></Text>
                <Text style={{ fontSize: 70, fontWeight: '900' }}>There</Text>
                <Text style={{ fontSize: 20, fontWeight: '600', marginTop: 20 }}>Welcome to</Text>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#5ca1f7' }}>OneStopNITP!</Text>

                <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 120, width: 250, textAlign: 'center', alignSelf: 'center' }}>Login to get Notes, Resources and more.</Text>


                <GoogleSigninButton
                    style={{ width: "90%", height: 55, marginTop: 50, alignSelf: 'center' }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={onGoogleButtonPress}
                />

                <TouchableOpacity onPress={() => {
                    setAuthorized(true);
                }}
                    style={[styles.button1]}
                >
                    <Text style={styles.buttonLabel1}>
                        Continue as Guest
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    text: {
        fontSize: 23,
        fontWeight: 'bold'
    },
    body: {
        paddingHorizontal: 25,
        paddingTop: 30,
        flex: 1,
    },
    button1: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginTop: 40
    },
    buttonLabel1: {
        color: '#889399',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500'
    },
});

export default SignIn;
