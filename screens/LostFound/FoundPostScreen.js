import {
    View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Linking, ActivityIndicator, Alert
} from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import Icon1 from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';


const getDate = (Timestamp) => {
    const date = new Date(Timestamp.seconds * 1000);
    return date.toDateString() + " " + date.toLocaleTimeString()
}


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



const FoundPostScreen = () => {

    const [posts, setPosts] = useState();
    const [loading, setLoading] = useState(true);

    const postRef = firestore().collection("LostFound");

    useEffect(() => {
        postRef.where('type', '==', 'Found').onSnapshot((querySnapshot) => {
            const posts = [];
            querySnapshot.forEach((doc) => {
                posts.push(doc.data());
            });

            setPosts(posts);
            setLoading(false);
            // console.log(posts);
        });
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            {
                loading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#5ca1f7" />
                </View> :

                    <ScrollView>

                        {
                            posts.map((post, index) => (
                                <View style={styles.postContainer} key={index}>
                                    <View style={styles.profile}>
                                        <Image source={{ uri: post.user.photoUrl }} style={styles.profileImg} />
                                        <View>
                                            <Text style={styles.profileName}>{post.user.displayName}</Text>
                                            <View style={styles.postDetail}>
                                                <Text style={{ color: 'gray', fontSize: 14 }}>{getDate(post.createdAt)}</Text>
                                                {/* <Icon name="dot-single" style={{ marginHorizontal: 5 }} size={10} color='grey' />
                                                <Text style={{ color: 'gray', fontSize: 14 }}>4 min read ✨</Text> */}
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.horizontalRule} />

                                    <View style={styles.textContainer}>
                                        <Text style={styles.title}>Image</Text>
                                        <Image source={{ uri: post.img }} style={styles.lostItem} />

                                        <Text style={styles.title}>Details</Text>
                                        <Text style={styles.textPara}>{post.description}</Text>

                                        <Text style={styles.title}>Contact Info</Text>

                                        {
                                            post.whatsappNo !== "" &&
                                            <View style={styles.socialLink}>
                                                <Icon1 name="logo-whatsapp" style={{ paddingRight: 10 }} size={22} color='grey' />
                                                <OpenURLButton url={"tel:" + post.whatsappNo}>
                                                    <Text style={{ color: '#0034BA', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>{post.whatsappNo}</Text>
                                                </OpenURLButton>
                                            </View>
                                        }

                                        {
                                            post.mobileNo !== "" &&
                                            <View style={styles.socialLink}>
                                                <Icon1 name="md-call" style={{ paddingRight: 10 }} size={22} color='grey' />
                                                <OpenURLButton url={"tel:" + post.mobileNo}>
                                                    <Text style={{ color: '#0034BA', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>{post.mobileNo}</Text>
                                                </OpenURLButton>
                                            </View>
                                        }

                                        {
                                            post.email !== "" &&
                                            <View style={styles.socialLink}>
                                                <Icon1 name="mail-outline" style={{ paddingRight: 10 }} size={22} color='grey' />
                                                <OpenURLButton url={"mailto:" + post.mail}>
                                                    <Text style={{ color: '#0034BA', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>{post.email}</Text>
                                                </OpenURLButton>
                                            </View>
                                        }
                                    </View>

                                </View>
                            ))
                        }

                    </ScrollView>

            }
        </View>
    )
}

export default FoundPostScreen

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
    plusButton: {
        backgroundColor: "#5ca1f7",
        position: 'absolute',
        bottom: 40,
        right: 30,
        height: 60,
        width: 60,
        borderRadius: 60,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    status: {
        padding: 10,
        textAlign: "center",
    },
    input: {
        height: 37,
        borderWidth: 1,
        padding: 10,
        borderRadius: 7,
        marginTop: 4,
        borderColor: '#5ca1f7'
    },
    inputBig: {
        height: 90,
        borderWidth: 1,
        padding: 10,
        borderRadius: 7,
        marginTop: 4,
        textAlignVertical: 'top',
        borderColor: '#5ca1f7',
    },
    formGroup: {
        marginHorizontal: 30,
        marginVertical: 7,
    },
    heading: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "600",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#5ca1f7",
        marginTop: 15,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
    button2: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 6,
        marginTop: 15,
        borderWidth: 1,
    },
    text2: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
    },
    modalView: {
        height: 210,
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
})