import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import EditProfile from './src/Profile/EditProfile';
import Language from './src/Profile/Language';
import Notification from './src/Profile/Notification';
import Privacy from './src/Profile/Privacy';
import Profile from './src/Profile/Profile';
import Security from './src/Profile/Security';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Edit" component={EditProfile} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Privacy" component={Privacy} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Security" component={Security} />

    </Stack.Navigator>
  </NavigationContainer>
   <StatusBar style='light'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
