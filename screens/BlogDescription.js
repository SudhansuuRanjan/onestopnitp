import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
const ProfileImg = require('../assets/profile.jpg')
import Icon from 'react-native-vector-icons/Entypo';

const BlogDescription = () => {
    return (
        <ScrollView style={styles.container}>

            <View style={{paddingHorizontal: 25}}>
                <View style={styles.profile}>
                    <Image source={ProfileImg} style={styles.profileImg} />
                    <View>
                        <Text style={styles.profileName}>Sudhanshu Ranjan</Text>
                        <View style={styles.blogDetail}>
                            <Text style={{ color: 'gray', fontSize: 14 }}>Jan 08, 2023</Text>
                            <Icon name="dot-single" style={{ marginHorizontal: 5 }} size={10} color='grey' />
                            <Text style={{ color: 'gray', fontSize: 14 }}>4 min read ✨</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.blogHeading}>Google Software Engineer Interview Preparation</Text>

                <Image source={{ uri: "https://assets.glginsights.com/wp-content/uploads/2021/08/D1_Tech_HeaderImage.jpg" }} style={styles.blogImg} />

                <View style={{ marginBottom: 50 }}>
                    <Text style={styles.blogPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nesciunt temporibus autem, quas tenetur aliquid eos vel error, pariatur corrupti rerum deleniti eum voluptatem quibusdam sapiente. Dolores possimus quis pariatur dolore repellat consequatur unde natus esse, nemo odit aut facere totam voluptas. Reprehenderit tenetur cumque necessitatibus, veniam tempora modi possimus?</Text>

                    <Text style={styles.blogPara}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque necessitatibus similique quam voluptatem repudiandae error hic inventore commodi sunt, assumenda dolore, id illo sint quis. Suscipit a, voluptates voluptatum repellendus accusamus nesciunt laboriosam vero. Odio rerum laboriosam consequatur dolores quaerat.</Text>

                    <Text style={styles.blogPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius autem cum est dicta labore eum atque tempore minima iusto corrupti, at hic maiores quas fugiat impedit cumque? Neque molestiae pariatur numquam unde quia ut at rem, modi qui reprehenderit dolor nihil quasi minima consequuntur. Dolorem.</Text>

                    <Text style={styles.blogPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolor perferendis magni adipisci unde, aut omnis sunt molestias ut sapiente vel fugit vero laudantium dolore ullam, magnam itaque debitis provident quam. Sapiente neque iusto fugiat odit et, voluptas rem culpa tempora quisquam nihil autem architecto, temporibus suscipit cupiditate. Ipsa neque harum aliquam natus magni voluptates consequuntur, vero id ullam dolorum.</Text>

                    <Text style={styles.blogPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident maxime adipisci assumenda. Vitae quia modi eos, temporibus autem corporis voluptas.</Text>
                </View>
            </View>


            <View style={{ paddingVertical: 20, width: '100%', backgroundColor: "#1111", paddingHorizontal:20 }}>
                <Text style={{fontWeight:'600', color:'#555'}}>AUTHOR</Text>

                <View style={{flexDirection:'row', marginTop:20, marginBottom:10}}>
                    <Image source={ProfileImg} style={styles.profileImgSm} />
                    <View>
                        <Text style={styles.profileName}>Sudhanshu Ranjan</Text>
                        <Text style={styles.about}>
                            A tech enthusiast who is keen to develop new skills | Contact Me: sudhanshuranjan2k18@gmail.com
                        </Text>
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default BlogDescription

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    profileImg: {
        height: 60,
        width: 60,
        borderRadius: 60,
        marginRight: 10,
    },
    profileImgSm: {
        height: 50,
        width: 50,
        borderRadius: 60,
        marginRight: 25,
    },
    profileName: {
        fontSize: 18,
        fontWeight: '500'
    },
    blogDetail: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5,
    },
    blogHeading: {
        fontSize: 22,
        fontWeight: '700',
        lineHeight: 30,
        marginTop: 10,
    },
    blogImg: {
        height: 200,
        marginVertical: 30,
    },
    blogPara: {
        fontSize: 18,
        lineHeight: 25,
        marginVertical: 10,
        color: '#3c4753',
    },
    about:{
        color:'#555',
        maxWidth:300,
    }
})