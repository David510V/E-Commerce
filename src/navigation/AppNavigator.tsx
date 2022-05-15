import React from "react";
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/Home/Home";
import CategoriesScreen from "../screens/Shop/Shop";
import FavoritesScreen from "../screens/Favorites/Favotires";
import ProfileScreen from "../screens/Profile/Profile";
import BagScreen from "../screens/Bag/Bag";
import ShopScreen from "../screens/Shop/Shop";

import { HomeIcon } from "../assets/svgs/HomeIcon";
import { ShopIcon } from "../assets/svgs/ShopIcon";
import { BagIcon } from "../assets/svgs/BagIcon";
import { FavoritesIcon } from "../assets/svgs/FavoritesIcon";
import { ProfileIcon } from "../assets/svgs/ProfileIcon";

const Tab = createBottomTabNavigator();

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
  },
};
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          unmountOnBlur: true,
          tabBarActiveTintColor: "#DB3022",
          tabBarInactiveTintColor: "#9B9B9B",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <View>
                  <HomeIcon
                    height={26}
                    width={30}
                    focused={focused}
                    color={focused ? "#DB3022" : "#9B9B9B"}
                  />
                </View>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <View>
                  <ShopIcon
                    height={24}
                    width={24}
                    focused={focused}
                    color={focused ? "#DB3022" : "#9B9B9B"}
                  />
                </View>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Bag"
          component={BagScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <View>
                  <BagIcon
                    focused
                    height={23}
                    width={24}
                    color={focused ? "#DB3022" : "#9B9B9B"}
                  />
                </View>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <View>
                  <FavoritesIcon
                    height={24}
                    width={24}
                    color={focused ? "#DB3022" : "#9B9B9B"}
                  />
                </View>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <View>
                  <ProfileIcon
                    height={24}
                    width={24}
                    color={focused ? "#DB3022" : "#9B9B9B"}
                  />
                </View>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
