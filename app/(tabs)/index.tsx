import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import displayImage from '@/assets/images/display-picture2.png';

const index = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <SafeAreaView className='flex-1 justify-center items-center'>
        <View className="relative rounded-[100px] bg-[#1bb1b2] w-[200px] h-[200px]  justify-center items-center ">
          <Image source={displayImage} style={{
            position: 'absolute',
            top: '-30%',
            width: 300,
            height: 300,
            borderRadius: 100
          }} />
        </View>
        <View className='mt-20'>
          <Text className='text-center text-4xl text-gray-900 text-bold'>Get Organized with your life</Text>
          <Text className='text-center text-xl text-gray-500 text-medium'>Planimate is a simple and effective to-do list and task manager app which helps you manage time</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default index;
