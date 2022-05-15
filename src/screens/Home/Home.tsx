import React, { useRef, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  Animated,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/core";
import { RootStackParamList } from "../RootStackPrams";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const HomeScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const fadeAnim = useRef(new Animated.Value(0)).current;
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
        opacity: fadeAnim,
      }}
    >
      <ImageBackground
        style={styles.mainImage}
        resizeMode="cover"
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        source={require("../../assets/images/banner.png")}
      ></ImageBackground>

      <View style={styles.mainHeadlineContainer}>
        <Text style={styles.mainHeadlineContainerTitle}>Fashion sale</Text>
        <TouchableHighlight
          style={styles.mainHeadlineContainerButton}
          onPress={() => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            navigation.navigate("Profile");
          }}
        >
          <Text style={styles.mainHeadlineContainerButtonText}>Check</Text>
        </TouchableHighlight>
      </View>
    </Animated.View>
  );
};

export default HomeScreen;
