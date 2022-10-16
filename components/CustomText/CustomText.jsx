import { Text } from "react-native";
import React from "react";

const CustomText = ({ children, style }) => {
  return <Text className={style}>{children}</Text>;
};

export default CustomText;
