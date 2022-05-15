import React, { useRef, useEffect } from "react";
import { Text, Animated } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";

type profileScreenProp = StackNavigationProp<RootStackParamList, "Auth">;

const ProfileScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const navigation = useNavigation<profileScreenProp>();

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    return Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      <Text style={styles.text}>ProfileScreen</Text>
    </Animated.View>
  );
};

export default ProfileScreen;
