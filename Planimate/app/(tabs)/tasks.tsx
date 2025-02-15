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
      <SafeAreaView>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <View key={index} className="mb-5">
              <Text>{task.name}</Text>
              <Text>{task.description}</Text>
              <Text>Due Date: {task.dueDate}</Text>
              <Text>Days Left: 14</Text>
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
