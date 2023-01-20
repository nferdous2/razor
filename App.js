import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, useColorScheme} from "react-native";
import Language from "./src/screens/Profile/Language";
import Privacy from "./src/screens/Profile/Privacy";
import Profile from "./src/screens/Profile/Profile";
import EditProfile from "./src/screens/Profile/EditProfile";
import Appointment from "./src/screens/Appointment/Appointment";
import Notification from "./src/screens/Profile/Notification";
import { StatusBar } from "expo-status-bar";



const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Edit" component={EditProfile} />
          <Stack.Screen name="Privacy" component={Privacy} />
          <Stack.Screen name="Language" component={Language} />
          <Stack.Screen name="Appointment" component={Appointment} />
          <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heighlight:{
    fontWeight:'500'
  }
});
