import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SortArea = () => {
  return (
    <View>
      <View style={style.box}>
        <View style={style.content}>
          <Ionicons name="add-circle-outline" size={60} color="black" />
          <Text style={{ fontWeight: "700", fontSize: 16 }}>Add new</Text>
        </View>
      </View>
    </View>
  );
};

export default SortArea;
const style = StyleSheet.create({
  box: {
    width: 154,
    height: 132,
    backgroundColor: "#F7F8FD",
    marginLeft: 10,
  },
  content: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
