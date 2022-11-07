import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import SortArea from "../components/SortArea";

const Breeds = () => {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView style={style.container}>
      <View style={style.textArea}>
        <TextInput
          value={search}
          style={style.inputs}
          placeholder="Search here"
          onChangeText={(e) => setSearch(e)}
          placeholderTextColor={"#000"}
        />
        <Ionicons name="search" size={24} color="black" />
      </View>
      <Text style={{ margin: 10 }}>
        Sort by: <Text style={{ fontSize: 15, fontWeight: "500" }}>New</Text>
      </Text>
      <SortArea />
    </SafeAreaView>
  );
};

export default Breeds;
const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    minHeight: "100%",
  },
  textArea: {
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 13,

    backgroundColor: "#F7F8FD",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  inputs: {
    fontWeight: "700",
    padding: 10,
    fontSize: 16,
  },
});
