import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import CustomText from "../../components/CustomText/CustomText";
import InputField from "../../components/InputField/InputField";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton/CustomButton";
import useKeyboard from "../../hook/useKeyboard";

const LoginScreen = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const isOpenKeyboard = useKeyboard();

  console.log("isOpenKeyboard", isOpenKeyboard);

  return (
    <View
      className={`flex-1 bg-[#181A20] items-center ${
        isOpenKeyboard ? "justify-start pt-10" : "justify-center"
      }`}
    >
      <View className="flex-col ">
        <CustomText style="text-2xl text-white text-center my-3">
          خوش آمدید
        </CustomText>
        <CustomText style="font-lg text-[#55565C] text-center">
          لطفا به اکانت خود وارد شوید
        </CustomText>
      </View>
      <View className="w-full mt-10">
        <InputField
          placeholderTextColor="#55565C"
          placeholderText="ایمیل کاربری"
          style="bg-[#262A34] rounded-xl p-4 placehol text-white w-[85%] mx-auto relative"
          autoCompleteType="email"
          type={false}
          icons={
            <AntDesign
              name="user"
              size={20}
              color="#63646B"
              style={{ position: "absolute", left: "12%", top: 15 }}
            />
          }
        />
        <InputField
          placeholderTextColor="#55565C"
          placeholderText="رمز عبور"
          style="bg-[#262A34] rounded-xl p-4 placehol text-white w-[85%] mx-auto relative"
          autoCompleteType="password"
          type={isShowPassword ? false : true}
          icons={
            <AntDesign
              name="eyeo"
              size={20}
              color="#63646B"
              style={{ position: "absolute", left: "12%", top: 15 }}
              onPress={() => setIsShowPassword(!isShowPassword)}
            />
          }
        />
        <View className="my-2">
          <CustomButton
            style="text-white font-semibold text-center"
            title="ورود"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
