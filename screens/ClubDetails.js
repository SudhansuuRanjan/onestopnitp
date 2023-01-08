import { StyleSheet, Text, View, Image, ScrollView, Button, Linking, TouchableOpacity } from 'react-native'
import React, { Children, useCallback } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


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
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(241, 250, 255,0.6)', }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.imgContainer}>
                    <Image source={route.params.data.img} style={styles.clubImg} />
                    <Text style={styles.clubName}>{route.params.data.name}</Text>
                    <View style={styles.textContainer}>
                        <Text style={styles.heading}>About</Text>
                        <Text style={styles.text}>
                            IEEE Student Branch, NIT Patna was established with an enthusiastic
                            initiative of 13 students of NIT Patna enrolled in B.Tech programme of
                            Electrical Engineering and Electronics and Communication Engineering
                            under the leadership of Prof Kumar Abhishek,Assistant professor of
                            Computer Science and Engineering. In this whole path our
                            mentors were the three great visionaries of our college Dr Asok De (Director NIT Patna), Dr D.K. Singh (HOD, Electronics and
                            Communication Engineering), and Dr M.P Singh (HOD, Computer
                            Science and Engineering). Prof. Kumar Abhishek became the first
                            Branch Counsellor of the Student Branch and Shruti Neha became
                            the first Student Branch Chair. IEEE Student Branch, NITP was
                            established with a vision of making students aware of new
                            developments in various engineering fields and to provide support
                            in implementing new innovative ideas of future engineers which
                            can give a new shape to this world.
                        </Text>

                        <Text style={styles.heading}>Reach us at:</Text>

                        <View style={styles.socialContainer}>

                            <View style={styles.socialLink}>
                                <Icon name="logo-instagram" style={{ paddingRight: 10 }} size={25} color='grey' />
                                <OpenURLButton url="https://www.instagram.com/ieee_nitp">
                                    <Text style={{ color: '#0034BA', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>https://www.instagram.com/ieee_nitp</Text>
                                </OpenURLButton>
                            </View>

                            <View style={styles.socialLink}>
                                <Icon name="logo-facebook" style={{ paddingRight: 10 }} size={25} color='grey' />
                                <OpenURLButton url="https://www.facebook.com/ieeenitp">
                                    <Text style={{ color: '#0034BA', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>https://www.facebook.com/ieeenitp</Text>
                                </OpenURLButton>
                            </View>

                            <View style={styles.socialLink}>
                                <Icon name="logo-linkedin" style={{ paddingRight: 10 }} size={25} color='grey' />
                                <OpenURLButton url="https://www.linkedin.com/ieee_nitp">
                                    <Text style={{ color: '#0034BA', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>https://www.linkedin.com/ieeenitp</Text>
                                </OpenURLButton>
                            </View>

                            <View style={styles.socialLink}>
                                <Icon name="mail-outline" style={{ paddingRight: 10 }} size={25} color='grey' />
                                <OpenURLButton url="mailto:contact_nitp@ieeenitp.com">
                                    <Text style={{ color: '#0034BA', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>contact_nitp@ieeenitp.com</Text>
                                </OpenURLButton>
                            </View>

                            <View style={{alignSelf:'center',marginVertical:40, backgroundColor:'#2222', alignItems:'center', paddingHorizontal:20, borderRadius:20}}>
                                <OpenURLButton url="https://www.roboticsnitp.co.in">
                                    <Text style={{ color: '#3c4753', textAlign:'center', fontWeight: '500', fontSize: 15 }}>Visit Robotics Club Website</Text>
                                </OpenURLButton>
                            </View>

                            
                        </View>
                    </View>
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