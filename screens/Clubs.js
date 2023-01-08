import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import RoboticsImg from '../assets/Clubs/Robotics.png'
import IEEEImg from '../assets/Clubs/IEEE.png'
import SaptakImg from '../assets/Clubs/Saptak.png'
import NatvanshImg from '../assets/Clubs/Natvansh.png'
import VistaImg from '../assets/Clubs/Vista.png'
import CESCImg from '../assets/Clubs/CESC.png'
import HackslahImg from '../assets/Clubs/Hackslash.png'
import ExpressoImg from '../assets/Clubs/Expresso.png'
import DSCImg from '../assets/Clubs/DSC.png'
import ISIEImg from '../assets/Clubs/ISIE.png'


const Clubs = ({ navigation }) => {

    const clubs = [
        {
            name: 'Robotics',
            type: 'Technical',
            img: RoboticsImg,
        },
        {
            name: 'Hackslash',
            type: 'Coding',
            img: HackslahImg,
        },
        {
            name: 'DSC',
            type: 'Development',
            img: DSCImg,
        },
        {
            name: 'IEEE',
            type: 'Technical',
            img: IEEEImg,
        },
        {
            name: 'Saptak',
            type: 'Cultural',
            img: SaptakImg,
        },
        {
            name: 'Natvansh',
            type: 'Cultural',
            img: NatvanshImg,
        },
        {
            name: 'Vista',
            type: 'Photography',
            img: VistaImg,
        },
        {
            name: 'Expresso',
            type: 'Arts & Craft',
            img: ExpressoImg,
        },
        {
            name: 'CESC',
            type: 'Technical',
            img: CESCImg,
        },
        {
            name: 'ISIE',
            type: 'Technical',
            img: ISIEImg,
        },
    ]

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView contentContainerStyle={styles.container}>

                {
                    clubs.map((club, index) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Club', { clubName: club.name, id: index, data: clubs[index] })} key={index} style={styles.clubCard}>
                            <Image source={club.img} style={styles.clubImg} />
                            <Text style={styles.clubName}>{club.name}</Text>
                            <Text style={styles.clubCategory}>{club.type}</Text>
                        </TouchableOpacity>
                    ))
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    clubImg: {
        height: 110,
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#1111',
    },
    clubCard: {
        borderRadius: 15,
        width: 165,
        padding: 10,
        marginBottom: 25,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    clubName: {
        fontSize: 17,
        fontWeight: '700',
        textAlign: "center",
        color: "#3c4753",
        paddingTop: 5,
    },
    clubCategory: {
        color: "#889399",
        fontSize: 12,
        textAlign: "center",
        paddingBottom: 2,
        fontWeight: '500'
    }
})

export default Clubs