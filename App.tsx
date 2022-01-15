/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,Button,
    View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon } from './src/assets/svgs/HomeIcon';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <View>
                <View>
                  <HomeIcon height={20} width={20} color='#DB3022'/>
                </View>
              </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {


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
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
