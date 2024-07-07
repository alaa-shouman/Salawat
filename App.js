import { StatusBar } from "expo-status-bar";
import { GlobalStyles } from "./src/constants/styles";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AdhanScreen from "./src/screens/AdhanScreen";
import Intro from "./src/screens/intro";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.green_primary },
          headerTintColor: GlobalStyles.colors.green_lightest,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Intro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "﷽", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="adan"
          component={AdhanScreen}
          options={{
            title: "مواقيت الصلاة",
            headerTitleAlign: "center",
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
