import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatGrid } from "react-native-super-grid";
const height = Dimensions.get("window").height;
const Explore = () => {
  const [items, setItems] = useState([
    { name: "Veterinay", img: require("../../assets/rect2.png") },
    { name: "Market", img: require("../../assets/rect3.png") },
    { name: "Registration", img: require("../../assets/rect4.png") },
    { name: "Ownership Transfer", img: require("../../assets/rect5.png") },
  ]);
  return (
    <View style={style.container}>
      <Text style={{ fontWeight: "700", fontSize: 16 }}>Explore</Text>
      <FlatGrid
        data={items}
        spacing={5}
        style={style.gridArea}
        renderItem={({ item }) => (
          <TouchableOpacity style={[style.card]}>
            <View style={style.content}>
              <Image style={{ width: 130, height: 130 }} source={item.img} />
              <Text style={{ fontWeight: "700", fontSize: 14, marginTop: 9 }}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Explore;

const style = StyleSheet.create({
  gridArea: {
    marginTop: 12,
    marginRight: 16,
    position: "relative",
    right: 5,
    bottom: 5,
  },
  card: {
    width: 154,
    height: 172,
    backgroundColor: "#F7F8FD",
    borderRadius: 8,
    marginBottom: 9,
  },
  container: {
    marginTop: 38,
  },
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
