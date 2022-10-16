import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomButton from "../../components/CustomButton/CustomButton";
import CustomText from "../../components/CustomText/CustomText";

import bgHeader from "../../assets/background.jpg";

const WelcomeScreen = ({ props }) => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 relative ">
      <ImageBackground
        source={bgHeader}
        resizeMode="cover"
        className="flex-1 justify-end items-center brightness-150"
        blurRadius={4}
      >
        <View className="mb-4 w-full relative z-10 ">
          <View className="flex-col items-center">
            <Text className="text-white font-semibold text-3xl my-2">
              Xander
            </Text>
            <Text className="text-white text-md font-semibold">
              خودآموزی، کسب تجربه و ورود به بازار کار
            </Text>
          </View>
          <View className="mt-4">
            <CustomButton
              style="text-white font-semibold text-center"
              title="ثبت نام"
              onPress={() => navigation.navigate("Login")}
            />
            <CustomButton
              style="text-white font-semibold text-center"
              title="ورود"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
