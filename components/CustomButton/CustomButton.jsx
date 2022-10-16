import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ title, color, style, textColor, onPress }) => {
  return (
    <TouchableOpacity
      className="bg-[#5468FF] p-4 rounded-xl w-[85%] mx-auto my-2"
      onPress={onPress}
    >
      <Text className={style}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
