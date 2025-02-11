import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import { categories } from '@/components/CategoryData';

const Category = () => {
  return (
    <View>
      <SafeAreaView>
        <View className='bg-[#1bb1b2] h-[200px]  rounded-b-[100px] oveflow-hidden p-5'>
          <Text>Hello Praise</Text>
          <Text>Today you have four tasks</Text>
        </View>

        <View>
          <FlatList data={categories} keyExtractor={item => item.id.toString()} renderItem={({ item }) => (
            <View>
              <Text>{`${item.icon} ${ item.name }`}</Text>
              <Text>{`${item.tasks} Tasks`}</Text>
            </View>
          )} />
        </View>
      </SafeAreaView>
    </View>
  );
};
export default Category;
