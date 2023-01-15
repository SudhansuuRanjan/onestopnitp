import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Modal,
  TextInput,
  ActivityIndicator,
  Alert,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useCallback, useContext } from "react";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/Entypo";
import AuthContext from "../../context/AuthContext";
import storage from "@react-native-firebase/storage";
import firestore from "@react-native-firebase/firestore";

const getDate = (Timestamp) => {
  const date = new Date(Timestamp.seconds * 1000);
  return date.toDateString() + " " + date.toLocaleTimeString();
};

const UserBlogScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [image, setImage] = useState(null);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState();
  const [status, setStatus] = useState(false);

  //https://firebasestorage.googleapis.com/v0/b/onestopnitp.appspot.com/o/defaultpost.png?alt=media&token=3b706c59-bae6-4ca6-afd8-3c363f214b80

  const { user } = useContext(AuthContext);

  const blogRef = firestore().collection("Blogs");

  const resetForm = async () => {
    setImage(null);
    setBlogContent("");
    setBlogTitle("");
  };

  const validateInput = () => {
    let temp = true;
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
      console.log(url);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadData = async (imgUrl) => {
    console.log("Upload Data!");
    const data = {
      img: imgUrl,
      blogContent,
      blogTitle,
      createdAt: firestore.Timestamp.fromDate(new Date()),
      blogLength: Math.ceil(blogContent.trim().split(/\s+/).length / 150),
      user: {
        displayName: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        uid: user.uid,
        about: "A Javascript enthusiast.",
      },
      creater: user.email,
    };

    await blogRef
      .add(data)
      .then(() => {
        console.log("Post Created");
      })
      .catch((error) => {
        alert(error);
      });
    // console.log(data);

    await resetForm();
    setStatus(false);
  };

  const deletePost = async (postId) => {
    await blogRef
      .doc(postId)
      .delete()
      .then(() => {
        console.log("Post deleted!");
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <View style={styles.modalView}>
              <Text
                style={{ fontSize: 18, textAlign: "center", fontWeight: "500" }}
              >
                {status === true ? "Creating Post" : "Post Created!"}
              </Text>
              {status && (
                <ActivityIndicator
                  style={{ paddingVertical: 30 }}
                  size="large"
                  color="#5ca1f7"
                />
              )}
              {!status && (
                <Pressable
                  style={{
                    backgroundColor: "#2196F3",
                    paddingHorizontal: 25,
                    borderRadius: 10,
                    paddingVertical: 8,
                    marginTop: 60,
                  }}
                  onPress={() => setModalVisible1(false)}
                >
                  <Text
                    style={{ color: "white", fontWeight: "500", fontSize: 16 }}
                  >
                    Done
                  </Text>
                </Pressable>
              )}
            </View>
          </View>
        </Modal>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 20,
            paddingTop: 5,
          }}
        >
          <TouchableOpacity
            style={{ paddingLeft: 10, marginRight: 20 }}
            onPress={() => setModalVisible(false)}
          >
            <Icon name="cross" size={32} color="#3c4753" />
          </TouchableOpacity>
          <Text style={styles.heading}>Compose Blog Post</Text>
        </View>

        <ScrollView>
          <View style={styles.formGroup}>
            <Image
              source={{
                uri: image
                  ? image
                  : "https://assets.glginsights.com/wp-content/uploads/2021/08/D1_Tech_HeaderImage.jpg",
              }}
              style={{ width: 180, height: 150, alignSelf: "center" }}
            />
            <Pressable
              style={{
                backgroundColor: "white",
                borderWidth: 1.5,
                borderColor: "#5ca1f7",
                paddingHorizontal: 10,
                paddingVertical: 4,
                width: 110,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 20,
                marginTop: 15,
              }}
              onPress={pickImage}
            >
              <Text style={{ color: "#5ca1f7", fontWeight: "500" }}>
                Select Image
              </Text>
            </Pressable>
          </View>

          <View style={styles.formGroup}>
            <Text style={{ color: "#5ca1f7", fontWeight: "500" }}>
              Blog Title
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={(e) => setBlogTitle(e)}
              value={blogTitle}
              placeholder="Marvels of the world.."
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={{ color: "#5ca1f7", fontWeight: "500" }}>
              Blog Content
            </Text>
            <TextInput
              style={styles.inputBig}
              multiline={true}
              onChangeText={(e) => setBlogContent(e)}
              value={blogContent}
              placeholder="Write blog content here..."
            />
          </View>

          <View style={styles.formGroup}>
            <Pressable onPress={uploadImage} style={styles.button}>
              <Text style={styles.text}>Post</Text>
            </Pressable>
          </View>
        </ScrollView>
      </Modal>

      <Text>You haven't written any blogs.</Text>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.plusButton}
      >
        <Icon name="plus" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default UserBlogScreen;

const styles = StyleSheet.create({
  blogCardContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignSelf: "center",
    width: "100%",
    paddingVertical: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: "#2222",
    backgroundColor: "white",
  },
  smallProfile: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  smallImg: {
    height: 25,
    width: 25,
    borderRadius: 25,
    marginRight: 10,
  },
  smallName: {
    color: "#333",
    fontWeight: "500",
  },
  cardBody: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 8,
  },
  cardHeadContainer: {
    width: "70%",
  },
  cardHead: {
    fontSize: 17,
    fontWeight: "800",
    color: "#3c4753",
  },
  cardImgCont: {
    width: "30%",
  },
  cardImg: {
    height: 60,
    width: 100,
    borderRadius: 5,
  },
  cardFoot: {
    flexDirection: "row",
    alignItems: "center",
  },
  plusButton: {
    backgroundColor: "#5ca1f7",
    position: "absolute",
    bottom: 40,
    right: 30,
    height: 60,
    width: 60,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  heading: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
  },
  input: {
    height: 37,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    marginTop: 4,
    borderColor: "#5ca1f7",
  },
  inputBig: {
    height: 300,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    marginTop: 4,
    textAlignVertical: "top",
    borderColor: "#5ca1f7",
  },
  formGroup: {
    marginHorizontal: 30,
    marginVertical: 7,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
