import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {router} from "expo-router";

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    textStyle?: string;
    containerStyle?: string;
}

const customButton = ({onPress, title, textStyle='', containerStyle='' }: CustomButtonProps) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        className={`w-full bg-[#1bb1b2] rounded-xl min-h-[62px] flex-row justify-center items-center ${containerStyle}`}
      >
        <Text className={`text-white font-bold text-lg ${textStyle}`}>{title}</Text>
      </TouchableOpacity>
    );
}
export default customButton;
