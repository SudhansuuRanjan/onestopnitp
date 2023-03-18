import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
const ProfileImg = require("../assets/profile.jpg");
import AuthContext from "../context/AuthContext";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { ScrollView } from "react-native-gesture-handler";
import Icon1 from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getFormattedName = (foo) => {
  const words = foo ? foo.toLowerCase().split(" ") : "";

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
};

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { setAuthorized, user, setUser } = useContext(AuthContext);

  const signOut = async () => {
    setUser(null);
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
      setModalVisible(!modalVisible);
      // set user in async storage to null
      await AsyncStorage.removeItem("user");
      await setAuthorized(false);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Do you want to LogOut?</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                paddingHorizontal: 20,
              }}
            >
              <Pressable
                style={{}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text
                  style={{
                    color: "#2196F3",
                    fontWeight: "500",
                    fontSize: 16,
                    padding: 10,
                  }}
                >
                  No
                </Text>
              </Pressable>

              <Pressable
                style={[styles.modalbutton, styles.buttonClose]}
                onPress={signOut}
              >
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.container}>
        <View style={styles.profile}>
          <View>
            <Image
              source={{
                uri: user?.photoURL,
              }}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.name}>
              {user ? getFormattedName(user?.displayName) : "Name"}
            </Text>
            <Text style={styles.itemText}>Student</Text>
            <Text style={styles.course}>BTech EE 2021</Text>
            <Pressable
              style={{
                borderWidth: 1,
                backgroundColor: "#f6eeff",
                paddingVertical: 4,
                paddingHorizontal: 10,
                borderRadius: 10,
                width: 150,
                alignItems: "center",
                borderColor: "#5356b6",
                marginTop: 15,
              }}
            >
              <Text style={{ fontWeight: "500", color: "#5356b6" }}>
                Edit Profile
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.detail1}>
          <Text style={{ color: "black", fontSize: 16, fontWeight: "500" }}>
            About
          </Text>
          <Text style={styles.about}>
            A tech enthusiast who is keen to develop new skills | Contact Me:
            sudhanshuranjan2k18@gmail.com
          </Text>

          <Text
            style={{
              color: "black",
              fontSize: 16,
              fontWeight: "500",
              marginTop: 5,
            }}
          >
            Interests
          </Text>
          <View>
            <Text style={styles.about}>
              Full Stack Development | Ui/Ux | Android
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              color: "#5356b6",
              fontSize: 14,
              fontWeight: "600",
              paddingHorizontal: 15,
              marginTop: 15,
              marginBottom: 10,
            }}
          >
            TROUBLESHOOTHING
          </Text>

          <View style={styles.individualCont}>
            <Icon1
              style={{ marginTop: 2 }}
              name="md-warning"
              size={22}
              color="grey"
            />
            <View>
              <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 15 }}>
                Report an issue
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  marginLeft: 15,
                  marginRight: 15,
                  color: "grey",
                }}
              >
                Report any bugs in the app.
              </Text>
            </View>
          </View>

          <View style={styles.individualCont}>
            <Icon1
              style={{ marginTop: 2 }}
              name="rocket"
              size={22}
              color="grey"
            />
            <View>
              <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 15 }}>
                Request a feature or suggest an idea
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  marginLeft: 15,
                  marginRight: 15,
                  color: "grey",
                }}
              >
                Suggestions are always welcome, I'll try my best to include your
                idea in next update!
              </Text>
            </View>
          </View>

          <View style={styles.individualCont}>
            <Icon1
              style={{ marginTop: 2 }}
              name="md-download"
              size={22}
              color="grey"
            />
            <View>
              <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 15 }}>
                App Updates
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  marginLeft: 15,
                  marginRight: 15,
                  color: "grey",
                }}
              >
                Update to the latest version.
              </Text>
            </View>
          </View>

          <View style={styles.individualCont}>
            <Icon1
              style={{ marginTop: 2 }}
              name="heart"
              size={22}
              color="grey"
            />
            <View>
              <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 15 }}>
                Rate and Review
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  marginLeft: 15,
                  marginRight: 15,
                  color: "grey",
                }}
              >
                Give a 5 star and write what you love about the app.
              </Text>
            </View>
          </View>

          <View style={styles.individualCont}>
            <Icon1
              style={{ marginTop: 2 }}
              name="md-information-circle"
              size={22}
              color="grey"
            />
            <View>
              <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 15 }}>
                About App
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  marginLeft: 15,
                  marginRight: 15,
                  color: "grey",
                }}
              >
                Detailed info about app and developer.
              </Text>
            </View>
          </View>

          <View style={styles.individualCont}>
            <Icon1
              style={{ marginTop: 2 }}
              name="share-social"
              size={22}
              color="grey"
            />
            <View>
              <Text style={{ fontSize: 17, fontWeight: "600", marginLeft: 15 }}>
                Share App
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  marginLeft: 15,
                  marginRight: 15,
                  color: "grey",
                }}
              >
                Share the app with your friends and colligues.
              </Text>
            </View>
          </View>

          {/* <Icon name="keyboard-arrow-right" size={27} color="grey" /> */}
        </View>

        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
          style={[styles.button]}
        >
          <Text style={styles.buttonLabel}>LogOut</Text>
        </TouchableOpacity>

        <Text
          style={{ textAlign: "center", marginVertical: 20, color: "grey" }}
        >
          App Version 1.0.0
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: "center",
    height: 90,
    width: 90,
    marginRight: 20,
    borderRadius: 100,
  },
  profile: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingTop: 25,
  },
  detail1: {
    marginTop: 10,
    paddingHorizontal: 20,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#3c4753",
    paddingTop: 5,
  },
  course: {
    fontSize: 16,
    fontWeight: "500",
    color: "#5356b6",
  },
  button: {
    paddingHorizontal: 45,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: "#5356b6",
    marginVertical: 20,
    marginTop: 60,
    alignSelf: "center",
    width: "90%",
  },
  buttonLabel: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "500",
  },
  about: {
    paddingVertical: 5,
    color: "#3c4753",
    fontWeight: "500",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#aaaa",
  },
  modalView: {
    height: 180,
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
  modalbutton: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 40,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 17,
  },
  itemWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomWidth: 0.6,
    borderBottomColor: "#ddd",
    paddingBottom: 20,
    paddingTop: 20,
  },
  itemHeading: {
    fontSize: 17,
    fontWeight: "600",
  },
  itemText: {
    fontSize: 14,
    color: "grey",
    maxWidth: "90%",
    fontWeight: "500",
  },
  individualCont: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 7,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
});

export default Profile;
