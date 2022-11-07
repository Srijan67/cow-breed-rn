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
const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", minHeight: height * 100 }}>
      <AllCows />
      <Explore />
      <View style={style.floatBtn}>
        <TouchableOpacity
          onPress={() => {
            return console.log(" HI CLIECKED");
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
    top: height * 67,
    right: 25,
  },
});
