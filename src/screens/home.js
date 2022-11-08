import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AllCows from "../components/AllCows";
import Explore from "../components/Explore";
const height = Dimensions.get("screen").height / 100;
const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", minHeight: height * 100 }}>
      <AllCows add={() => navigation.navigate("AddNew")} />
      <Explore />
      <View style={style.floatBtn}>
        <TouchableOpacity
          onPress={() => {
            return navigation.navigate("AddNew");
          }}
        >
          <Ionicons name="add-circle-outline" size={55} color="#47CD75" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
const style = StyleSheet.create({
  floatBtn: {
    position: "absolute",
    zIndex: 1000,
    top: height * 70,
    right: 25,
  },
});
