import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
const image = {
  uri: "https://kcnit.ac.in/wp-content/uploads/2022/06/myhc_92371.jpg",
};

const ResourceDescription = ({ route, navigation }) => {
  const resource = {
    subjectCode: 101,
    notes: [
      {
        name: "Electrical Engg Book DP Kothari",
        url: "https://drive.google.com/file/d/11kfBnNYZ3LU9sYo_PTUJPVJ0WFPhDiwl/view?usp=sharing",
        isVideo: false,
      },
      {
        name: "Electrical Technology Book",
        url: "https://drive.google.com/file/d/16LJqxGAZgM24jUJvHxh4DG1iC0Iuw7jP/view?usp=sharing",
        isVideo: false,
      },
      {
        name: "Electrical Engg. Book VK Mehta",
        url: "https://drive.google.com/file/d/16MopcCSmhOGDj2zJaede-2z41eqkPFsH/view?usp=sharing",
        isVideo: false,
      },
    ],
    pyqs: [
      {
        name: "Mid Sem 2020",
        url: "https://drive.google.com/file/d/16S_n9Shl5ZGDLtptAAvQ_r43BYGn8Lh5/view?usp=sharing",
      },
      {
        name: "End Sem 2020",
        url: "https://drive.google.com/file/d/16S_n9Shl5ZGDLtptAAvQ_r43BYGn8Lh5/view?usp=sharing",
      },
    ],
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.electricalBg}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.headingText}>{route.params.name}</Text>
        </ImageBackground>
      </View>

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>FrontEnd</Text>
        <View style={styles.horizontalRule}></View>
      </View>

      <ScrollView>
        {resource.notes.map((note, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.noteContainer}
              onPress={() => navigation.navigate("Download", { url: note.url })}
            >
              <View style={styles.resourceItem}>
                {note.isVideo ? (
                  <Text style={styles.label2}>Watch</Text>
                ) : (
                  <Text style={styles.label1}>Read</Text>
                )}
                <Text style={styles.text}>{note.name}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ResourceDescription;

const styles = StyleSheet.create({
  electricalBg: {
    height: 120,
    width: "100%",
    justifySelf: "center",
    alignSelf: "center",
    backgroundColor: "blue",
    marginBottom: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  headingText: {
    color: "white",
    fontSize: 25,
    lineHeight: 120,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#111000c0",
  },
  headingText: {
    color: "white",
    fontSize: 25,
    lineHeight: 120,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#111000c0",
  },
  headingContainer: {
    paddingHorizontal: "6%",
    paddingTop: 20,
  },
  heading: {
    fontWeight: "600",
    fontSize: 18,
  },
  horizontalRule: {
    height: 1,
    width: "100%",
    backgroundColor: "#aaaa",
    marginVertical: 3,
    marginBottom: 10,
  },
  noteContainer: {
    paddingBottom: 20,
    paddingHorizontal: "6%",
  },
  label1: {
    backgroundColor: "#FEFCBF",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontWeight: "600",
    color: "#744210",
    marginRight: 5,
    fontSize: 13,
  },
  label2: {
    backgroundColor: "#E9D8FD",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    fontWeight: "600",
    color: "#44337A",
    fontSize: 13,
    marginRight: 5,
  },
  resourceItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "600",
    fontSize: 15,
    color: "#2c5282",
  },
});
