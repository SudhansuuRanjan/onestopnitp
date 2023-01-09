import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const ProfileImg = require('../assets/profile.jpg');
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/Ionicons';


const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return <TouchableOpacity style={{ paddingVertical: 5 }} onPress={handlePress} >{children}</TouchableOpacity>;
};


function AllPostScreen() {
    return (
        <View style={{ flex: 1,backgroundColor:'white' }}>
            <ScrollView>
                <View style={styles.postContainer}>
                    <View style={styles.profile}>
                        <Image source={ProfileImg} style={styles.profileImg} />
                        <View>
                            <Text style={styles.profileName}>Sudhanshu Ranjan</Text>
                            <View style={styles.postDetail}>
                                <Text style={{ color: 'gray', fontSize: 14 }}>Jan 08, 2023</Text>
                                <Icon name="dot-single" style={{ marginHorizontal: 5 }} size={10} color='grey' />
                                <Text style={{ color: 'gray', fontSize: 14 }}>4 min read ✨</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.horizontalRule} />

                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Image</Text>
                        <Image source={ProfileImg} style={styles.lostItem} />

                        <Text style={styles.title}>Details</Text>
                        <Text style={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam incidunt eos corporis nihil quia, maiores fugiat omnis quas fuga voluptatibus aut labore illum eaque perferendis dolor, ad dolorum? Minus, facilis esse omnis aspernatur recusandae minima, error ipsam voluptate itaque blanditiis voluptatem doloribus ducimus earum repellendus.</Text>

                        <Text style={styles.title}>Contact Info</Text>

                        <View style={styles.socialLink}>
                            <Icon1 name="logo-whatsapp" style={{ paddingRight: 10 }} size={22} color='grey' />
                            <OpenURLButton url="tel:+917352304847">
                                <Text style={{ color: '#0034BA', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>+917352304847</Text>
                            </OpenURLButton>
                        </View>

                        <View style={styles.socialLink}>
                            <Icon1 name="md-call" style={{ paddingRight: 10 }} size={22} color='grey' />
                            <OpenURLButton url="tel:+919006751129">
                                <Text style={{ color: '#0034BA', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>+919006751129</Text>
                            </OpenURLButton>
                        </View>

                        <View style={styles.socialLink}>
                            <Icon1 name="mail-outline" style={{ paddingRight: 10 }} size={22} color='grey' />
                            <OpenURLButton url="mailto:contact_nitp@ieeenitp.com">
                                <Text style={{ color: '#0034BA', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>sudhanshur.ug20.ee@nitp.ac.in</Text>
                            </OpenURLButton>
                        </View>
                    </View>

                </View>



                
            </ScrollView>
        </View>
    );
}


function FoundPostScreen() {
    return (
        <View style={{ flex: 1,backgroundColor:'white' }}>
             <View style={styles.postContainer}>

                    <View style={styles.profile}>
                        <Image source={ProfileImg} style={styles.profileImg} />
                        <View>
                            <Text style={styles.profileName}>Sudhanshu Ranjan</Text>
                            <View style={styles.postDetail}>
                                <Text style={{ color: 'gray', fontSize: 14 }}>Jan 08, 2023</Text>
                                <Icon name="dot-single" style={{ marginHorizontal: 5 }} size={10} color='grey' />
                                <Text style={{ color: 'gray', fontSize: 14 }}>4 min read ✨</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.horizontalRule} />

                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Image</Text>
                        <Image source={ProfileImg} style={styles.lostItem} />

                        <Text style={styles.title}>Details</Text>
                        <Text style={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam incidunt eos corporis nihil quia, maiores fugiat omnis quas fuga voluptatibus aut labore illum eaque perferendis dolor, ad dolorum? Minus, facilis esse omnis aspernatur recusandae minima, error ipsam voluptate itaque blanditiis voluptatem doloribus ducimus earum repellendus.</Text>

                        <Text style={styles.title}>Contact Info</Text>

                        <View style={styles.socialLink}>
                            <Icon1 name="logo-whatsapp" style={{ paddingRight: 10 }} size={22} color='grey' />
                            <OpenURLButton url="tel:+917352304847">
                                <Text style={{ color: '#0034BA', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>+917352304847</Text>
                            </OpenURLButton>
                        </View>

                        <View style={styles.socialLink}>
                            <Icon1 name="md-call" style={{ paddingRight: 10 }} size={22} color='grey' />
                            <OpenURLButton url="tel:+919006751129">
                                <Text style={{ color: '#0034BA', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>+919006751129</Text>
                            </OpenURLButton>
                        </View>

                        <View style={styles.socialLink}>
                            <Icon1 name="mail-outline" style={{ paddingRight: 10 }} size={22} color='grey' />
                            <OpenURLButton url="mailto:contact_nitp@ieeenitp.com">
                                <Text style={{ color: '#0034BA', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>sudhanshur.ug20.ee@nitp.ac.in</Text>
                            </OpenURLButton>
                        </View>

                    </View>

                </View>
        </View>
    );
}

function UserPostScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
            <Text>You haven't written any posts.</Text>
        </View>
    );
}


const Tab = createMaterialTopTabNavigator();

const LostFound = ({ navigation }) => {

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 13, fontWeight: '500' },
                    tabBarStyle: { backgroundColor: 'white' },
                    tabBarIndicatorStyle: {
                        backgroundColor: '#5ca1f7'
                    }
                }}
            >
                <Tab.Screen name="Lost" component={AllPostScreen} />
                 <Tab.Screen name="Found" component={FoundPostScreen} />
                <Tab.Screen name="Your Posts" component={UserPostScreen} />
            </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
        marginHorizontal: 10,
        marginVertical: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImg: {
        height: 38,
        width: 38,
        borderRadius: 30,
        marginRight: 10,
    },
    profileImgSm: {
        height: 50,
        width: 50,
        borderRadius: 60,
        marginRight: 25,
    },
    profileName: {
        fontSize: 16,
        fontWeight: '500'
    },
    postDetail: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    horizontalRule: {
        height: 1,
        backgroundColor: '#1111',
        marginVertical: 10,
        paddingHorizontal: 5,
    },
    lostItem: {
        height: 240,
        borderRadius: 5,
        marginVertical: 5,
        width: '100%'
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
        color: "#3c4753",
        paddingVertical: 5,
    },
    text: {
        color: '#666',
    },
    socialLink: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})

export default LostFound