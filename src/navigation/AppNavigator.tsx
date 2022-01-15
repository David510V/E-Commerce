import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,Button,
    View,
} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon } from "../assets/svgs/HomeIcon";
import HomeScreen from "../screens/Home/Home";
import CategoriesScreen from "../screens/Shop/Categories";
import FavoriesScreen from "../screens/Favorites/Favotires";
import ProfileScreen from "../screens/Profile/Profile";
import BagScreen from "../screens/Bag/Bag";
import ShopScreen from "../screens/Shop/Categories";
const Tab = createBottomTabNavigator();
const AppNavigator = () => {


    return (
      
      <NavigationContainer>
      <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#DB3022',
          tabBarInactiveTintColor: '#9B9B9B',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          
        tabBarIcon: ({color, focused}) => (
          <View>
            <View>
              <HomeIcon height={20} width={20} color={focused ? "#DB3022" : "#9B9B9B"}/>
            </View>
          </View>
          )
      }}/>
       
      </Tab.Navigator>
    </NavigationContainer>
    );
};

export default AppNavigator