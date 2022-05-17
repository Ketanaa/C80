/*import { StatusBar } from 'expo-status-bar';*/
import { StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { StackView } from "@react-navigation/stack";

import StarMapScreen from './screens/starMap';
import DailyPicScreen from "./screens/dailyPic";
import SpaceCraftsScreen from "./screens/spaceCrafts";
import HomeScreen from './screens/Home';

function App() {
  return (
    <NavigationContainer>
      <StackView.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}> 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
      </StackView.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
