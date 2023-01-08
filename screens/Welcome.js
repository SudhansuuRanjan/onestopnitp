import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Constants from 'expo-constants';
import Community from '../assets/community.png'
import Notes from "../assets/notes.png";
import Shopping from '../assets/shopping.png'
import LostFound from '../assets/lostfound.png'

const Welcome = ({ navigation }) => {

    const [page, setPage] = useState(0);

    const pages = [
        {
            title: 'Get Notes at one tap',
            img: Notes,
            desc: "OneStopNITP provides clean and crisp notes and resourses for first year students of all branches of NIT, Patna.",
        },
        {
            title: 'Buy/Sell got easier',
            img: Shopping,
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo tempore architecto repellat animi inventore!",
        },
        {
            title: 'Prefect Lost/Found Solution',
            img: LostFound,
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo tempore architecto repellat animi inventore!",
        },
        {
            title: 'Stay Informed',
            img: Community,
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo tempore architecto repellat animi inventore!",
        },
    ]

    const { auth, setAuthData } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}
                style={{ width: 40, alignSelf: 'flex-end', margin: 20, marginRight: 30 }}
            >
                <Text style={{ color: '#889399', textAlign: 'right', fontSize: 16, fontWeight: "600" }}>
                    Skip
                </Text>
            </TouchableOpacity>

            <View style={styles.imgContainer}><Image source={pages[page].img} style={styles.image} /></View>
            <Text style={styles.featureHeading}>{pages[page].title}</Text>
            <Text style={styles.featureText}>{pages[page].desc}</Text>


            <View style={styles.foot}>
                <View style={styles.indicatorCont}>
                    {pages.map((ind,index)=>(
                        <View key={index} style={[styles.indicator, page === index && { height: 8, width: 16, backgroundColor: '#5ca1f7' }]}></View>
                    ))}
                </View>

                <TouchableOpacity onPress={() => {
                    if (page < 3) {
                        setPage(page + 1);
                    } else {
                        navigation.navigate('SignIn');
                        setPage(0);
                    }
                }}
                    style={[styles.button]}
                >
                    <Text style={styles.buttonLabel}>
                        {page >= 3 ? 'Get Started' : 'Next'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor:"white",
    },
    image: {
        height: 280,
        width: '80%',
        marginTop: -20
    },
    imgContainer: {
        alignSelf: "center",
        paddingVertical: 70,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        backgroundColor: 'white',
        height: 400,
        width: '100%',
        bottom: 0,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        paddingHorizontal: 25,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.22,
    },
    featureHeading: {
        marginTop: 30,
        fontWeight: '700',
        fontSize: 25,
        textAlign: 'center',
        color:"#3c4753"
    },
    featureText: {
        paddingTop: 15,
        color: '#889399',
        paddingHorizontal: 30,
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 22
    },
    button: {
        paddingHorizontal: 45,
        paddingVertical: 13,
        borderRadius: 50,
        backgroundColor: '#5ca1f7',
    },
    buttonLabel: {
        color: 'white',
        fontSize: 17,
    },
    foot: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        alignSelf: 'center',
        width: '100%',
        bottom: 60,
        position: 'absolute'
    },
    indicatorCont: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    indicator: {
        height: 6,
        width: 10,
        backgroundColor: '#6666',
        borderRadius: 10,
        marginRight: 5,
    }
});

export default Welcome;
