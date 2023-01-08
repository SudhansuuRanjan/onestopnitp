import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';

const PastEvents = () => {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>No Past Events</Text>
        </ScrollView>
    )
}

const UpcomingEvents = () => {

    const upcomingEvents = [
        {
            title: ''
        },
        {
            title: ''
        },
        {
            title: ''
        },
        {
            title: ''
        },
        {
            title: ''
        },
    ]
    return (
        <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>

            <View style={{paddingBottom:50}}>
                {upcomingEvents.map((e, index) => (
                    <View key={index} style={styles.eventCard}>
                        <View>
                            <Image source={{ uri: "https://assets.glginsights.com/wp-content/uploads/2021/08/D1_Tech_HeaderImage.jpg" }} style={styles.eventImg} />

                            <View style={styles.locationCont}>
                                <Icon name="location-outline" style={{ marginHorizontal: 5 }} size={22} color='white' />
                                <Text style={styles.locationText}>NITP Campus</Text>
                            </View>
                        </View>
                        <View style={styles.cardHead}>
                            <Text style={styles.cardData}>28 January, 2023</Text>
                            <Icon2 name="dot-single" style={{ marginHorizontal: 5 }} size={12} color='grey' />
                            <Text style={styles.cardData}>Full Day</Text>
                        </View>
                        <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>Techno Cultural Fest</Text>
                            <Text style={styles.cardDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio magnam, tempora quo doloremque facilis?</Text>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.hashtag}>#Cultural</Text>
                            <Text style={styles.hashtag}>#Technical</Text>
                            <Text style={styles.hashtag}>#Fest</Text>
                        </View>
                    </View>
                ))}
            </View>

        </ScrollView>
    )
}

const Tab = createMaterialTopTabNavigator();

const Events = () => {

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 13, fontWeight: '500' },
                    tabBarStyle: { backgroundColor: '#ffffff' },
                    tabBarIndicatorStyle: {
                        backgroundColor: '#5ca1f7'
                    }
                }}
            >
                <Tab.Screen name="Upcoming Events" component={UpcomingEvents} />
                <Tab.Screen name="Past Events" component={PastEvents} />
            </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({
    eventImg: {
        height: 200,
    },
    eventCard: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 30,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    locationCont: {
        backgroundColor: "#111000c0",
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
        position: 'absolute',
        bottom: 0,
    },
    locationText: {
        color: 'white',
        fontSize: 16
    },
    cardHead: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    cardData: {
        color: '#666'
    },
    cardBody: {
        paddingHorizontal: 15,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '700',
        color:"#3c4753",
    },
    cardDesc: {
        color: '#889399',
    },
    footer: {
        padding: 15,
        paddingBottom: 20,
        flexDirection: 'row'
    },
    hashtag: {
        backgroundColor: '#2222',
        paddingHorizontal: 8,
        paddingVertical: 2,
        alignSelf: 'flex-start',
        borderRadius: 5,
        color: '#444',
        fontWeight: '500',
        marginRight: 5
    }
})

export default Events