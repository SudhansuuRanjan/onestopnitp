import Profile from "./Profile";
import Updates from "./Updates";
import Events from "./Events";
import HomeScreen from "./HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

// Screen Names
const homeName = "Home";
const profileName = "Profile";
const updateName = "Alerts";
const eventName = "Events";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName={Home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === profileName) {
              iconName = focused ? "person" : "person-outline";
            } else if (rn === updateName) {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (rn === eventName) {
              iconName = focused ? "calendar" : "calendar-outline";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#3c4753",
          tabBarInactiveTintColor: "#889399",
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10,
            marginTop: -10,
          },
          tabBarStyle: [
            {
              display: "flex",
              height: 65,
            },
            null,
          ],
        })}
      >
        <Tab.Screen
          name={homeName}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name={eventName} component={Events} />
        <Tab.Screen name={updateName} component={Updates} />
        <Tab.Screen
          name={profileName}
          component={Profile}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Home;
