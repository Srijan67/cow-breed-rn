import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const height = Dimensions.get("window").height;
const Explore = () => {
  return (
    <View style={style.container}>
      <Text style={{ fontWeight: "700", fontSize: 16, marginLeft: 10 }}>
        Explore
      </Text>
      <View style={style.gridArea}>
        <TouchableOpacity style={[style.card]}>
          <View style={style.content}>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("../../assets/rect2.png")}
            />
            <Text style={{ fontWeight: "700", fontSize: 14 }}>Veterinary</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[style.card]}>
          <View style={style.content}>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("../../assets/rect3.png")}
            />
            <Text style={{ fontWeight: "700", fontSize: 14 }}>Market</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[style.card]}>
          <View style={style.content}>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("../../assets/rect4.png")}
            />
            <Text style={{ fontWeight: "700", fontSize: 14 }}>
              Registration
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.card}>
          <View style={style.content}>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("../../assets/rect5.png")}
            />
            <Text style={{ fontWeight: "700", fontSize: 14 }}>
              Ownership Transfer
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Explore;

const style = StyleSheet.create({
  gridArea: {
    marginTop: 10,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  card: {
    width: 172,
    height: 192,
    backgroundColor: "#F7F8FD",
    borderRadius: 8,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  container: {
    marginLeft: 0,
    marginTop: 10,
  },
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
