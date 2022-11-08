import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SortArea = ({ add }) => {
  return (
    <View style={style.containter}>
      <TouchableOpacity style={style.box} onPress={() => add()}>
        <View style={style.content}>
          <Ionicons name="add-circle-outline" size={60} color="black" />
          <Text style={{ fontWeight: "700", fontSize: 16, marginTop: 10 }}>
            Add new
          </Text>
        </View>
      </TouchableOpacity>
      <View style={style.box}>
        <View style={style.content}>
          <Image
            style={{ width: 110, height: 104 }}
            source={require("../../assets/rect1.png")}
          />
          <Text style={{ fontWeight: "700", fontSize: 14 }}>Breed 1</Text>
          <Text style={{ fontWeight: "700", fontSize: 14 }}>20</Text>
        </View>
      </View>
    </View>
  );
};

export default SortArea;
const style = StyleSheet.create({
  containter: {
    minHeight: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  box: {
    width: 160,
    height: 140,
    backgroundColor: "#F7F8FD",
    marginHorizontal: 10,
    borderRadius: 8,
    paddingBottom: 5,
  },
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
