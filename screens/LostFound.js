import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import LostPostScreen from './LostFound/LostPostScreen';
import FoundPostScreen from './LostFound/FoundPostScreen';
import UserPostScreen from './LostFound/UserPostScreen';



const Tab = createMaterialTopTabNavigator();

const LostFound = () => {

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 13, fontWeight: '500' },
                    tabBarStyle: { backgroundColor: 'white' },
                    tabBarIndicatorStyle: {
                        backgroundColor: '#5ca1f7'
                    }
                }}
            >
                <Tab.Screen name="Lost" component={LostPostScreen} />
                <Tab.Screen name="Found" component={FoundPostScreen} />
                <Tab.Screen name="Your Posts" component={UserPostScreen} />
            </Tab.Navigator>
        </>
    )
}

export default LostFound;