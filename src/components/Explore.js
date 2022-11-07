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
      <Text style={{ fontWeight: "700", fontSize: 16 }}>Explore</Text>
      <View style={style.gridArea}>
        <View style={[style.card]}>
          <View style={style.content}>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("../../assets/rect2.png")}
            />
            <Text style={{ fontWeight: "700", fontSize: 14 }}>Veterinary</Text>
          </View>
        </View>
        <View style={[style.card]}>
          <View style={style.content}>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("../../assets/rect3.png")}
            />
            <Text style={{ fontWeight: "700", fontSize: 14 }}>Market</Text>
          </View>
        </View>
        <View style={[style.card]}>
          <View style={style.content}>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("../../assets/rect4.png")}
            />
            <Text style={{ fontWeight: "700", fontSize: 14 }}>
              Registration
            </Text>
          </View>
        </View>
        <View style={style.card}>
          <View style={style.content}>
            <Image
              style={{ width: 130, height: 130 }}
              source={require("../../assets/rect5.png")}
            />
            <Text style={{ fontWeight: "700", fontSize: 14 }}>
              Ownership Transfer
            </Text>
          </View>
        </View>
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
    width: 152,
    height: 172,
    backgroundColor: "#F7F8FD",
    borderRadius: 8,
    marginBottom: 10,
    marginRight: 20,
  },
  container: {
    marginLeft: 10,
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
