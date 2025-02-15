import { View, Text, SafeAreaView } from 'react-native';
import React, { useContext } from 'react';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import TaskContext from '@/Context/TaskContext';

const Tasks = () => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) return null;
  const { tasks } = taskContext;

  return (
    <View>
      <SafeAreaView className="mt-10">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <View
              key={index}
              className="mb-5 rounded-lg bg-white bg-opacity-80 border-gray-300 shadow-xl space-y-3 p-3"
            >
              <Text className="text-xl">Task: {task.name}</Text>
              <Text className="text-md">Description: {task.description}</Text>
              <Text className='text-md'>Due Date: {task.dueDate}</Text>
              <Text className='text-md font-medium' >Category: {task.category}</Text>
            </View>
          ))
        ) : (
          <Text>No task yet</Text>
        )}

        <View>
          <CustomButton title="Add Task" onPress={() => router.push('../add-tasks')} containerStyle="mt-10" />
        </View>
      </SafeAreaView>
    </View>
  );
};
export default Tasks;
