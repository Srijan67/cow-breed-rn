import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/home";
import Breeds from "./src/screens/breeds";
import { Ionicons } from "@expo/vector-icons";
import AddNew from "./src/screens/addNew";
import Details from "./src/screens/details";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const options = {
  headerTitleAlign: "center",
  headerLeft: () => (
    <TouchableOpacity>
      <Image
        style={{ width: 18, height: 12, marginLeft: 10 }}
        source={require("./assets/menu.png")}
      />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <TouchableOpacity>
      <Image
        style={{ width: 15, height: 17, marginRight: 10 }}
        source={require("./assets/notify.png")}
      />
    </TouchableOpacity>
  ),
  headerTitle: () => {
    return (
      <Image
        style={{ width: 63, height: 53 }}
        source={require("./assets/cow1.png")}
      />
    );
  },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Homes"
        screenOptions={{
          headerStyle: { backgroundColor: "#47CD75" },
        }}
      >
        <Stack.Screen
          name="Homes"
          component={TabStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddNew"
          component={AddNew}
          options={{
            ...options,
            headerTitleAlign: "left",
            headerTitleStyle: {
              color: "#D2FFE2",
              fontSize: 18,
            },
            headerTitle: "Add new",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            ...options,
            headerTitleAlign: "left",
            headerTitleStyle: {
              color: "#D2FFE2",
              fontSize: 18,
            },
            headerTitle: "Details",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function TabStack() {
  return (
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
          ...options,
        }}
      />
      <Tab.Screen
        name="Breeds"
        component={Breeds}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 20, height: 20 }}
                source={require("./assets/stats.png")}
              />
            );
          },
          ...options,
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Breeds}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 20, height: 20 }}
                source={require("./assets/static.png")}
              />
            );
          },
          ...options,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Breeds}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={{ width: 24, height: 24 }}
                source={require("./assets/profile.png")}
              />
            );
          },
          ...options,
        }}
      />
    </Tab.Navigator>
  );
}
