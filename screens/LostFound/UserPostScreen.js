import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  Modal,
  TextInput,
  ActivityIndicator,
  Pressable,
  Alert,
} from "react-native";
import React, { useState, useEffect, useCallback, useContext } from "react";
import Icon from "react-native-vector-icons/Entypo";
import Icon1 from "react-native-vector-icons/Ionicons";
import storage from "@react-native-firebase/storage";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import AuthContext from "../../context/AuthContext";
import firestore from "@react-native-firebase/firestore";

const getDate = (Timestamp) => {
  const date = new Date(Timestamp.seconds * 1000);
  return date.toDateString() + " " + date.toLocaleTimeString();
};

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity style={{ paddingVertical: 5 }} onPress={handlePress}>
      {children}
    </TouchableOpacity>
  );
};

const UserPostScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [whatsappNo, setWhatsappNo] = useState("");
  const [description, setDescription] = useState("");
  const [selectedValue, setSelectedValue] = useState("Lost");
  const [image, setImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(false);
  //https://firebasestorage.googleapis.com/v0/b/onestopnitp.appspot.com/o/defaultpost.png?alt=media&token=3b706c59-bae6-4ca6-afd8-3c363f214b80


  

  const { user } = useContext(AuthContext);

  const lostFoundRef = firestore().collection("LostFound");
  const postRef = firestore().collection("LostFound");

  useEffect(() => {
    postRef.where("creater", "==", user.email).onSnapshot((querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push(doc.data());
      });

      setPosts(posts);
      setLoading(false);
    });
  }, []);

  const resetForm = async () => {
    setImage(null);
    setEmail("");
    setMobileNo("");
    setWhatsappNo("");
    setDescription("");
  };

  const validateInput = () => {
    let temp = true;
    if (description === "") {
      temp = false;
      console.log("Insufficient Data!");
    }
    if (
      email !== "" ||
      whatsappNo !== "" ||
      (mobileNo !== "" && description !== "")
    ) {
      temp = true;
    }
    return temp;
  };

  const uploadData = async (imgUrl) => {
    console.log("Upload Data!");
    const data = {
      description,
      type: selectedValue,
      img: imgUrl,
      email,
      whatsappNo,
      mobileNo,
      createdAt: firestore.Timestamp.fromDate(new Date()),
      user: {
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        uid: user.uid,
      },
      creater: user.email,
    };

    await lostFoundRef
      .add(data)
      .then(() => {
        console.log("Post Created");
      })
      .catch((error) => {
        alert(error);
      });

    await resetForm();
    setStatus(false);
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [6, 5],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    console.log("Uploading Image!");
    setStatus(true);
    setModalVisible1(true);
    const fileName = "OneStopNITP" + new Date().getTime().toString();
    const reference = storage().ref(fileName);
    const pathToFile = image;
    // uploads file
    try {
      await reference.putFile(pathToFile);
      const url = await reference.getDownloadURL();
      await uploadData(url);
      setUploadedImage(url);
      console.log(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible1}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible1);
                    }}
                >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "rgba(0,0,0,0.5)" }}>
                        <View style={styles.modalView}>
                            <Text style={{ fontSize: 18, textAlign: 'center', fontWeight: '500' }}>{status === true ? "Creating Post" : "Post Created!"}</Text>
                            {status && <ActivityIndicator style={{ paddingVertical: 30 }} size="large" color="#5ca1f7" />}
                            {
                                !status &&
                                <Pressable style={{ backgroundColor: '#2196F3', paddingHorizontal: 25, borderRadius: 10, paddingVertical: 8, marginTop: 60 }} onPress={() => setModalVisible1(false)}>
                                    <Text style={{ color: 'white', fontWeight: '500', fontSize: 16 }}>Done</Text>
                                </Pressable>
                            }
                        </View>
                    </View>
                </Modal>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 20, paddingTop: 5 }}>
                    <TouchableOpacity style={{ paddingLeft: 10, marginRight: 20 }} onPress={() => setModalVisible(false)}>
                        <Icon name="cross" size={32} color='#3c4753' />
                    </TouchableOpacity>
                    <Text style={styles.heading}>Create Lost/found Post</Text>
                </View>


                <ScrollView>

                    <View style={styles.formGroup}>
                        <Image source={{ uri: image ? image : 'https://assets.glginsights.com/wp-content/uploads/2021/08/D1_Tech_HeaderImage.jpg' }} style={{ width: 180, height: 150, alignSelf: 'center' }} />
                        <Pressable style={{ backgroundColor: 'white', borderWidth: 1.5, borderColor: '#5ca1f7', paddingHorizontal: 10, paddingVertical: 4, width: 110, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 20, marginTop: 15 }} onPress={pickImage}>
                            <Text style={{ color: '#5ca1f7', fontWeight: '500' }}>Select Image</Text>
                        </Pressable>
                    </View>


                    <View style={styles.formGroup}>
                        <Text style={{ color: '#5ca1f7', fontWeight: '500' }}>Description</Text>
                        <TextInput
                            style={styles.inputBig}
                            multiline={true}
                            onChangeText={(e) => setDescription(e)}
                            value={description}
                            placeholder="Enter Description"
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={{ color: '#5ca1f7', fontWeight: '500' }}>Type</Text>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.input}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item style={{ color: "#666" }} label="Lost" value="Lost" />
                            <Picker.Item style={{ color: "#666" }} label="Found" value="Found" />
                        </Picker>
                    </View>


                    <View style={styles.formGroup}>
                        <Text style={{ color: '#5ca1f7', fontWeight: '500' }}>Email</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => setEmail(e)}
                            value={email}
                            placeholder="Enter Your Email"
                            autoComplete="email"
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={{ color: '#5ca1f7', fontWeight: '500' }}>WhapsApp No.</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => setWhatsappNo(e)}
                            value={whatsappNo}
                            placeholder="Enter WhatsApp No."
                        />
                    </View>

                    <View style={styles.formGroup}>
                        <Text style={{ color: '#5ca1f7', fontWeight: '500' }}>Mobile No.</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => setMobileNo(e)}
                            value={mobileNo}
                            placeholder="Enter Mobile No."
                        />
                    </View>


                    <View style={styles.formGroup}>
                        <Pressable
                            onPress={uploadImage}
                            style={styles.button}
                        >
                            <Text style={styles.text}>Post</Text>
                        </Pressable>
                    </View>

                </ScrollView>
            </Modal>


            {
                loading ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#5ca1f7" />
                </View> :

                    <ScrollView>

                        {
                            posts.map((post, index) => (
                                <View style={styles.postContainer} key={index}>
                                    <View style={styles.profile}>
                                        <Image source={{ uri: post.user.photoUrl }} style={styles.profileImg} />
                                        <View>
                                            <Text style={styles.profileName}>{post.user.displayName}</Text>
                                            <View style={styles.postDetail}>
                                                <Text style={{ color: 'gray', fontSize: 14 }}>{getDate(post.createdAt)}</Text>
                                                {/* <Icon name="dot-single" style={{ marginHorizontal: 5 }} size={10} color='grey' />
                                                <Text style={{ color: 'gray', fontSize: 14 }}>4 min read ✨</Text> */}
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.horizontalRule} />

                                    <View style={styles.textContainer}>
                                        <Text style={styles.title}>Image</Text>
                                        <Image source={{ uri: post.img ? post.img : "https://firebasestorage.googleapis.com/v0/b/onestopnitp.appspot.com/o/defaultpost.png?alt=media&token=3b706c59-bae6-4ca6-afd8-3c363f214b80" }} style={styles.lostItem} />

                                        <Text style={styles.title}>Details</Text>
                                        <Text style={styles.textPara}>{post.description}</Text>

                                        <Text style={styles.title}>Contact Info</Text>

                                        {
                                            post.whatsappNo !== "" &&
                                            <View style={styles.socialLink}>
                                                <Icon1 name="logo-whatsapp" style={{ paddingRight: 10 }} size={22} color='grey' />
                                                <OpenURLButton url={"tel:" + post.whatsappNo}>
                                                    <Text style={{ color: '#0034BA', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>{post.whatsappNo}</Text>
                                                </OpenURLButton>
                                            </View>
                                        }

                                        {
                                            post.mobileNo !== "" &&
                                            <View style={styles.socialLink}>
                                                <Icon1 name="md-call" style={{ paddingRight: 10 }} size={22} color='grey' />
                                                <OpenURLButton url={"tel:" + post.mobileNo}>
                                                    <Text style={{ color: '#0034BA', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>{post.mobileNo}</Text>
                                                </OpenURLButton>
                                            </View>
                                        }

                                        {
                                            post.email !== "" &&
                                            <View style={styles.socialLink}>
                                                <Icon1 name="mail-outline" style={{ paddingRight: 10 }} size={22} color='grey' />
                                                <OpenURLButton url={"mailto:" + post.mail}>
                                                    <Text style={{ color: '#0034BA', textDecorationLine: 'underline', fontWeight: '500', fontSize: 15 }}>{post.email}</Text>
                                                </OpenURLButton>
                                            </View>
                                        }
                                    </View>

                                </View>
                            ))
                        }

                    </ScrollView>

            }

            <TouchableOpacity style={styles.plusButton} onPress={() => setModalVisible(true)}>
                <Icon name="plus" size={40} color='white' />
            </TouchableOpacity>
        </View>
  );
};

export default UserPostScreen;

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
        marginHorizontal: 10,
        marginVertical: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImg: {
        height: 38,
        width: 38,
        borderRadius: 30,
        marginRight: 10,
    },
    profileImgSm: {
        height: 50,
        width: 50,
        borderRadius: 60,
        marginRight: 25,
    },
    profileName: {
        fontSize: 16,
        fontWeight: '500'
    },
    postDetail: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    horizontalRule: {
        height: 1,
        backgroundColor: '#1111',
        marginVertical: 10,
        paddingHorizontal: 5,
    },
    lostItem: {
        height: 240,
        borderRadius: 5,
        marginVertical: 5,
        width: '100%'
    },
    title: {
        fontSize: 15,
        fontWeight: '500',
        color: "#3c4753",
        paddingVertical: 5,
    },
    text: {
        color: '#666',
    },
    socialLink: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    plusButton: {
        backgroundColor: "#5ca1f7",
        position: 'absolute',
        bottom: 40,
        right: 30,
        height: 60,
        width: 60,
        borderRadius: 60,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    status: {
        padding: 10,
        textAlign: "center",
    },
    input: {
        height: 37,
        borderWidth: 1,
        padding: 10,
        borderRadius: 7,
        marginTop: 4,
        borderColor: '#5ca1f7'
    },
    inputBig: {
        height: 90,
        borderWidth: 1,
        padding: 10,
        borderRadius: 7,
        marginTop: 4,
        textAlignVertical: 'top',
        borderColor: '#5ca1f7',
    },
    formGroup: {
        marginHorizontal: 30,
        marginVertical: 7,
    },
    heading: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "600",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "#5ca1f7",
        marginTop: 15,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
    },
    button2: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 6,
        marginTop: 15,
        borderWidth: 1,
    },
    text2: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
    },
    modalView: {
        height: 210,
        width: 280,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})
