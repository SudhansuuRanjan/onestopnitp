import { Button, StyleSheet, Text, View,Alert } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

const OpenLink = ({ navigation, route }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.rounded}>
          <Text style={styles.text}>
            {route.params.url.substring(0, 40) + "..."}
          </Text>
        </View>
        <View style={styles.btn}>
          <Button
            style={styles.button}
            title="x"
            onPress={() => Alert.alert("Url Copied to clipboard!")}
          />
        </View>
      </View>
      <WebView source={{ uri: route.params.url }} />
    </>
  );
};

export default OpenLink;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#333",
    color: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rounded: {
    borderRadius: 20,
    backgroundColor: "#111",
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
  },
  text: {
    color: "#fff",
  },
  btn: {
    marginLeft: 10,
  },
  button: {
    height: 5,
    backgroundColor: "#111",
    borderRadius:10
  },
});
