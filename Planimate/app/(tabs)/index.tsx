import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import displayImage from '@/assets/images/display-picture2.png';
import { router } from 'expo-router';

const index = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <SafeAreaView className="flex-1">
        <View className="flex-1 justify-center items-center">
          <View className="relative rounded-[100px] bg-[#1bb1b2] w-[200px] h-[200px] justify-center items-center">
            <Image
              source={displayImage}
              style={{
                position: 'absolute',
                top: '-30%',
                width: 300,
                height: 300,
                borderRadius: 100,
              }}
            />
          </View>

          <View className="mx-10 mt-5">
            <Text className="text-center text-3xl text-gray-900 font-bold">Get Organized with your life</Text>
            <Text className="text-center text-xl text-gray-500 font-medium mt-5">
              Planimate is a simple and effective to-do list and task manager app which helps you manage time
            </Text>
          </View>

          <View className="w-full mt-5 px-10">
            <TouchableOpacity
              onPress={() => router.push('/category')}
              className="w-full bg-[#1bb1b2] rounded-xl min-h-[62px] flex-row justify-center items-center"
            >
              <Text className="text-white font-bold text-lg">Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default index;
