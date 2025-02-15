import { View, Text } from 'react-native';
import React, { createContext, ReactNode, useState } from 'react';

interface Task {
  name: string;
  description?: string;
  dueDate?: string;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return <TaskContext.Provider value={{ tasks, addTask }}>{children}</TaskContext.Provider>;
};

export default TaskContext;
