import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


const Updates = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <View style={styles.notifContainer}>
                <View style={styles.icon}>
                    <Icon name="notifications" style={{ marginHorizontal: 5 }} size={22} color='#5ca1f7' />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>New Feature alert</Text>
                    <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex delectus provident aliquid quas molestias veniam.</Text>
                </View>
            </View>

            <View style={styles.notifContainer}>
                <View style={styles.icon}>
                    <Icon name="notifications" style={{ marginHorizontal: 5 }} size={22} color='#5ca1f7' />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>New Feature alert</Text>
                    <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex delectus provident aliquid quas molestias veniam.</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 23
    },
    notifContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 18,
        alignSelf: 'center',
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    icon: {
        height: 40,
        width: 40,
        borderRadius: 40,
        backgroundColor: "#dfeefe",
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        paddingLeft: 15,
    },
    title: {
        fontWeight: '600',
        fontSize: 17,
        color: "#3c4753"
    },
    desc: {
        color: "#889399",
        paddingTop: 5,
    }
})

export default Updates