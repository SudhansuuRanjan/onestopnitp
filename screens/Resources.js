import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity, Image, ImageBackground, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
const ProfileImg = require('../assets/profile.jpg');
import Icon from 'react-native-vector-icons/Ionicons';

const Resources = ({ navigation }) => {

    const resources = [
        {
            name: "Web Development",
            img:'',
            resource: [

            ],
            uid: "001",
        },
        {
            name: "Machine Learning",
            resource: [

            ],
            uid: "001",
        },
        {
            name: "UI/Ux Design",
            resource: [

            ],
            uid: "001",
        },
        {
            name: "Android Development",
            resource: [

            ],
            uid: "001",
        },
        {
            name: "Java",
            resource: [

            ],
            uid: "001",
        },
        {
            name: "Flutter",
            resource: [

            ],
            uid: "001",
        },
        {
            name: "Backend Development",
            resource: [

            ],
            uid: "001",
        },
        {
            name: "Frontend Development",
            resource: [

            ],
            uid: "001",
        },
        {
            name: "Dev Ops",
            resource: [

            ],
            uid: "001",
        },
        {
            name: "Blockchain",
            resource: [

            ],
            uid: "001",
        },
        {
            name: "Data Structures & Algorithms",
            resource: [

            ],
            uid: "001",
        },
    ]

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <View style={styles.headerImgContainer}>
                        <Image source={ProfileImg} style={styles.profileImg} />
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.company}>OneStopNITP</Text>
                    <Text style={styles.infoText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, laboriosam suscipit expedita fuga et officia? Deleniti quam aliquid error ipsa nihil minima asperiores maiores. Facere ipsa, repellat doloremque maiores deserunt eos rerum quasi modi, fuga vel delectus asperiores iure ex debitis distinctio cum quas sit quam odit veniam obcaecati enim.</Text>
                </View>

                <View style={{ paddingHorizontal: 15,paddingTop:20,paddingBottom:50 }}>
                    <Text style={{fontWeight:"500",fontSize:15,color:'#666'}}>Explore Resources</Text>

                    {resources.map((resource, index) => (
                        <TouchableOpacity key={index} style={styles.resourceCont}>
                            <Image source={{ uri: "https://assets.glginsights.com/wp-content/uploads/2021/08/D1_Tech_HeaderImage.jpg" }} style={styles.resourceImg} />
                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', width: '75%' }}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.resourceText}>{resource.name}</Text>
                                    <Text style={styles.text}>{resource.resource.length}+ resources</Text>
                                </View>
                                <View>
                                    <Icon name="arrow-forward-circle" size={27} color='#5555' />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}

                </View>


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    headerContainer: {
        backgroundColor: '#5ca1f7',
        height: 80,
        flexDirection: 'column'
    },
    headerImgContainer: {
        backgroundColor: '#5ca1f7',
        alignSelf: 'center',
        padding: 10,
        position: 'absolute',
        bottom: -40,
        borderRadius: 100,
    },
    profileImg: {
        height: 80,
        width: 80,
        borderRadius: 60,
    },
    infoContainer: {
        paddingHorizontal: 15,
        marginTop: 50,
    },
    company: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '700',
        color: '#3c4753'
    },
    infoText: {
        textAlign: 'center',
        fontSize: 15,
        color: '#889399',
        paddingVertical: 10,
    },
    resourceCont: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        padding: 15,
        marginVertical: 10,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    resourceImg: {
        height: 55,
        width: 55,
        borderRadius: 8,
        marginRight: 15,
    },
    resourceText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#3c4753'
    },
    text: {
        color: '#888399',
        fontWeight: '500',
        marginTop: 2,
    }
})

export default Resources