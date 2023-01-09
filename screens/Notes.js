import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const image = { uri: "https://kcnit.ac.in/wp-content/uploads/2022/06/myhc_92371.jpg" };

const Notes = ({ navigation }) => {
    const [branch, setBranch] = useState(0);

    const branches = [
        {
            name: "Electrical",
            imgUrl: "https://kcnit.ac.in/wp-content/uploads/2022/06/myhc_92371.jpg",
            subjects: [
                {
                    name: "Basic Electrical Engg.",
                    id: 101,
                    updated: new Date,
                    Notes: true,
                    PYQ: true
                },
                {
                    name: "Engineeing Mathematics",
                    id: 102,
                    updated: new Date,
                    Notes: true,
                    PYQ: true
                },
                {
                    name: "Basic Electronics Engg.",
                    id: 103,
                    updated: new Date,
                    Notes: true,
                    PYQ: true
                },
                {
                    name: "Analog Electronics",
                    id: 104,
                    updated: new Date,
                    Notes: true,
                    PYQ: false
                },
                {
                    name: "Network Analysis",
                    id: 105,
                    updated: new Date,
                    Notes: true,
                    PYQ: false
                },
                {
                    name: "Power Systems",
                    id: 106,
                    updated: new Date,
                    Notes: true,
                    PYQ: true
                },
            ]
        },
        {
            name: "CSE",
            imgUrl: "https://images4.content-hci.com/commimg/myhotcourses/blog/post/myhc_89683.jpg",
            subjects: []
        },
        {
            name: "Electronics",
            imgUrl: "https://tryengineering.org/wp-content/uploads/bigstock-Science-Technology-Technology-340435108-1024x576.jpg",
            subjects: []
        },
        {
            name: "Mech.",
            imgUrl: "https://armiet.in/wp-content/uploads/2020/03/B1P1.jpeg",
            subjects: []
        },
        {
            name: "Civil",
            imgUrl: "https://theconstructor.org/wp-content/uploads/2017/04/civil-engineering-subjects-details.jpg",
            subjects: []
        },
        {
            name: "Archi.",
            imgUrl: "https://cache.careers360.mobi/media/presets/860X430/presets/860X430/article_images/2020/4/6/B.tech-in-_architecture-engineering.webp",
            subjects: []
        },
    ]

    useEffect(() => {
        console.log(branches[branch].name);
    }, [branch])


    return (
        <>
            <View style={styles.container}>

                <View style={{ marginVertical: 17 }}>
                    <ScrollView horizontal={true} contentContainerStyle={styles.row} showsHorizontalScrollIndicator={false}>
                        {branches.map((dept, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => setBranch(index)}
                                    style={[
                                        styles.button,
                                        branch === index && styles.selected,
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.buttonLabel,
                                            branch === index && styles.selectedLabel,
                                        ]}
                                    >
                                        {dept.name}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>


                <View style={styles.electricalBg}>
                    <ImageBackground source={{ uri: branches[branch].imgUrl }} resizeMode="cover" style={styles.image}>
                        <Text style={styles.text}>{branches[branch].name + " Engg."}</Text>
                    </ImageBackground>
                </View>

                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Subjects</Text>
                </View>



                <ScrollView contentContainerStyle={styles.column}>


                    {
                        branches[branch].subjects.map((subject, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles.subjectContainer} onPress={() => navigation.navigate('Subject', { subject: 'Basic Electrical Engg.' })}>
                                    <View>
                                        <View style={styles.labelContainer}>
                                            {subject.Notes && <Text style={styles.label1}>Notes</Text>}
                                            {subject.PYQ && <Text style={styles.label2}>PYQ</Text>}
                                        </View>
                                        <Text style={styles.subjectName}>{subject.name}</Text>
                                        <Text style={styles.date}>Last Updated : {subject.updated.toString().replace(/\S+\s(\S+)\s(\d+)\s(\d+)\s.*/, '$2-$1-$3')}</Text>
                                    </View>
                                    <View>
                                        <Icon name="arrow-forward-circle" size={30} color='grey' />
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }

                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7e7e7'
    },
    row: {
        paddingHorizontal: 20,
    },
    column: {
        marginVertical: 10,
        paddingBottom: 50,
    },
    button: {
        paddingHorizontal: 18,
        paddingVertical: 7,
        borderRadius: 8,
        backgroundColor: "white",
        marginBottom: 6,
        textAlign: "center",
        marginRight: 10,
        borderColor: '#5ca1f7',
        borderWidth: 0.5,
    },
    selected: {
        backgroundColor: "#5ca1f7",
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 15,
        fontWeight: "500",
        color: "#5ca1f7",
    },
    selectedLabel: {
        color: "white",
    },
    label: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
    },
    electricalBg: {
        height: 130,
        width: '100%',
        justifySelf: 'center',
        alignSelf: 'center',
        backgroundColor: 'blue'
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 30,
        lineHeight: 130,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#111000c0",
    },
    subjectContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#dddddd',
        padding: 13,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginBottom: 10
    },
    labelContainer: {
        flexDirection: 'row',
    },
    label1: {
        backgroundColor: '#b3ffb3',
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 2,
        fontWeight: '600',
        color: 'green',
        marginRight: 5,
        fontSize: 13
    },
    label2: {
        backgroundColor: '#E9D8FD',
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 2,
        fontWeight: '600',
        color: '#44337A',
        fontSize: 13
    },
    subjectName: {
        fontWeight: '700',
        fontSize: 18,
        paddingTop: 5,
    },
    date: {
        color: 'grey',
        fontSize: 13,
        marginTop: 3,
    },
    headingContainer: {
        paddingHorizontal: '6%',
        paddingVertical: 20,
    },
    heading: {
        fontWeight: '600',
        fontSize: 18,
    }
})

export default Notes