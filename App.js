import { NavigationContainer,DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet} from "react-native";
import Language from "./src/screens/Profile/Language";
import Privacy from "./src/screens/Profile/Privacy";
import Profile from "./src/screens/Profile/Profile";
import EditProfile from "./src/screens/Profile/EditProfile";
import Appointment from "./src/screens/Appointment/Appointment";
import Notification from "./src/screens/Profile/Notification";
import { EventRegister } from "react-native-event-listeners";
import { useEffect, useState } from "react";
import themeContext from "./src/config/themeContext";
import theme from './src/config/theme'

const Stack = createNativeStackNavigator();

export default function App() {

const [mode,setMode] = useState(false);
useEffect(()=>{
  let eventListener = EventRegister.addEventListener("changeTheme",(data)=>{
    setMode(data);
    console.log(data)
  });
  return() =>{
    EventRegister.removeEventListener(eventListener)
  }
})



  return (
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
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
    </themeContext.Provider>
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
