import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/home";
import Breeds from "./src/screens/breeds";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveBackgroundColor: "#74D896",
          tabBarInactiveBackgroundColor: "#47CD75",
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#ffffff",
          headerStyle: { backgroundColor: "#47CD75" },
          tabBarStyle: { height: 62 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  style={{ width: 43, height: 36 }}
                  source={require("./assets/cow2.png")}
                />
              );
            },
            headerTitleAlign: "center",
            headerLeft: () => (
              <Image
                style={{ width: 18, height: 12, marginLeft: 10 }}
                source={require("./assets/menu.png")}
              />
            ),
            headerRight: () => (
              <Image
                style={{ width: 15, height: 17, marginRight: 10 }}
                source={require("./assets/notify.png")}
              />
            ),
            headerTitle: () => {
              return (
                <Image
                  style={{ width: 63, height: 53 }}
                  source={require("./assets/cow1.png")}
                />
              );
            },
          }}
        />
        <Tab.Screen name="Breeds" component={Breeds} />
        <Tab.Screen name="Stats" component={Breeds} />
        <Tab.Screen name="Profile" component={Breeds} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
