import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import Explore from '../screens/Main/Explore';
import Saved from '../screens/Main/Saved';
import Map from '../screens/Main/Map';
import Profile from '../screens/Main/Profile';
import Like from '../screens/Main/Like';
import colors from '../colors';
import utils from '../utils';
import {View} from 'react-native';

const Main = createBottomTabNavigator();

export default () => (

    <Main.Navigator
        tabBarOptions={{
                activeTintColor: colors.red,
                tabStyle: {
                        paddingTop:10
                },
                labelStyle: {
                        textTransform: "uppercase",
                        fontWeight: "600"
                }
        }}
        screenOptions = {({route}) => ({
                tabBarIcon: ({focused}) => {
                        const isAndroid = utils.isAndroid();
                        let iconName = `${isAndroid ? "md-" : "ios-"}`;
                        if (route.name === "Explore") {
                                iconName += "search"
                        } else if (route.name === "Saved") {
                                iconName += "save"
                        } else if (route.name === "Map") {
                                iconName += "map"
                        } else if (route.name === "Profile") {
                                iconName += "person"
                        } else if (route.name === "Like") {
                                iconName += "heart"
                        }
                        return (
                            <Ionicons
                                name={iconName}
                                size={26}
                                color={focused ? colors.red : "grey"}
                            />
                        )
                }
        })}

    >
        <Main.Screen name="Like" component={Like} />
        <Main.Screen name="Profile" component={Profile} />
        <Main.Screen name="Saved" component={Saved} />
        <Main.Screen name="Explore" component={Explore} />
        <Main.Screen name="Map" component={Map} />
    </Main.Navigator>
)
