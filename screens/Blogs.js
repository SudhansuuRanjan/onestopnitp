import { View, Text, ScrollView, StyleSheet, Image,  TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Entypo';
const ProfileImg = require('../assets/profile.jpg')

function AllBlogsScreen({navigation}) {

    const blogs = [
        {
            title:"Hello"
        },
        {
            title:"Hello"
        },
        {
            title:"Hello"
        },
        {
            title:"Hello"
        },
        {
            title:"Hello"
        },
        {
            title:"Hello"
        },
        {
            title:"Hello"
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>

                {blogs.map((blog,index)=>(
                    <TouchableOpacity onPress={()=> navigation.navigate('BlogDesc')} key={index} style={styles.blogCardContainer}>
                    <View style={styles.smallProfile}>
                        <Image source={ProfileImg} style={styles.smallImg} />
                        <Text style={styles.smallName}>Sudhanshu Ranjan</Text>
                    </View>

                    <View style={styles.cardBody}>
                        <View style={styles.cardHeadContainer}>
                            <Text style={styles.cardHead}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, pariatur.</Text>
                        </View>
                        <View style={styles.cardImgCont}>
                            <Image source={ProfileImg} style={styles.cardImg} />
                        </View>
                    </View>

                    <View style={styles.cardFoot}>
                        <Text style={{color:'#889399',fontSize:14}}>Jan 08, 2023</Text>
                        <Icon name="dot-single" style={{marginHorizontal:5}} size={10} color='grey' />
                        <Text style={{color:'#889399',fontSize:14}}>4 min read ✨</Text>
                    </View>
                </ TouchableOpacity>
                ))}


            </ScrollView>
        </View>
    );
}

function UserBlogScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>You haven't written any blogs.</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

const Blogs = () => {

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
                <Tab.Screen name="All" component={AllBlogsScreen} />
                <Tab.Screen name="Your Blogs" component={UserBlogScreen} />
            </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({
    blogCardContainer: {
        flex: 1,
        paddingHorizontal: 20,
        alignSelf: 'center',
        width: '100%',
        paddingVertical: 20,
        borderBottomWidth:1.5,
        borderBottomColor:'#2222',
        backgroundColor:'white'
    },
    smallProfile: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center'
    },
    smallImg: {
        height: 25,
        width: 25,
        borderRadius: 25,
        marginRight: 10,
    },
    smallName: {
        color:'#333',
        fontWeight:'500'
    },
    cardBody:{
        flexDirection:'row',
        alignItems:'flex-start',
        marginVertical:8
    },
    cardHeadContainer:{
        width:'70%'
    },
    cardHead:{
        fontSize:17,
        fontWeight:'800',
        color:"#3c4753"
    },
    cardImgCont:{
        width:'30%'
    },
    cardImg:{
        height:60,
        width:100,
        borderRadius:5,
    },
    cardFoot:{
        flexDirection:'row',
        alignItems:'center'
    }
})

export default Blogs