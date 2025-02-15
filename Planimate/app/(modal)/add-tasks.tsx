import {View, Text, SafeAreaView, TextInput} from 'react-native'
import React, {useContext, useState} from 'react'
import CustomButton from "@/components/CustomButton";
import TaskContext from "@/Context/TaskContext";
import {router} from "expo-router";

const AddTask = () => {
    const taskContext = useContext(TaskContext);

    if (!taskContext) return null;

    const {addTask}  = taskContext;
    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')

    const handleSaveTask =  () => {
        addTask({name: taskName, description: taskDescription, dueDate: taskDate})
        setTaskName("");
        setTaskDescription("");
        setTaskDate("");
        router.back()
    }
    return (
    <View>
        <SafeAreaView className='mt-10'>
            <View>
                <Text>Task Name</Text>
                <TextInput placeholder='Add a task' value={taskName} onChangeText={setTaskName} />
            </View>
            <View className='my-5'>
                <Text>Description</Text>
                <TextInput placeholder='Describe the Task' value={taskDescription} onChangeText={setTaskDescription} />
            </View>
            <View>
                <Text>Date Due</Text>
                <TextInput placeholder='Add Task duration' value={taskDate} onChangeText={setTaskDate} />
            </View>
            <View>
                <CustomButton onPress={handleSaveTask} title='Save Task'  containerStyle='mt-10'/>
            </View>
        </SafeAreaView>
    </View>
    )
}
export default AddTask;
