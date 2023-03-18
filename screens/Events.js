import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/Entypo";
import firestore from "@react-native-firebase/firestore";

const PastEvents = () => {
  const [pastEvents, setPastEvents] = useState();
  const [loading, setLoading] = useState(true);

  const eventRef = firestore().collection("Events");
  useEffect(() => {
    // get all events that have passed and sort them by date
    eventRef
      .where("date", "<", firestore.Timestamp.fromDate(new Date()))
      .onSnapshot((querySnapshot) => {
        const events = [];
        querySnapshot.forEach((doc) => {
          const { time, name, desc, imgUrl, location, tags } = doc.data();
          events.push({
            name,
            desc,
            imgUrl,
            location,
            tags,
            time,
            eventDate: new Date(doc.data().date.seconds * 1000),
          });
        });
        setPastEvents(events);
        setLoading(false);
        // console.log(events);
      });
  }, []);

  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
      <View style={{ paddingBottom: 50 }}>
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
        ) : pastEvents.length === 0 ? (
          <Text style={{ marginTop: 200, textAlign: "center" }}>
            No Past Events
          </Text>
        ) : (
          <View>
            {pastEvents.map((e, index) => (
              <View key={index} style={styles.eventCard}>
                <View>
                  <Image source={{ uri: e.imgUrl }} style={styles.eventImg} />

                  <View style={styles.locationCont}>
                    <Icon
                      name="location-outline"
                      style={{ marginHorizontal: 5 }}
                      size={22}
                      color="white"
                    />
                    <Text style={styles.locationText}>{e.location}</Text>
                  </View>
                </View>
                <View style={styles.cardHead}>
                  <Text style={styles.cardData}>
                    {e.eventDate.toDateString()}
                  </Text>
                  <Icon2
                    name="dot-single"
                    style={{ marginHorizontal: 5 }}
                    size={12}
                    color="grey"
                  />
                  <Text style={styles.cardData}>{e.time}</Text>
                </View>
                <View style={styles.cardBody}>
                  <Text style={styles.cardTitle}>{e.name}</Text>
                  <Text style={styles.cardDesc}>{e.desc}</Text>
                </View>
                <View style={styles.footer}>
                  {e.tags.map((tag, index) => (
                    <Text key={index} style={styles.hashtag}>
                      #{tag}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const UpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState();
  const [loading, setLoading] = useState(true);

  const eventRef = firestore().collection("Events");
  useEffect(() => {
    eventRef
      .where("date", ">", firestore.Timestamp.fromDate(new Date()))
      .onSnapshot((querySnapshot) => {
        const events = [];
        querySnapshot.forEach((doc) => {
          const { time, name, desc, imgUrl, location, tags } = doc.data();
          events.push({
            name,
            desc,
            imgUrl,
            location,
            tags,
            time,
            eventDate: new Date(doc.data().date.seconds * 1000),
          });
        });
        setUpcomingEvents(events);
        setLoading(false);
        // console.log(events);
      });
  }, []);

  return (
    <ScrollView style={{ flex: 1, paddingHorizontal: 10 }}>
      <View style={{ paddingBottom: 50 }}>
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
        ) : upcomingEvents.length === 0 ? (
          <Text style={{ marginTop: 200, textAlign: "center" }}>
            No Upcoming Event(s)
          </Text>
        ) : (
          <View>
            {upcomingEvents.map((e, index) => (
              <View key={index} style={styles.eventCard}>
                <View>
                  <Image source={{ uri: e.imgUrl }} style={styles.eventImg} />

                  <View style={styles.locationCont}>
                    <Icon
                      name="location-outline"
                      style={{ marginHorizontal: 5 }}
                      size={22}
                      color="white"
                    />
                    <Text style={styles.locationText}>{e.location}</Text>
                  </View>
                </View>
                <View style={styles.cardHead}>
                  <Text style={styles.cardData}>
                    {e.eventDate.toDateString()}
                  </Text>
                  <Icon2
                    name="dot-single"
                    style={{ marginHorizontal: 5 }}
                    size={12}
                    color="grey"
                  />
                  <Text style={styles.cardData}>{e.time}</Text>
                </View>
                <View style={styles.cardBody}>
                  <Text style={styles.cardTitle}>{e.name}</Text>
                  <Text style={styles.cardDesc}>{e.desc}</Text>
                </View>
                <View style={styles.footer}>
                  {e.tags.map((tag, index) => (
                    <Text key={index} style={styles.hashtag}>
                      #{tag}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const Tab = createMaterialTopTabNavigator();

const Events = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 13, fontWeight: "500" },
          tabBarStyle: { backgroundColor: "#ffffff" },
          tabBarIndicatorStyle: {
            backgroundColor: "#5ca1f7",
          },
        }}
      >
        <Tab.Screen name="Upcoming Events" component={UpcomingEvents} />
        <Tab.Screen name="Past Events" component={PastEvents} />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  eventImg: {
    height: 200,
  },
  eventCard: {
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 30,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  locationCont: {
    backgroundColor: "#111000c0",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 5,
    position: "absolute",
    bottom: 0,
  },
  locationText: {
    color: "white",
    fontSize: 16,
  },
  cardHead: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  cardData: {
    color: "#666",
  },
  cardBody: {
    paddingHorizontal: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#3c4753",
  },
  cardDesc: {
    color: "#889399",
  },
  footer: {
    padding: 15,
    paddingBottom: 20,
    flexDirection: "row",
  },
  hashtag: {
    backgroundColor: "#2222",
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: "flex-start",
    borderRadius: 5,
    color: "#444",
    fontWeight: "500",
    marginRight: 5,
  },
});

export default Events;
