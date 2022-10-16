import { View, TextInput } from "react-native";
import React from "react";

const InputField = ({
  placeholderText,
  handleChange,
  style,
  placeholderTextColor,
  icons,
  type,
  autoCompleteType,
}) => {
  return (
    <View className="my-4">
      <TextInput
        placeholder={placeholderText}
        onChangeText={handleChange}
        className={`text-right ${style}`}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={type}
        autoComplete={autoCompleteType}
      />
      {icons}
    </View>
  );
};

export default InputField;
