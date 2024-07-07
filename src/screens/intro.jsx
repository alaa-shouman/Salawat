import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Intro = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.reset({
        index: 1,
        routes: [
          { name: "Home" },
        ],
      });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <View className="flex-1 justify-center items-center bg-[#588157]">
      <Image source={require("../../assets/mosque.png")} className="w-48 h-48" />
    </View>
  );
};

export default Intro;

