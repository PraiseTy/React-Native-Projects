import React from 'react'
import {Tabs} from "expo-router";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen name='tasks' options={{
                    tabBarIcon: ()=> (
                        <FontAwesome5 name="tasks" size={24} color="black" />
                    )
                }}/>
            <Tabs.Screen name='category' options={{
                tabBarIcon: ()=> (
                    <FontAwesome name="list-alt" size={24} color="black" />
                )
            }}/>
        </Tabs>
    )
}
export default TabsLayout;
