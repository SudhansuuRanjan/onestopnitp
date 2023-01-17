import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, Linking, TouchableOpacity } from 'react-native'
import React, { useEffect, useCallback, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import firestore from '@react-native-firebase/firestore';



const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return <TouchableOpacity style={{ paddingVertical: 8 }} onPress={handlePress} >{children}</TouchableOpacity>;
};

const ClubDetails = ({ navigation, route }) => {

    const [clubs, setClubs] = useState();
    const [loading, setLoading] = useState(true);

    const clubRef = firestore().collection("Clubs");

    useEffect(() => {
        clubRef.where('id', '==', 11).onSnapshot((querySnapshot) => {
            const clubs = [];
            querySnapshot.forEach((doc) => {
                clubs.push(doc.data());
            });
            setClubs(clubs);
            setLoading(false);
            // console.log(clubs);
        });
    }, []);


    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(241, 250, 255,0.6)', }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.imgContainer}>
                    <Image source={route.params.data.img} style={styles.clubImg} />
                    <Text style={styles.clubName}>{route.params.data.name}</Text>

                    {
                        loading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 200 }}>
                            <ActivityIndicator size="large" color="#5ca1f7" />
                        </View>
                            :
                            <View style={styles.textContainer}>
                                <Text style={styles.heading}>About</Text>
                                <Text style={styles.text}>
                                    {clubs[0].about}
                                </Text>

                                <Text style={styles.heading}>Reach us at:</Text>

                                <View style={styles.socialContainer}>

                                    {
                                        clubs[0].socials[0].instagram && <View style={styles.socialLink}>
                                            <Icon name="logo-instagram" style={{ paddingRight: 10 }} size={25} color='#E4405F' />
                                            <OpenURLButton url={clubs[0].socials[0].instagram}>
                                                <Text style={{ color: '#E4405F', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>{clubs[0].socials[0].instagram}</Text>
                                            </OpenURLButton>
                                        </View>
                                    }

                                    {
                                        clubs[0].socials[0].facebook && <View style={styles.socialLink}>
                                            <Icon name="logo-facebook" style={{ paddingRight: 10 }} size={25} color='#3B5999' />
                                            <OpenURLButton url={clubs[0].socials[0].facebook}>
                                                <Text style={{ color: '#3B5999', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>{
                                                    clubs[0].socials[0].facebook
                                                }</Text>
                                            </OpenURLButton>
                                        </View>
                                    }

                                    {
                                        clubs[0].socials[0].facebook && <View style={styles.socialLink}>
                                            <Icon name="logo-linkedin" style={{ paddingRight: 10 }} size={25} color='#0077B5' />
                                            <OpenURLButton url={clubs[0].socials[0].linkedin}>
                                                <Text style={{ color: '#0077B5', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>{clubs[0].socials[0].linkedin}</Text>
                                            </OpenURLButton>
                                        </View>
                                    }

                                    {
                                        clubs[0].socials[0].mail && <View style={styles.socialLink}>
                                            <Icon name="mail-outline" style={{ paddingRight: 10 }} size={25} color='#DD4B39' />
                                            <OpenURLButton url={"mailto:" + clubs[0].socials[0].mail}>
                                                <Text style={{ color: '#DD4B39', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15}}>{clubs[0].socials[0].mail}</Text>
                                            </OpenURLButton>
                                        </View>
                                    }

                                    {
                                        clubs[0].website && <View style={{ alignSelf: 'center', marginVertical: 40, backgroundColor: '#5356b6', alignItems: 'center', paddingHorizontal: 20, borderRadius: 20 }}>
                                            <OpenURLButton url={clubs[0].website}>
                                                <Text style={{ color: 'white', textAlign: 'center', fontWeight: '500', fontSize: 15 }}>Visit Robotics Club Website</Text>
                                            </OpenURLButton>
                                        </View>
                                    }


                                </View>
                            </View>
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default ClubDetails

const styles = StyleSheet.create({
    container: {

    },
    clubImg: {
        width: '100%',
        height: 240
    },
    clubName: {
        backgroundColor: "#5ca1f7",
        color: 'white',
        padding: 6,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '500',
    },
    imgContainer: {

    },
    heading: {
        fontSize: 17,
        fontWeight: '500',
        color: '#3c4753',
        paddingTop: 15,
        paddingBottom: 5,
    },
    textContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    text: {
        color: '#666',
        lineHeight: 20,
        paddingVertical: 10,
    },
    socialContainer: {
        paddingBottom: 40,
    },
    socialLink: {
        flexDirection: 'row',
        alignItems: 'center'
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
})