import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState, useContext } from "react";
const ProfileImg = require("../assets/profile.jpg");
import AuthContext from "../context/AuthContext";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";

const getFormattedName = (foo) => {
  const words = foo.toLowerCase().split(" ");

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
      await setAuthorized(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
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
              {getFormattedName(user?.displayName)}
            </Text>
            <Text style={styles.itemText}>Student</Text>
            <Text style={styles.course}>BTech EE 2021</Text>
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
              color: "black",
              fontSize: 22,
              fontWeight: "500",
              paddingHorizontal: 15,
            }}
          >
            Settings
          </Text>
        </View>

        <View style={styles.itemWrap}>
          <View>
            <Text style={styles.itemHeading}>Edit Profile</Text>
            <Text style={styles.itemText}>
              Customize your profile, update your profile photo or delete your
              account.
            </Text>
          </View>

          <View>
            <Icon name="keyboard-arrow-right" size={27} color="grey" />
          </View>
        </View>

        <View style={styles.itemWrap}>
          <View>
            <Text style={styles.itemHeading}>Edit Profile</Text>
            <Text style={styles.itemText}>
              Customize your profile, update your profile photo or delete your
              account.
            </Text>
          </View>

          <View>
            <Icon name="keyboard-arrow-right" size={27} color="grey" />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
          style={[styles.button]}
        >
          <Text style={styles.buttonLabel}>LogOut</Text>
        </TouchableOpacity>
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
    paddingTop: 15,
  },
  detail1: {
    marginTop: 20,
    paddingHorizontal: 20,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "#3c4753",
  },
  course: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "500",
    color: "#04a8d5",
  },
  button: {
    paddingHorizontal: 45,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: "#5ca1f7",
    marginTop: 80,
    alignSelf: "center",
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
    fontSize: 18,
    fontWeight: "600",
  },
  itemText: {
    color: "grey",
    maxWidth: "90%",
    fontWeight: "500",
  },
});

export default Profile;
