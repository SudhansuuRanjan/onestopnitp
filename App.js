import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import { Image, View, Text, StyleSheet } from 'react-native'
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Notes from './screens/Notes';
import SellBuy from './screens/SellBuy';
import LostFound from './screens/LostFound';
import Resources from './screens/Resources';
import Clubs from './screens/Clubs';
import Blogs from './screens/Blogs';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Updates from './screens/Updates';
import Events from './screens/Events';
import Welcome from './screens/Welcome';
import SignIn from './screens/SignIn';
import OpenLink from "./screens/OpenLink";
import Subject from "./screens/Subject";
import AuthContext from './context/AuthContext';
import NetInfo from "@react-native-community/netinfo";
import BlogDescription from "./screens/BlogDescription";
import ClubDetails from "./screens/ClubDetails";

const Stack = createNativeStackNavigator();



function LogoTitle({ text }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 30, height: 30 }}
        source={require('./assets/favicon.png')}
      />
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
}

function Title({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text2}>
        {text}
      </Text>
    </View>
  );
}

function LocalNavigator() {
  const { auth } = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eeeeee',
        },
        headerTintColor: '#111',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'pink',
        },
      }}>

      {auth ? (
        <>
          <Stack.Screen
            name='HomeScreen'
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Notes'
            component={Notes}
            options={{ headerTitle: (props) => <Title text="Notes" /> }}
          />
          <Stack.Screen
            name='SellBuy'
            component={SellBuy}
            options={{ headerTitle: (props) => <Title text="Sell/Buy" /> }}
          />
          <Stack.Screen
            name='LostFound'
            component={LostFound}
            options={{ headerTitle: (props) => <Title text="Lost/Found" /> }}
          />
          <Stack.Screen
            name='Resources'
            component={Resources}
            options={{ headerTitle: (props) => <Title text="Resources" /> }}
          />
          <Stack.Screen
            name='Subject'
            component={Subject}
            options={{ headerTitle: (props) => <Title text="Subject" /> }}
          />
          <Stack.Screen
            name='Download'
            component={OpenLink}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Clubs'
            component={Clubs}
            options={{ headerTitle: (props) => <Title text="Clubs" /> }}
          />
          <Stack.Screen
            name='Club'
            component={ClubDetails}
            options={{ headerTitle: (props) => <Title text="Club" /> }}
          />
          <Stack.Screen
            name='Blogs'
            component={Blogs}
            options={{ headerTitle: (props) => <Title text="Blogs" /> }}
          />
          <Stack.Screen
            name='BlogDesc'
            component={BlogDescription}
            options={{ headerTitle: (props) => <Title text="Blog" /> }}
          />
          <Stack.Screen
            name='Profile'
            component={Profile}
            options={{ headerTitle: (props) => <Title text="Profile" /> }}
          />
          <Stack.Screen
            name='Events'
            component={Events}
            options={{ headerTitle: (props) => <Title text="Events" /> }}
          />
          <Stack.Screen
            name='Updates'
            component={Updates}
            options={{ headerTitle: (props) => <Title text="Alerts" /> }}
          />
        </>
      ) : (
        <>
          <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
          <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default function App() {

  // NetInfo.addEventListener(networkState => {
  //   console.log("Connection type - ", networkState.type);
  //   console.log("Is connected? - ", networkState.isConnected);
  // });

  return (
    <AuthProvider>
      <NavigationContainer>
        <LocalNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '600',
    color: 'white'
  },
  text2: {
    fontSize: 18,
    marginLeft: 0,
    fontWeight: '600',
    color: '#111'
  }
})
