import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import firestore from "@react-native-firebase/firestore";

const Updates = () => {
  const [alerts, setAlerts] = useState();
  const [loading, setLoading] = useState(true);

  const alertRef = firestore().collection("Alerts");

  useEffect(() => {
    alertRef.onSnapshot((querySnapshot) => {
      const alerts = [];
      querySnapshot.forEach((doc) => {
        alerts.push(doc.data());
      });
      setAlerts(alerts);
      setLoading(false);
      // console.log(alerts);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 200,
          }}
        >
          <ActivityIndicator size="large" color="#5ca1f7" />
        </View>
      ) : (
        <View style={{ paddingHorizontal: 10 }}>
          {alerts.map((alert, index) => (
            <View key={index} style={{marginVertical:5}}>
                <Text style={styles.date}>18-05-2022</Text>
              <View style={styles.notifContainer}>
                <View style={styles.icon}>
                  <Icon
                    name="notifications"
                    style={{ marginHorizontal: 5 }}
                    size={22}
                    color="#5ca1f7"
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{alert.title}</Text>
                  <Text style={styles.desc}>{alert.description}</Text>
                  <Text style={styles.time}>08:30 pm</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
  },
  notifContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    marginHorizontal: 23,
    borderRadius: 18,
    alignSelf: "center",
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: "#dfeefe",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    paddingLeft: 15,
  },
  title: {
    fontWeight: "600",
    fontSize: 17,
    color: "#3c4753",
  },
  desc: {
    color: "#889399",
    paddingTop: 5,
  },
  time: {
    color: "#689399",
    textAlign: "right",
    paddingTop: 2,
    fontSize:13,
  },
  date:{
    paddingHorizontal:10,
    color:'grey',
    fontSize:13,
  }
});

export default Updates;
