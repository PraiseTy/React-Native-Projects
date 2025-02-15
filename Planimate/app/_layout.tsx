import { Slot, Stack } from 'expo-router';
import { TaskProvider } from '@/Context/TaskContext';

// Import your global CSS file
import '../global.css';

export default function RootLayout() {
  return (
    <TaskProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(modal)/add-tasks" options={{ headerShown: false, presentation: 'modal' }} />
      </Stack>
    </TaskProvider>
  );
}

// export default Slot;
