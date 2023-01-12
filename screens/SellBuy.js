import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SellPostScreen from './SellBuy/SellPostScreen';
import BuyPostScreen from './SellBuy/BuyPostScreen'
import UserPostScreen from './SellBuy/UserPostScreen';



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
                <Tab.Screen name="For Sale" component={SellPostScreen} />
                <Tab.Screen name="Wanted" component={BuyPostScreen} />
                <Tab.Screen name="Your Posts" component={UserPostScreen} />
            </Tab.Navigator>
        </>
    )
}


export default LostFound