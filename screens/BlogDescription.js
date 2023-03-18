import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
const ProfileImg = require("../assets/profile.jpg");
import Icon from "react-native-vector-icons/Entypo";

const BlogDescription = ({ navigation, route }) => {
  const getMinutesRead = (content) => {
    const words = content.split(" ");
    const minutes = Math.ceil(words.length / 200);
    return minutes;
  };

  const getDate = (Timestamp) => {
    const date = new Date(Timestamp.seconds * 1000);
    return date.toDateString();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={styles.profile}>
          <Image source={ProfileImg} style={styles.profileImg} />
          <View>
            <Text style={styles.profileName}>
              {route.params.blog.user.displayName}
            </Text>
            <View style={styles.blogDetail}>
              <Text style={{ color: "gray", fontSize: 14 }}>
                {getDate(route.params.blog.createdAt)}
              </Text>
              <Icon
                name="dot-single"
                style={{ marginHorizontal: 5 }}
                size={10}
                color="grey"
              />
              <Text style={{ color: "gray", fontSize: 14 }}>
                {getMinutesRead(route.params.blog.blogContent)} min read ✨
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.blogHeading}>{route.params.blog.blogTitle}</Text>

        <Image
          source={{
            uri: route.params.blog.img,
          }}
          style={styles.blogImg}
        />

        <View style={{ marginBottom: 50 }}>
          <Text style={styles.blogPara}>{route.params.blog.blogContent}</Text>
        </View>
      </View>

      <View
        style={{
          paddingVertical: 20,
          width: "100%",
          backgroundColor: "#1111",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontWeight: "600", color: "#555" }}>AUTHOR</Text>

        <View style={{ flexDirection: "row", marginTop: 20, marginBottom: 10 }}>
          <Image source={ProfileImg} style={styles.profileImgSm} />
          <View>
            <Text style={styles.profileName}>
              {route.params.blog.user.displayName}
            </Text>
            <Text style={styles.about}>{route.params.blog.user.about}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default BlogDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
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
    fontWeight: "500",
  },
  blogDetail: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5,
  },
  blogHeading: {
    fontSize: 22,
    fontWeight: "700",
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
    color: "#3c4753",
  },
  about: {
    color: "#555",
    maxWidth: 300,
  },
});
