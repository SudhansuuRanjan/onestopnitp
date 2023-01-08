import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Logo from '../assets/onestopLogo.png'
import LoginImg from '../assets/login.png'

const SignIn = ({ navigation }) => {

    const { auth, authData, setAuth, setAuthData } = useContext(AuthContext);


    return (
        <View>

            <View style={styles.body}>
                <Text style={{ fontSize: 70, fontWeight: '900', marginTop: 120 }}>Hello<Text style={{ color: '#5ca1f7' }}>.</Text></Text>
                <Text style={{ fontSize: 70, fontWeight: '900' }}>There</Text>
                <Text style={{ fontSize: 20, fontWeight: '600', marginTop: 20 }}>Welcome to</Text>
                <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#5ca1f7' }}>OneStopNITP!</Text>

                <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 120, width: 250, textAlign: 'center', alignSelf: 'center' }}>Login to get Notes, Resources and more.</Text>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('SignIn');
                }}
                    style={[styles.button]}
                >
                    <Text style={styles.buttonLabel}>
                        Sign In with Google
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    setAuth(true);
                }}
                    style={[styles.button1]}
                >
                    <Text style={styles.buttonLabel1}>
                        Continue as Guest
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 36,
        backgroundColor:"white",
    },
    imgContainer: {
        alignSelf: 'center',
        marginTop: 80
    },
    image: {
        height: 220,
        width: 220
    },
    body: {
        paddingHorizontal: 25,
        paddingTop: 30
    },
    button: {
        paddingHorizontal: 45,
        paddingVertical: 13,
        borderRadius: 50,
        backgroundColor: '#5ca1f7',
        marginTop: 60
    },
    buttonLabel: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        fontWeight:'500'
    },
    button1: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginTop: 20
    },
    buttonLabel1: {
        color: '#889399',
        fontSize: 16,
        textAlign: 'center',
        fontWeight:'500'
    },
});

export default SignIn;
