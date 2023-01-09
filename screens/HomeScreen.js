import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import FlexDirectionBasics from '../components/FlexDirectionBasics';
import Constants from 'expo-constants';
const Profile = require('../assets/profile.jpg')
const Notes = require('../assets/notes.png')
const LostFound = require('../assets/lostfound.png')
const Resources = require('../assets/resources.png')
const Clubs = require('../assets/club.png')
const Shopping = require('../assets/shopping.png')
const Blogs = require('../assets/blogs.png')


const HomeScreen = ({ navigation }) => {

    const [msg, setmsg] = useState("Good morning")

    useEffect(() => {
        let data = [
            [22, 'Working late'],
            [18, 'Good evening'],
            [12, 'Good afternoon'],
            [5, 'Good morning'],
            [0, 'Whoa, early bird']
        ],
            hr = new Date().getHours();
        for (var i = 0; i < data.length; i++) {
            if (hr >= data[i][0]) {
                setmsg(data[i][1]);
                break;
            }
        }
    }, [])


    return (
        <>
            {/* <FlexDirectionBasics/> */}
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.welcome}>
                        <Text style={styles.welcome1}>{msg}🌤️</Text>
                        <Text style={styles.welcome2}>Sudhanshu</Text>
                    </View>
                    <TouchableOpacity style={styles.imgContainer} onPress={() => navigation.navigate('Profile')}>
                        <Image source={Profile} style={styles.image} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.heading}>
                    Here are some things you can do
                </Text>
                <ScrollView contentContainerStyle={styles.row}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notes')}
                        style={[styles.button, { backgroundColor: '#F6DBB9' }]}
                    >
                        <Image source={Notes} style={styles.tabImage} />
                        <Text style={styles.buttonLabel}>
                            Notes
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('LostFound')}
                        style={[styles.button, { backgroundColor: '#EAC3CD' }]}
                    >
                        <Image source={LostFound} style={styles.tabImage} />
                        <Text style={styles.buttonLabel}>
                            Lost/Found
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Resources')}
                        style={[styles.button, { backgroundColor: '#96D5E1' }]}
                    >
                        <Image source={Resources} style={styles.tabImage} />
                        <Text style={styles.buttonLabel}>
                            Learn
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Clubs')}
                        style={[styles.button, { backgroundColor: '#9AD0BD' }]}
                    >
                        <Image source={Clubs} style={styles.tabImage} />
                        <Text style={styles.buttonLabel}>
                            Clubs
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('SellBuy')}
                        style={[styles.button, { backgroundColor: '#93D4C9' }]}
                    >
                        <Image source={Shopping} style={styles.tabImage} />
                        <Text style={styles.buttonLabel}>
                            Sell/Buy
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Blogs')}
                        style={[styles.button, { backgroundColor: '#FBD3CB' }]}
                    >
                        <Image source={Blogs} style={styles.tabImage} />
                        <Text style={styles.buttonLabel}>
                            Blogs
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    welcome1: {
        fontWeight: '700',
        fontSize: 15,
        color: '#3c4753'
    },
    welcome2: {
        fontSize: 27,
        color: '#3c4753',
        fontWeight: '600',
    },
    heading: {
        paddingHorizontal: 20,
        fontWeight: '500',
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
        paddingTop:20,
    },
    label: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
        color: '#333'
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginVertical: 20,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-evenly',
        paddingHorizontal: 8,
        paddingBottom: 50,
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 10,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 20,
        minWidth: "45%",
        textAlign: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 60,
    },
    imgContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    tabImage: {
        width: 100,
        height: 120,
    },
    buttonLabel: {
        fontWeight: '700',
        fontSize: 19,
        color: '#333',
        paddingVertical: 5,
        paddingHorizontal: 10
    },
})


export default HomeScreen