import { View, Text, Modal, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useContext } from 'react'
const ProfileImg = require('../assets/profile.jpg')
import AuthContext from "../context/AuthContext";

const Profile = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false)

    const { auth, authData, setAuth, setAuthData } = useContext(AuthContext);

    return (
        <>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Do you want to LogOut?</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', paddingHorizontal: 20 }}>
                            <Pressable
                                style={{}}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={{ color: '#2196F3', fontWeight: '500', fontSize: 16, padding: 10, }}>No</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.modalbutton, styles.buttonClose]}
                                onPress={() => {
                                    setAuth(false);
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={styles.textStyle}>Yes</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={styles.container}>
                <Image source={ProfileImg} style={styles.image} />
                <View style={styles.detail1}>
                    <Text style={styles.name}>Sudhanshu Ranjan</Text>
                    <Text style={styles.about}>A tech enthusiast who is keen to develop new skills | Contact Me: sudhanshuranjan2k18@gmail.com</Text>
                    <Text style={styles.course}>BTech</Text>
                    <Text style={styles.branch}>EE 2021</Text>
                </View>
                <View style={styles.block}>
                    <Text style={styles.blockHeading}>Email</Text>
                    <Text style={styles.blockContent}>sudhanshuranjan2k18@gmail.com</Text>
                </View>
                <View style={styles.block}>
                    <Text style={styles.blockHeading}>College</Text>
                    <Text style={styles.blockContent}>NIT, Patna</Text>
                </View>
                <View style={styles.block}>
                    <Text style={styles.blockHeading}>Interest</Text>
                    <Text style={styles.blockContent}>Full Stack Development</Text>
                </View>

                <TouchableOpacity onPress={() => {
                    setModalVisible(true);
                }}
                    style={[styles.button]}
                >
                    <Text style={styles.buttonLabel}>
                        LogOut
                    </Text>
                </TouchableOpacity>


            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        alignSelf: 'center',
        marginTop: 20,
        height: 120,
        width: 120,
        borderRadius: 100
    },
    detail1: {
        marginTop: 20
    },
    name: {
        fontSize: 21,
        fontWeight: '600',
        color: "#3c4753",
        textAlign: 'center'
    },
    course: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500',
        color: '#333'
    },
    branch: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        color: '#333'
    },
    block: {
        backgroundColor: '#1111',
        marginHorizontal: 15,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 12,
        marginTop: 20
    },
    blockHeading: {
        color: '#3c4753',
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 17,
    },
    blockContent: {
        color: '#5ca1f7',
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 16,
    },
    button: {
        paddingHorizontal: 45,
        paddingVertical: 10,
        borderRadius: 15,
        backgroundColor: '#5ca1f7',
        marginTop: 80,
        alignSelf: 'center',
    },
    buttonLabel: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '500'
    },
    about: {
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5,
        color: '#3c4753',
        fontWeight: '500',
    },


    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#aaaa'
    },
    modalView: {
        height: 180,
        width: 280,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalbutton: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 18,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 40,
        textAlign: "center",
        fontWeight: '500',
        fontSize: 17,
    }
})

export default Profile