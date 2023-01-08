import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home'
import Profile from '../screens/Profile';
import Updates from '../screens/Updates';
import Events from '../screens/Events';


// Screen Names
const homeName = "Home";
const profileName = "Profile";
const updateName = "Alerts";
const eventName = "Events";


const Tab = createBottomTabNavigator();


const Footer = () => {
    return (
        <Tab.Navigator initialRouteName={Home}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === profileName) {
                        iconName = focused ? 'person' : 'person-outline'
                    } else if (rn === updateName) {
                        iconName = focused ? 'notifications' : 'notifications-outline'
                    } else if (rn === eventName) {
                        iconName = focused ? 'calendar' : 'calendar-outline'
                    }

                    return <Icon name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: {
                    paddingTop: 10,
                },
                tabBarLabelStyle: {
                    paddingBottom: 10,
                    fontSize: 10
                },
                tabBarStyle: [
                    {
                        display: "flex"
                    },
                    null
                ]
            })}
        >

            <Tab.Screen name={homeName} component={Home} />
            <Tab.Screen name={eventName} component={Events} />
            <Tab.Screen name={updateName} component={Updates} />
            <Tab.Screen name={profileName} component={Profile} />

        </Tab.Navigator>
    )
}



export default Footer