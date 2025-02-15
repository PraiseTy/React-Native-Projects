import { View, Text, SafeAreaView, TextInput } from 'react-native';
import React, { useContext, useState } from 'react';
import CustomButton from '@/components/CustomButton';
import TaskContext from '@/Context/TaskContext';
import { router } from 'expo-router';
import DropDownPicker from 'react-native-dropdown-picker';

const AddTask = () => {
  const taskContext = useContext(TaskContext);

  if (!taskContext) return null;

  const { addTask } = taskContext;
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [category, setCategory] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Today', value: 'today' },
    { label: 'Work', value: 'work' },
    { label: 'Planned', value: 'planned' },
    { label: 'Personal', value: 'personal' },
    { label: 'Shopping', value: 'shopping' },
  ]);

  const handleSaveTask = () => {
    addTask({ name: taskName, description: taskDescription, dueDate: taskDate, category });
    setTaskName('');
    setTaskDescription('');
    setTaskDate('');
    setCategory('');
    router.back();
  };
  return (
    <View>
      <SafeAreaView className="mt-10 gap-y-10 mx-2">
        <View>
          <Text className="text-xl font-bold mb-3">Task Name</Text>
          <TextInput
            placeholder="Add a task"
            value={taskName}
            onChangeText={setTaskName}
            className="border-black border-2 p-5 rounded-lg"
          />
        </View>
        <View>
          <Text className="text-xl font-bold mb-3">Description</Text>
          <TextInput
            placeholder="Describe the Task"
            value={taskDescription}
            onChangeText={setTaskDescription}
            className="border-black border-2 p-5 rounded-lg"
          />
        </View>
        <View>
          <Text className="text-xl font-bold mb-3">Date Due</Text>
          <TextInput
            placeholder="Add Task duration"
            value={taskDate}
            onChangeText={setTaskDate}
            className="border-black border-2 p-5 rounded-lg"
          />
        </View>
        <View>
          <Text className="text-xl font-bold mb-3">Category</Text>
          <DropDownPicker
              open={open}
              value={category}
              items={items}
              setOpen={setOpen}
              setValue={setCategory}
              setItems={setItems}
              placeholder="Select a category"
              containerStyle={{ marginBottom: open ? 200 : 0 }}
          />
        </View>
        <View>
          <CustomButton onPress={handleSaveTask} title="Save Task" containerStyle="mt-10" />
        </View>
      </SafeAreaView>
    </View>
  );
};
export default AddTask;
