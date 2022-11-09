import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import SortArea from "../components/SortArea";

const Breeds = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={style.container}>
      <View style={style.textArea}>
        <TextInput
          value={search}
          style={style.inputs}
          placeholder="Search here"
          onChangeText={(e) => setSearch(e)}
          placeholderTextColor={"#999999"}
        />
        <Ionicons
          style={{ marginRight: 10 }}
          name="search"
          size={21}
          color="black"
        />
      </View>
      <Text style={{ margin: 16, marginTop: 22 }}>
        Sort by: <Text style={{ fontSize: 15, fontWeight: "500" }}>New</Text>
      </Text>
      <SortArea
        add={() => navigation.navigate("AddNew")}
        details={() => navigation.navigate("Details")}
      />
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
    marginHorizontal: 16,
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
